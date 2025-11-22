import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Admin: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Welcome back! Here's what's happening with your blog today.
          </p>
        </div>
        <Button onClick={() => navigate('/admin/create-blog')}>
          <FileText className="mr-2 h-4 w-4" />
          New Blog Post
        </Button>
      </div>
      </div>

  );
};

export default Admin;




