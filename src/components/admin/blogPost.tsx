import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchBlogPosts, deleteBlogPost } from '@/featured/blog/blogSlice';
import { RootState, AppDispatch } from '@/app/store';
import { useToast } from '@/components/ui/use-toast';
import LogoLoader from './loader'; 

const normalizeSlugForCompare = (raw?: string) => {
  if (!raw) return '';
  let s = raw;
  try { s = decodeURIComponent(s); } catch (e) { s = raw; }
  s = s.normalize?.('NFKC') ?? s;
  s = s.toLowerCase().trim();
  s = s.replace(/^\/+|\/+$/g, '');
  s = s.replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
  return s;
};

export const BlogDetailPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const [initialLoad, setInitialLoad] = useState(true);
  const blogs = useSelector((state: RootState) => state.blog.blogPosts);
  const loading = useSelector((state: RootState) => state.blog.loading);

  const normalizedUrlSlug = useMemo(() => normalizeSlugForCompare(slug), [slug]);

  // canonicalize admin URL if user manually edits it
  useEffect(() => {
    if (slug === undefined) return;
    if (!normalizedUrlSlug) {
      navigate('/admin/blogs', { replace: true });
      return;
    }
    if (slug !== normalizedUrlSlug) {
      navigate(`/admin/blogs/${encodeURIComponent(normalizedUrlSlug)}`, { replace: true });
    }
  }, [slug, normalizedUrlSlug, navigate]);

  // fetch posts
  useEffect(() => {
    if (!blogs.length) {
      dispatch(fetchBlogPosts()).finally(() => setInitialLoad(false));
    } else setInitialLoad(false);
  }, [dispatch]);

  // find blog by slug
  const currentBlog = useMemo(() => {
    if (!blogs?.length || !normalizedUrlSlug) return undefined;
    return blogs.find(b => normalizeSlugForCompare(b.slug) === normalizedUrlSlug);
  }, [blogs, normalizedUrlSlug]);

  if (initialLoad || loading) return <LogoLoader />;

  const handleEdit = () => {
    if (!currentBlog) return;
    navigate(`/admin/update-blog/${currentBlog._id}`);
  };

  const handleDelete = () => {
    if (!currentBlog) return;
    dispatch(deleteBlogPost(currentBlog._id))
      .then((res: any) => {
        if (!res.error) {
          navigate('/admin/blogs');
          toast({
            title: 'Success',
            description: res.payload?.message || 'Deleted successfully',
            variant: 'default',
          });
        } else {
          console.error('error: ', res.error?.message);
          toast({ title: 'Error', description: 'Opps..! Something went wrong', variant: 'destructive' });
        }
      })
      .catch(err => {
        console.error(err);
        toast({ title: 'Error', description: 'Opps..! Something went wrong', variant: 'destructive' });
      });
  };

  return !currentBlog ? (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] p-8">
      <FileText className="w-16 h-16 text-red-500 mb-4 animate-pulse" />
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Blog Not Found</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-md">Requested blog does not exist or might have been removed.</p>
      <Button variant="outline" className="px-6" onClick={() => navigate('/admin/blogs')}>← Back to Blogs</Button>
    </div>
  ) : (
    <div className="min-h-screen p-4 sm:p-8 bg-white dark:bg-gray-900 transition-colors max-w-4xl mx-auto">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" onClick={() => navigate('/admin/blogs')}>← Back</button>
        <div className="flex space-x-2 w-full justify-between sm:justify-end">
          <button onClick={handleEdit} className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-transform">Edit</button>
          <button onClick={handleDelete} className="px-3 py-1 sm:px-4 sm:py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-transform" disabled={loading}>{loading ? 'Deleting...' : 'Delete'}</button>
        </div>
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center sm:text-left">{currentBlog.title}</h1>
      <img src={currentBlog.thumbImage} alt={currentBlog.title} className="w-full h-64 sm:h-96 rounded-lg mb-8 shadow-lg" />

      <div className="raw-content text-slate-900 dark:text-slate-200" dangerouslySetInnerHTML={{ __html: currentBlog.content }} />
    </div>
  );
};
