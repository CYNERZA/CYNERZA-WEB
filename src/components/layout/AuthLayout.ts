import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthLayout = (children: React.FC, authentication: boolean= true): React.FC => {
    const token = sessionStorage.getItem("token")
    const authStatus = token ? token !== "" : false;
    const navigate = useNavigate();
    useEffect(() => {
        if (authentication && authStatus !== authentication) navigate("/admin/login")
        else if (!authentication && authStatus !== authentication) navigate("/admin")

    }, [authStatus, authentication, navigate])

    return children
}

export default AuthLayout
