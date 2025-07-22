import React, { useRef } from "react"
import { motion } from "framer-motion";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import RTE from "@/components/RTE";
import { useForm } from "react-hook-form";

const Admin: React.FC = () => {
  const [date, setDate] = useState("");
  const editorRef = useRef<any>(null);

  const {control} = useForm()

  const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log("Blog content:", content);
    }
  };

  return (
   <section>
     <motion.form
      variants={fade}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto bg-gray-800 text-gray-100 p-6 rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Create Blog Post</h2>

      <div className="space-y-2">
        <label>Blog Title:</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
        />
      </div>

      {/* <div className="space-y-2">
        <label>Blog Description:</label>
        <textarea
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
        ></textarea>
      </div> */}

      {/* <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label>Meta Title (Optional):</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
          />
        </div> 

         <div className="space-y-2">
          <label>Meta Description (Optional):</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
          />
        </div>
      </div> */}

      {/* <div className="space-y-2">
        <label>Meta Keywords (Optional):</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
        />
      </div> */}

      {/* <div className="space-y-2">
        <label>Tags:</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
        />
      </div> */}

      <div className="space-y-2">
        <label>Upload a thumbnail image:</label>
        <input
          type="file"
          className="w-full p-2 bg-gray-700 rounded text-white"
        />
      </div>

      <div className="space-y-2">
        <label>Posting Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
        />
      </div>

      {/* <div className="space-y-2">
        <label>Content:</label>
        <textarea
          className="w-full min-h-[100px] p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
        ></textarea>
      </div> */}

         <div className="space-y-2">
         <RTE label="Content :" name="content" control={control} />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          className="px-4 py-2 rounded bg-red-600 hover:bg-red-700"
        >
          Delete
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700"
        >
          Post
        </motion.button>
      </div>
    </motion.form>
   </section>
  );
};




export default Admin