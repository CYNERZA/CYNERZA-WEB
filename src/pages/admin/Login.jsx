import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { login, getCurrentUser } from "@/featured/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from '@/components/ui/use-toast';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const loading = useSelector(state => state.auth.loading);
    const status = useSelector(state => state.auth.status);
    const user = useSelector(state => state.auth.userData);
    const successMessage = useSelector(state => state.auth.successMessage);
    const errorMessage = useSelector(state => state.auth.errorMessage);


    useEffect(() => {
        if (status) {
            if (successMessage !== "") {
                toast({
                    title: "Login Successful",
                    description: successMessage,
                });
                dispatch(getCurrentUser());
            }
            if (user?._id) {
                navigate("/admin/dashboard");
            }
        } else if (errorMessage) {
            toast({
                title: "Login Failed",
                description: errorMessage,
                variant: "error",
            });
        }
    }, [status, errorMessage, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    return (
        <section className="flex items-center justify-center min-h-screen px-4">
            <div className="glass-effect w-full max-w-lg p-6 flex flex-col justify-center items-center rounded-md">

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