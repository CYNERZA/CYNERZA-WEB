import React, { useRef } from "react"
import { motion } from "framer-motion";
import { useState } from "react";
import RTE from "@/components/RTE";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createBlogPost } from "@/featured/blog/blogSlice";
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from "react-router-dom";

const BlogForm: React.FC = () => {
  const editorRef = useRef<any>(null);
  const dispatch = useDispatch();
  const { toast } = useToast()

  const loading = useSelector((state: any) => state.blog.loading);
  const errorMessage = useSelector((state: any) => state.blog.errorMessage);
  const successMessage = useSelector((state: any) => state.blog.successMessage);

  interface FormData {
    title: string;
    description: string;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    tags?: string;
    image: FileList;
    postingDate: string;
    content: string
  }

  const { control, handleSubmit, register, reset, formState: { errors }, getValues }
    = useForm<FormData>()
  const navigate = useNavigate()

  const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const onSubmit = (data: FormData) => {
    const formData = new FormData();
    for (const key in data) {
      if (key !== "image") {
        formData.append(key, data[key])
      }
    } 
    formData.append("image", data.image[0])
    dispatch(createBlogPost(formData));
  };
   if (errorMessage !== "") {
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
    if (successMessage !== "") {
      reset();
      navigate("/admin/blogs")
      toast({
        title: "Success",
        description: successMessage,
        variant: "default",
      });
    }

  return (
    <section>
      <motion.form
        variants={fade}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto bg-gray-800 text-gray-100 p-6 rounded-lg shadow space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create Blog Post</h2>

        <div className="space-y-2">
          <label>Blog Title:</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter blog title"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        <div className="space-y-2">
          <label>Blog Description:</label>
          <textarea
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
            {...register("description", { required: "Description is required" })}
            placeholder="Enter blog description"
          ></textarea>
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label>Meta Title (Optional):</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
              {...register("metaTitle")}
              placeholder="Enter meta title"
            />
          </div>

          <div className="space-y-2">
            <label>Meta Description (Optional):</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
              {...register("metaDescription")}
              placeholder="Enter meta description"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label>Meta Keywords (Optional):</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
            {...register("metaKeywords")}
            placeholder="Enter meta keywords (comma separated)"
          />
        </div>

        <div className="space-y-2">
          <label>Tags:</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
            {...register("tags")}
            placeholder="Enter tags (e.g. JavaScript, React, Frontend)"
          />
        </div>

        <div className="space-y-2">
          <label>Upload a thumbnail image:</label>
          <input
            type="file"
            className="w-full p-2 bg-gray-700 rounded text-white"
            {...register("image", { required: "Image is required" })}
            accept="image/*"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>

        <div className="space-y-2">
          <label>Posting Date:</label>
          <input
            type="date"
            {...register("postingDate", { required: "Posting date is required" })}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
          />
          {errors.postingDate && <p className="text-red-500">{errors.postingDate.message}</p>}
        </div>

        <div className="space-y-2">
          <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700"
          >
            Delete
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? "Posting..." : "Submit"}
          </motion.button>
        </div>
      </motion.form>
    </section>
  );

};




export default BlogForm