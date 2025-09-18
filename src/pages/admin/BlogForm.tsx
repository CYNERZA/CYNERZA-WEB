import React, { useRef } from "react"
import RTE from "@/components/admin/editor/RTE";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createBlogPost, updateBlogPost } from "@/featured/blog/blogSlice";
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AppDispatch } from "@/app/store";

interface FormData {
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  tags?: string;
  thumbImage: FileList;
  postingDate: string;
  content: string
}
interface Post {
  _id?: string
  slug?:string
  title?: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  tags?: string;
  thumbImage?: FileList;
  postingDate?: string;
  content?: string;
}

// Props type for BlogForm
interface BlogFormProps {
  post?: Post; // optional
}

interface BlogPostResponse {
  error?: {
    message: string;
  };
  payload?: {
    message: string;
    data: {
      slug: string;
      [key: string]: any;
    };
  };
}

const BlogForm: React.FC<BlogFormProps> = ({ post }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const { toast } = useToast()
  const loading = useSelector((state: any) => state.blog.loading);

  const { control, handleSubmit, register, formState: { errors }, getValues }
    = useForm<FormData>({
      defaultValues: {
        title: post ? post.title : "",
        description: post ? post.description : "",
        metaTitle: post ? post.metaTitle : "",
        metaDescription: post ? post.metaDescription : "",
        metaKeywords: post ? post.metaKeywords : "",
        postingDate: post && post.postingDate
          ? new Date(post.postingDate).toISOString().split('T')[0]
          : "",
        tags: post ? post.tags : "",
        thumbImage: post ? post.thumbImage : undefined,
        content: post ? post.content : ""

      }
    })


  function generateSlug(text: string): string {
    return text
      .toString()
      .toLowerCase() // Convert to lowercase
      .normalize('NFD') // Normalize to decomposed form for diacritic removal
      .replace(/[\u0300-\u036f]/g, '') // Remove combining diacritical marks
      .replace(/[^\u0A80-\u0AFF\u002D\u0030-\u0039\u0061-\u007A\u0020]/g, '') // Allow only Gujarati, hyphens, numbers, basic Latin
      .replace(/[\s]+/g, '-') // Replace spaces with hyphens
      .replace(/[-]+/g, '-') // Replace multiple hyphens with single
      .replace(/^-+/, '') // Trim hyphens from start
      .replace(/-+$/, ''); // Trim hyphens from end
  }

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    const slug = generateSlug(data.title)
    formData.append("title", data.title);
    formData.append("slug", slug);
    formData.append("description", data.description);
    formData.append("metaTitle", data.metaTitle || "");
    formData.append("metaDescription", data.metaDescription || "");
    formData.append("metaKeywords", data.metaKeywords || "");
    formData.append("tags", data.tags || "");
    formData.append("postingDate", data.postingDate);

    if (data.thumbImage?.[0] instanceof File) {
      formData.append("thumbImage", data.thumbImage[0]);
    }

    // Process editor content
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.content, "text/html");

    // Process images and videos together
    const mediaElements = Array.from(doc.querySelectorAll("img, video"));
    const mediaPromises = mediaElements.map(async (el, index) => {
      const src = el.getAttribute("src") || "";
      const isBlob = src.startsWith("blob:");
      const isDataUrl = src.startsWith("data:");

      if (isBlob || isDataUrl) {
        try {
          const response = await fetch(src);
          const blob = await response.blob();

          // Determine file type
          let fileExt = "bin";
          if (el.tagName === "IMG") {
            fileExt = blob.type.split("/")[1] || "jpg";
          } else if (el.tagName === "VIDEO") {
            fileExt = blob.type.split("/")[1] || "mp4";
          }

          const filename = `media-${Date.now()}-${index}.${fileExt}`;

          // Append to formData with appropriate field name
          if (el.tagName === "IMG") {
            formData.append("editorImages", blob, filename);
          } else {
            formData.append("editorVideos", blob, filename);
          }

          // Update src to filename for server reference
          el.setAttribute("src", filename);
        } catch (error) {
          console.error("Error processing media:", error);
          // Fallback - keep original src if processing fails
        }
      }
    });

    await Promise.all(mediaPromises);

    // Update HTML content
    const updatedHtml = doc.body.innerHTML;
    formData.append("content", updatedHtml);

    // Submit to server
    post
      ? dispatch(updateBlogPost({ blogId: post._id, blogPost: formData }))
        .then((res: any) => {
          if (!res.error) {
            navigate(`/admin/blogs/${res.payload.data.slug}`)
            toast({
              title: "Success",
              description: res.payload.message,
            })
          } else {
            toast({
              title: "Error",
              description: "Opps..! Something went wrong",
              variant: "destructive",
            })
          }
        })
      : dispatch(createBlogPost(formData))
        .then(async (res: any) => {
          if (!res.error) {
            navigate("/admin/blogs")
            toast({
              title: "Success",
              description: res.payload.message,
            })
          } else {
            console.log("error: ", res.error.message)
            toast({
              title: "Error",
              description: "Opps..! Something went wrong",
              variant: "destructive",
            })
          }
        })

  };


  return (
    <section className="flex items-center justify-center min-h-screen w-full py-0 px-2 sm:px-4">
      <div className=" sm:p-6 flex flex-col justify-center rounded-md
        w-full md:max-w-2xl lg:max-w-3xl">
        <form
          className=" p-6 rounded-lg space-y-4 glass-effect"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-200">Create Blog Post</h2>

          <div className="space-y-2">
            <label className="text-gray-800 dark:text-gray-400">Blog Title:</label>
            <input
              type="text"
              className="focus:outline-none w-full px-4 py-2 border
             border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
              {...register("title", {
                required: !post ? "Title is required" : false
              })}
              placeholder="Enter blog title"
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-gray-800 dark:text-gray-400">Blog Description:</label>
            <textarea
              className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2
           focus:ring-cynerza-purple focus:border-cynerza-purple"
              {...register("description", {
                required: !post ? "Description is required" : false
              })}
              placeholder="Enter blog description"
            ></textarea>
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-gray-800 dark:text-gray-400">Meta Title (Optional):</label>
              <input
                type="text"
                className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2
               focus:ring-cynerza-purple focus:border-cynerza-purple"
                {...register("metaTitle")}
                placeholder="Enter meta title"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-800 dark:text-gray-400">Meta Description (Optional):</label>
              <input
                type="text"
                className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2
               focus:ring-cynerza-purple focus:border-cynerza-purple"
                {...register("metaDescription")}
                placeholder="Enter meta description"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-800 dark:text-gray-400">Meta Keywords (Optional):</label>
            <input
              type="text"
              className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2
             focus:ring-cynerza-purple focus:border-cynerza-purple"
              {...register("metaKeywords")}
              placeholder="Enter meta keywords (comma separated)"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-800 dark:text-gray-400">Tags:</label>
            <input
              type="text"
              className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2
             focus:ring-cynerza-purple focus:border-cynerza-purple"
              {...register("tags")}
              placeholder="Enter tags (e.g. JavaScript, React, Frontend)"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-800 dark:text-gray-400">Upload a thumbnail image:</label>
            <input
              type="file"
              className="w-full px-4 py-2 text-gray-800 dark:text-gray-400"
              {...register("thumbImage", {
                required: !post ? "Image is required" : false
              })}
              accept="image/*"
            />
            {errors.thumbImage && <p className="text-red-500">{errors.thumbImage.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-gray-800 dark:text-gray-400">Posting Date:</label>
            <input
              type="date"
              {...register("postingDate", {
                required: !post ? "Posting date is required" : false
              })}
              className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2
             focus:ring-cynerza-purple focus:border-cynerza-purple"
            />
            {errors.postingDate && <p className="text-red-500">{errors.postingDate.message}</p>}
          </div>

          <div className="space-y-2">
            <RTE
              label="Content :"
              name="content"
              control={control}
              defaultValue={getValues("content")}
              rules={{
                required: "Content is required",
                validate: (value) =>
                  !value || value.trim() === '<p></p>' ? "Content cannot be empty" : true
              }}
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            {post && <Button
              type="button"
              onClick={() =>   navigate(`/admin/blogs/${post.slug}`)}
              className="w-full bg-cynerza-purple hover:bg-cynerza-purple/90"
            >
              Cancle
            </Button>}

            <Button
              type="submit"
              className="w-full bg-cynerza-purple hover:bg-cynerza-purple/90"
              disabled={loading}
            >
              {post ?
                (loading ? "Updating..." : "Update")
                :
                (loading ? "Submitting..." : "Submit")}
            </Button>

          </div>
        </form>
      </div>
    </section>
  );

};




export default BlogForm