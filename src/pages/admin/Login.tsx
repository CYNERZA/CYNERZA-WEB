import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { login, getCurrentUser } from "@/featured/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from '@/components/ui/use-toast';
import { RootState, AppDispatch } from '@/app/store';

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const loading = useSelector((state: RootState) => state.auth.loading);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(formData))
            .then((res: any) => {
                if (!res.error) {
                    dispatch(getCurrentUser()).then((user: any) => {
                        if (user.payload?._id) {
                            toast({
                                title: "Success",
                                description: res.payload.message,
                            })
                            navigate("/admin/dashboard")
                        }
                    })
                } else {
                    toast({
                        title: "Error",
                        description: "😐 " + res.payload,
                        variant: "destructive",
                    });
                }
            })
    };

    return (
        <section className="bg-white dark:bg-gray-950 flex items-center justify-center min-h-screen w-full py-0 px-4">
            <div className="glass-effect p-6 flex flex-col justify-center items-center rounded-md
        w-full max-w-lg">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-2 text-center ">
                    Welcome back, <span className="gradient-text">Admin</span></h2>
                <p className="text-gray-800 dark:text-gray-400 mb-8 text-center">Login to your Acme Inc admin account</p>
                <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
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
                        <label htmlFor="password" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
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
                        disabled={loading}
                    >
                        {loading ? 'Login...' : 'Login'}
                    </Button>
                </form>
            </div>
        </section>

    );
};

export default Login;