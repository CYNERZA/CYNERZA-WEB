import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDNIRY_CLOUD_NAME,
    api_key: process.env.CLOUDNIRY_API_KEY,
    api_secret: process.env.CLOUDNIRY_API_SECRET
})

const uploadImage = async (imagePath) => {
  if (!imagePath) throw new Error('Image path is required');
  if (!fs.existsSync(imagePath)) throw new Error('Image file not found');

  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'blog_images',
      resource_type: 'image'
    });
    fs.unlinkSync(imagePath); // Clean up local file
    return result.secure_url;
  } catch (error) {
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    throw new Error(`Image upload failed: ${error.message}`);
  }
};


const uploadVideo = async (videoPath) => {
  if (!videoPath) throw new Error('Video path is required');
  if (!fs.existsSync(videoPath)) throw new Error('Video file not found');

  try {
    const result = await cloudinary.uploader.upload(videoPath, {
      folder: 'blog_videos',
      resource_type: 'video',
      chunk_size: 6000000 // 6MB chunks
    });
    fs.unlinkSync(videoPath); // Clean up local file
    return result.secure_url;
  } catch (error) {
    if (fs.existsSync(videoPath)) fs.unlinkSync(videoPath);
    throw new Error(`Video upload failed: ${error.message}`);
  }
};

const extractPublicId = (url) => {
  if (!url) throw new Error('URL is required');
  
  // Match Cloudinary URL pattern
  const matches = url.match(/\/upload\/(?:v\d+\/)?([^/]+\/[^/]+)(?:\.\w+)?(?:\/|$)/);
  if (!matches || !matches[1]) {
    throw new Error('Invalid Cloudinary URL');
  }
  
  return matches[1];
};

const deleteByUrl = async (url) => {
  if (!url) throw new Error('URL is required');

  try {
    const publicId = extractPublicId(url);
    const isVideo = url.includes('/video/upload/');
    
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: isVideo ? 'video' : 'image',
      invalidate: true
    });
    
    return result.result === 'ok';
  } catch (error) {
    throw new Error(`Deletion failed: ${error.message}`);
  }
};


export {
    uploadImage,
    uploadVideo,
    deleteByUrl
}