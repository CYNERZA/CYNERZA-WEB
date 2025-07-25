
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Login from './pages/admin/Login.jsx';
import AuthLayout from "./components/layout/AuthLayout.js"
import {store} from './app/store.js';
import { Provider } from 'react-redux'; 
import BlogForm from './pages/admin/BlogForm.js';
import AllBlogs from './pages/admin/AllBlogs.js';

const queryClient = new QueryClient();



const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PageLayout noPadding>
              <Index />
            </PageLayout>
          } />
           {/* Admin Route */}
          <Route path="/admin/login" element={
            <AuthLayout authentication={false}>
              <Login/>
            </AuthLayout>
          } />
           <Route path="/admin/dashboard" element={
            <AuthLayout authentication={true}>
                <Admin/>
            </AuthLayout>
          } />
          <Route path="/admin/create-blog" element={
            <AuthLayout authentication={true}>
              <BlogForm />
            </AuthLayout>
          } />
          <Route path="/admin/blogs" element={
            <AuthLayout authentication={true}>
              <AllBlogs />
            </AuthLayout>
          } />
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
           <Route path="/blog" element={
            <PageLayout>
              <BlogLayout/>
            </PageLayout>
          } >
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
