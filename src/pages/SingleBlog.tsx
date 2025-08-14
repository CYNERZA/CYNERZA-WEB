import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchBlogPosts } from '@/featured/blog/blogSlice';
import { RootState, AppDispatch } from '@/app/store';
import {
    FileText, ArrowLeft, Calendar,
    Share2, Twitter, Facebook, Linkedin, Copy,
    ChevronUp, ZoomIn, ZoomOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

/** Normalize & sanitize slug for URL & comparison (ascii-style) */
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

const SingleBlog: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { slug } = useParams<{ slug: string }>();
    const contentRef = useRef<HTMLDivElement>(null);

    // State
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [fontSize, setFontSize] = useState(18);

    const blogs = useSelector((state: RootState) => state.blog.blogPosts);
    const loading = useSelector((state: RootState) => state.blog.loading);

    // normalized incoming slug
    const normalizedUrlSlug = useMemo(() => normalizeSlugForCompare(slug), [slug]);

    // ensure canonical URL (lowercase, sanitized)
    useEffect(() => {
        if (slug === undefined) return;
        if (!normalizedUrlSlug) {
            navigate('/blogs', { replace: true });
            return;
        }
        if (slug !== normalizedUrlSlug) {
            navigate(`/blogs/${encodeURIComponent(normalizedUrlSlug)}`, { replace: true });
        }
    }, [slug, normalizedUrlSlug, navigate]);

    // fetch posts
    useEffect(() => {
        if (!blogs.length) dispatch(fetchBlogPosts());
    }, [dispatch]);

    // find by normalized stored slug
    const currentBlog = useMemo(() => {
        if (!blogs?.length || !normalizedUrlSlug) return undefined;
        return blogs.find(b => {
            const stored = normalizeSlugForCompare(b.slug);
            return stored === normalizedUrlSlug;
        });
    }, [blogs, normalizedUrlSlug]);

    // scroll tracking
    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // sharing functions
    const shareToTwitter = () => {
        const text = encodeURIComponent(currentBlog?.title || '');
        const url = encodeURIComponent(window.location.href);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        setShowShareMenu(false);
    };
    const shareToFacebook = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        setShowShareMenu(false);
    };
    const shareToLinkedin = () => {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(currentBlog?.title || '');
        const summary = encodeURIComponent(`Check out this amazing article: ${currentBlog?.title || ''}`);
        window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${url}&title=${title}&summary=${summary}`, '_blank');
        setShowShareMenu(false);
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
        setShowShareMenu(false);
    };
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // animation variants (same as before)
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } } };

    if (loading) {
        return (
            <motion.div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="text-center px-4">
                    <motion.div className="inline-block w-12 h-12 sm:w-16 sm:h-16 border-4 border-purple-200 dark:border-purple-800 border-t-purple-600 dark:border-t-purple-400 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                    <motion.p className="mt-4 text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">Loading your reading experience...</motion.p>
                </div>
            </motion.div>
        );
    }

    if (!currentBlog) {
        return (
            <motion.div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <FileText className="w-16 h-16 sm:w-24 sm:h-24 text-red-500 mb-6" />
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">Blog Not Found</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md text-sm sm:text-base">The story you're looking for doesn't exist or has been moved.</p>
                <Button onClick={() => navigate('/blogs')} size="lg" className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Explore Stories
                </Button>
            </motion.div>
        );
    }

    // render article (structure preserved)
    return (
        <div className="min-h-screen transition-colors">
            {/* Floating Action Buttons */}
            <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 flex flex-col gap-3 z-40">
                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button onClick={scrollToTop} className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        </motion.button>
                    )}
                </AnimatePresence>

                <motion.div className="relative">
                    <motion.button onClick={() => setShowShareMenu(!showShareMenu)} className="p-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Share2 className="w-5 h-5" />
                    </motion.button>

                    <AnimatePresence>
                        {showShareMenu && (
                            <motion.div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2 min-w-[220px] sm:min-w-[240px]" initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-3 py-2 uppercase tracking-wide">Share this post</h4>
                                    <button onClick={shareToTwitter} className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"><Twitter className="w-4 h-4 text-blue-500" /><span className="text-sm">Share on X</span></button>
                                    <button onClick={shareToFacebook} className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"><Facebook className="w-4 h-4 text-blue-600" /><span className="text-sm">Share on Facebook</span></button>
                                    <button onClick={shareToLinkedin} className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"><Linkedin className="w-4 h-4 text-blue-700" /><span className="text-sm">Share on LinkedIn</span></button>
                                    <Separator className="my-1 bg-gray-200 dark:bg-gray-600" />
                                    <button onClick={copyToClipboard} className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-700 dark:text-gray-300"><Copy className="w-4 h-4 text-gray-600" /><span className="text-sm">Copy link</span></button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Reading Controls (font size) */}
            <div className="fixed left-4 sm:left-6 bottom-4 sm:bottom-6 flex flex-col gap-3 z-40">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors" disabled={fontSize <= 14}><ZoomOut className="w-4 h-4 text-gray-600 dark:text-gray-400" /></button>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 min-w-[35px] text-center">{fontSize}px</span>
                            <button onClick={() => setFontSize(Math.min(28, fontSize + 2))} className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors" disabled={fontSize >= 28}><ZoomIn className="w-4 h-4 text-gray-600 dark:text-gray-400" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen" variants={containerVariants} initial="hidden" animate="visible">
                <motion.div className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700" variants={itemVariants}>
                    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                        <Button variant="ghost" size="sm" onClick={() => navigate('/blogs')} className="hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                            <ArrowLeft className="w-4 h-4 mr-2" /><span className="hidden sm:inline">Back to Stories</span><span className="sm:hidden">Back</span>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => setShowShareMenu(!showShareMenu)} className="sm:hidden hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"><Share2 className="w-4 h-4" /></Button>
                    </div>
                </motion.div>

                <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <motion.article variants={itemVariants}>
                        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 leading-tight text-center lg:text-left" variants={itemVariants}>
                            {currentBlog.title}
                        </motion.h1>

                        <motion.div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-gray-200 dark:border-gray-700 justify-center lg:justify-start" variants={itemVariants}>
                            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="hidden sm:inline font-medium">{new Date(currentBlog.createdAt || Date.now()).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    <span className="sm:hidden font-medium">{new Date(currentBlog.createdAt || Date.now()).toLocaleDateString('en-GB', { year: '2-digit', month: 'short', day: 'numeric' })}</span>
                                </span>
                            </div>
                        </motion.div>

                        <motion.div className="mb-8 sm:mb-12 lg:mb-16 relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl" variants={itemVariants}>
                            <motion.img src={currentBlog.thumbImage} alt={currentBlog.title} className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px] object-contain" onLoad={() => setImageLoaded(true)} initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: imageLoaded ? 1 : 0 }} transition={{ duration: 0.8 }} />
                            {!imageLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />}
                        </motion.div>

                        <motion.div ref={contentRef} className="prose prose-sm sm:prose-lg lg:prose-xl prose-gray dark:prose-invert max-w-none" variants={itemVariants} style={{ fontSize: `${fontSize}px` }}>
                            <motion.div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 shadow-lg sm:shadow-xl border border-gray-200/50 dark:border-gray-700/50" whileInView={{ y: 0, opacity: 1 }} initial={{ y: 30, opacity: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                                <div className="leading-relaxed text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: currentBlog.content }} />
                            </motion.div>
                        </motion.div>

                        <motion.div className="text-center mt-12 sm:mt-16 lg:mt-20" variants={itemVariants}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base lg:text-lg" onClick={() => navigate('/blogs')}>
                                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" /> Discover More Stories
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.article>
                </div>
            </motion.div>
        </div>
    );
};

export default SingleBlog;
