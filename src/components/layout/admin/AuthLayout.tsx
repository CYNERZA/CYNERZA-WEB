import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from "../../../featured/auth/authSlice";
import LogoLoader from '../../admin/loader';

interface AuthLayoutProps {
  children: React.ReactNode;
  authentication?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  authentication = true
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authStatus = useSelector((state: any) => state.auth.status);

  // ✅ Local loading state for layout only
  const [layoutLoading, setLayoutLoading] = useState(true);

  useEffect(() => {
    const mode = localStorage.getItem("theme")
    document.documentElement.classList.add(mode);

    const fetchUser = async () => {
      try {
        await dispatch(getCurrentUser());
      } finally {
        setLayoutLoading(false);
      }
    };
    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/admin/login", { state: { from: location.pathname } });
    } else if (!authentication && authStatus !== authentication) {
      const redirectTo = location.state?.from || "/admin/dashboard";
      navigate(redirectTo);
    }
  }, [authStatus, authentication, navigate]);

  return layoutLoading ? (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      <LogoLoader />
    </div>
  ) : (
    children
  );
};

export default AuthLayout;
