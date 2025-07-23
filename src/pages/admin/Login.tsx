import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Login: React.FC = () => {
    const {toast} = useToast()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const {name, value} = e.target
        setFormData(prevData => ({...prevData, [name]:value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        setIsSubmitting(true)
        e.preventDefault();
        setTimeout(() => {
            toast({title: "Login Successfully"})
            console.log(formData)
            setIsSubmitting(false)
        }, 2000)
        setFormData({email: "", password: ""})
        
    };

    return (
        <section className="flex items-center justify-center">
            <div className="glass-effect md:w-1/2 p-6 sm:md-10 flex flex-col justify-center items-center rounded-md ">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-2 text-center ">
                    Welcome back, <span className="gradient-text">Admin</span></h2>
                <p className="text-gray-600 dark:text-slate-400 mb-8 text-center">Login to your Acme Inc admin account</p>
                <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-slate-400 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="m@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-slate-400 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-cynerza-purple hover:bg-cynerza-purple/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Login...' : 'Login'}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Login;
