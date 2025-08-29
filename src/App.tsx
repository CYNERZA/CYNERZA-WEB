
import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import Index from "./pages/Index";
import AiTools from './pages/AiTools';
import Services from './pages/Services';
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BlogLayout from './pages/Blog';
import Admin from './pages/admin/Admin';
import Login from './pages/admin/Login';
import AuthLayout from "./components/layout/admin/AuthLayout"
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import BlogForm from './pages/admin/BlogForm';
import AllBlogs from './pages/admin/AllBlogs';
import Layout from './components/layout/admin/layout/adminPageLayout';
import { BlogDetailPage } from './components/admin/blogPost';
import UpdateBlogPost from "./components/admin/updateBlogPost"
import SingleBlog from './pages/SingleBlog.js';
import CareersPage from './pages/Careers.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import TermsOfService from './pages/TermsofServic.js';
import AddDepartment from './pages/admin/AddDepartment.js';
import JobApplicationForm from './components/careers/ApplyForJob.js';
import JobForm from './pages/admin/JobPostForm.js';
import AllJobs from './pages/admin/AllJobs.js';
import UpdateJobPosts from './components/admin/updateJobPost.js';
import SaasProductDevelopment from './components/services/SaasProductDevelopment.js';
import CustomLLMAPIServices from './components/services/CustomLLMAPI.js';
import AutomationSolutions from './components/services/AutomationSolutions.js';
import AIMLSolutions from './components/services/AI&MLSolution.js';
import CloudDevOpsEngineering from './components/services/CloudDevOpsEngineering.js';
import ITServiceManagement from './components/services/ITServiceManagement.js';

const queryClient = new QueryClient();

const mode = localStorage.getItem("theme")
document.documentElement.classList.add(mode);
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto' // This makes it instant without animation
    });
  }, [pathname]);

  return null;
};
const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <PageLayout noPadding>
                <Index />
              </PageLayout>
            } />
            {/* Admin Route */}
            <Route path="/admin/login" element={
              <AuthLayout authentication={false}>
                <Login />
              </AuthLayout>
            } />
            <Route path="/admin" element={
              <AuthLayout authentication={true}>
                <Layout>
                  <Admin />
                </Layout>
              </AuthLayout>
            } />
            <Route path="/admin/create-blog" element={
              <AuthLayout authentication={true}>
                <Layout>
                  <BlogForm />
                </Layout>
              </AuthLayout>
            } />
            <Route path="/admin/blogs" element={
              <AuthLayout authentication={true}>
                <Layout>
                  <AllBlogs />
                </Layout>
              </AuthLayout>
            } />
            <Route path="/admin/blogs/:slug" element={
              <AuthLayout authentication={true}>
                <Layout>
                  <BlogDetailPage />
                </Layout>
              </AuthLayout>
            } />
            <Route path="/admin/update-blog/:id" element={
              <AuthLayout authentication={true}>
                <Layout>
                  <UpdateBlogPost />
                </Layout>
              </AuthLayout>
            } />
            <Route path="/admin/department" element={
              <AuthLayout authentication={true}>
                <Layout>
                  <AddDepartment />
                </Layout>
              </AuthLayout>
            } />
            <Route path="/admin/jobs/create" element={
              <AuthLayout authentication={true}>
                <Layout>
                  <JobForm />
                </Layout>
              </AuthLayout>
            } />
            <Route path="/admin/jobs" element={
              <AuthLayout authentication={true}>
                <Layout>
                  <AllJobs />
                </Layout>
              </AuthLayout>
            } />
            <Route path="/admin/jobs/:jobId" element={
              <AuthLayout authentication={true}>
                <Layout>
                  <UpdateJobPosts />
                </Layout>
              </AuthLayout>
            } />
            {/* End Admin Routes */}
            <Route path="/ai-tools" element={
              <PageLayout>
                <AiTools />
              </PageLayout>
            } />
            <Route path="/services" element={
              <PageLayout>
                <Services />
              </PageLayout>
            } />
            <Route path="/blogs" element={
              <PageLayout>
                <BlogLayout />
              </PageLayout>
            } >
            </Route>
            <Route path="/blogs/:slug" element={
              <PageLayout noPadding>
                <SingleBlog />
              </PageLayout>
            }             >
            </Route>
            <Route path="/team" element={
              <PageLayout>
                <Team />
              </PageLayout>
            } />
            <Route path="/about" element={
              <PageLayout>
                <About />
              </PageLayout>
            } />
            <Route path="/contact" element={
              <PageLayout>
                <Contact />
              </PageLayout>
            } />
            {/* services */}
            <Route path="/saas-product-development" element={
              <PageLayout>
                <SaasProductDevelopment />
              </PageLayout>
            } />
            <Route path="/custom-llm-api" element={
              <PageLayout>
                <CustomLLMAPIServices />
              </PageLayout>
            } />
            <Route path="/automation-solutions" element={
              <PageLayout>
                <AutomationSolutions />
              </PageLayout>
            } />
            <Route path="/ai-ml-solution" element={
              <PageLayout>
                <AIMLSolutions />
              </PageLayout>
            } />
            <Route path="/cloud-devops-engineering" element={
              <PageLayout>
                <CloudDevOpsEngineering />
              </PageLayout>
            } />
            <Route path="/it-service-management" element={
              <PageLayout>
                <ITServiceManagement />
              </PageLayout>
            } />
            <Route  path='/careers' element={
              <PageLayout>
                <CareersPage/>
              </PageLayout>
            }
            />
            {/*  Privacy Policy */}
            <Route  path='/privacy-policy' element={
              <PageLayout>
                <PrivacyPolicy/>
              </PageLayout>
            }
            />
            {/*  Terms of Servic */}
            <Route  path='/tos' element={
              <PageLayout>
                <TermsOfService/>
              </PageLayout>
            }
            />
            <Route path="*" element={
              <PageLayout>
                <NotFound />
              </PageLayout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </Provider>
  </QueryClientProvider>
);

export default App;
