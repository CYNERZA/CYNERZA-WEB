// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout, getCurrentUser } from "@/featured/auth/authSlice";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from 'react-router-dom';
// import { useToast } from '@/components/ui/use-toast';

// const Admin: React.FC = () => {
//   const userData = useSelector((state: any) => state.auth.userData);
//   const loading = useSelector((state: any) => state.auth.loading);
//   const status = useSelector((state: any) => state.auth.status);
//   const erroeMessage = useSelector((state: any) => state.auth.erroeMessage);
//   const successMessage = useSelector((state: any) => state.auth.successMessage);
//   const dispatch = useDispatch<any>();
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   console.log("status", status);
//   console.log("userData", userData);

//   useEffect(() => {
//     if (!status && !userData?._id) {
//       navigate('/admin/login');
//     } 

//   }, [dispatch, status, userData]);

//   const logoutHandler = () => {
//     dispatch(logout());
//     toast({
//       title: "Logout Successful",
//       description: successMessage || "You have been logged out successfully.",
//     });
//     navigate('/admin/login');
//   }

//   return (
//     <div>
//       <h1>Welcome Admin page</h1>
//       {loading && <p>Loading...</p>}
//       {!loading && userData && (
//         <div>
//           <Button onClick={logoutHandler}>Logout</Button>
//           <h2>User Information</h2>
//           <p>Email: {userData.email}</p>
//           <p>Name: {userData.fullName}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Admin;



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, getCurrentUser } from "../../featured/auth/authSlice";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Admin: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { toast } = useToast();

    const loading = useSelector((state: any) => state.auth.loading);
    const status = useSelector((state: any) => state.auth.status);
    const successMessage = useSelector((state: any) => state.auth.successMessage);
    const userData = useSelector((state: any) => state.auth.userData);

    useEffect(() => {
        if (!loading && (!userData?._id || !status)) {
            navigate('/admin/login');
        }
    }, [userData, status, loading]);

    const logoutHandler = () => {
        dispatch(logout());
        toast({
            title: "Logout Successful",
            description: successMessage || "You have been logged out successfully.",
        });
        navigate('/admin/login');
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome Admin Dashboard</h1>
            {loading && <p>Loading...</p>}
            {!loading && userData && (
                <div className="space-y-4">
                    <div className="flex justify-end">
                        <Button onClick={logoutHandler} variant="destructive">Logout</Button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
                        <h2 className="text-xl font-semibold mb-2">User Information</h2>
                        <p><span className="font-medium">Email:</span> {userData.email}</p>
                        <p><span className="font-medium">Name:</span> {userData.fullName}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Admin;




