import React, { useRef } from "react"
import { motion } from "framer-motion";
import { useState } from "react";
import RTE from "@/components/editor/RTE";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createBlogPost, updateBlogPost } from "@/featured/blog/blogSlice";
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
const BlogForm: React.FC<BlogFormProps> = ({ post }) => {
  const dispatch = useDispatch();
  const { toast } = useToast()

  const loading = useSelector((state: any) => state.blog.loading);


  const { control, handleSubmit, register, reset, formState: { errors }, getValues }
    = useForm<FormData>({
      defaultValues: {
        title: post ? post.title : "",
        description: post ? post.description : "",
        metaTitle: post ? post.metaTitle : "",
        metaDescription: post ? post.metaDescription : "",
        metaKeywords: post ? post.metaKeywords : "",
        postingDate: post ? post.postingDate : "",
        tags: post ? post.tags : "",
        thumbImage: post ? post.thumbImage : undefined,
        content: post ? post.content : ""

      }
    })
  const navigate = useNavigate()

  const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const onSubmit = async (data: FormData) => {
    if (post) {
      const formData = new FormData()
      formData.append("title", data.title)
      formData.append("description", data.description)
      formData.append("metaTitle", data.metaTitle || "")
      formData.append("metaDescription", data.metaDescription || "")
      formData.append("metaKeywords", data.metaKeywords || "")
      formData.append("tags", data.tags || "")
      formData.append("postingDate", data.postingDate)
      formData.append("thumbImage", data.thumbImage[0])

      const parser = new DOMParser()
      const doc = parser.parseFromString(data.content, "text/html")
      const imgEls = Array.from(doc.querySelectorAll("img"))

      for (let i = 0; i < imgEls.length; i++) {
        const imgEl = imgEls[i]
        const src = imgEl.src

        if (src.startsWith("data:")) {
          const response = await fetch(src)
          const blob = await response.blob()
          const filename = `editor-image-${Date.now()}-${i}.png`
          formData.append("editorImages", blob, filename)

          imgEl.setAttribute("src", filename)
        }
      }

      const updatedHtml = doc.body.innerHTML
      formData.append("content", updatedHtml)

      dispatch(updateBlogPost({ blogId: post._id, blogPost: formData }))
        .then((res) => {
          reset();
          navigate(`/admin/blogs/${post._id}`)
          toast({
            title: "Success",
            description: res.payload.message,
            variant: "default",
          });
        }).catch((error) => {
          console.log("eror", error)
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        })
    } else {
      const formData = new FormData()
      formData.append("title", data.title)
      formData.append("description", data.description)
      formData.append("metaTitle", data.metaTitle || "")
      formData.append("metaDescription", data.metaDescription || "")
      formData.append("metaKeywords", data.metaKeywords || "")
      formData.append("tags", data.tags || "")
      formData.append("postingDate", data.postingDate)
      formData.append("thumbImage", data.thumbImage[0])

      const parser = new DOMParser()
      const doc = parser.parseFromString(data.content, "text/html")
      const imgEls = Array.from(doc.querySelectorAll("img"))

      for (let i = 0; i < imgEls.length; i++) {
        const imgEl = imgEls[i]
        const src = imgEl.src

        if (src.startsWith("data:")) {
          const response = await fetch(src)
          const blob = await response.blob()
          const filename = `editor-image-${Date.now()}-${i}.png`
          formData.append("editorImages", blob, filename)

          imgEl.setAttribute("src", filename)
        }
      }

      const updatedHtml = doc.body.innerHTML
      formData.append("content", updatedHtml)
      dispatch(createBlogPost(formData))
        .then((res) => {
          reset();
          navigate('/admin/blogs/')
          toast({
            title: "Success",
            description: res.payload.message,
            variant: "default",
          });
        }).catch((error) => {
          console.log("eror", error)
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        })
    }

  }

  return (
    <section className="flex items-center justify-center min-h-screen w-full py-0 px-2 sm:px-4">
      <div className="glass-effect sm:p-6 flex flex-col justify-center rounded-md
        w-full md:max-w-2xl lg:max-w-3xl">
        <motion.form
          variants={fade}
          initial="hidden"
          animate="visible"
          className=" p-6 rounded-lg space-y-4"
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
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            {post && <Button
              type="button"
              onClick={() => navigate(`/admin/blog/${post._id}`)}
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
                (loading ? "Updating" : "Update")
                :
                (loading ? "Submitting..." : "Submit")}
            </Button>

          </div>
        </motion.form>
      </div>
    </section>
    // </section>
  );

};




export default BlogForm