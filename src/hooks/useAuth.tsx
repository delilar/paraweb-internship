import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  role: string;
}

const useAuth = () => {
  const mockUser: User = {
    id: 'dev-user-123',
    name: 'Development User',
    role: 'admin'
  };
  
  const [user] = useState<User>(mockUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const login = () => {
    console.log('Mock login called - authentication is bypassed in development');
  };

  const logout = () => {
    console.log('Mock logout called - authentication is bypassed in development');
  };

  return { 
    user, 
    loading,
    login,
    logout,
    isAuthenticated: true
  };
};

export default useAuth;