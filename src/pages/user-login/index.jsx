import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import LoginForm from './components/LoginForm';
import AlternativeActions from './components/AlternativeActions';

const UserLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      const userData = JSON.parse(userSession);
      setUser(userData);
      
      // Redirect to appropriate dashboard
      const roleRoutes = {
        donor: '/donor-dashboard',
        hospital: '/hospital-dashboard',
        admin: '/hospital-dashboard'
      };
      navigate(roleRoutes?.[userData?.role] || '/donor-dashboard');
    }
  }, [navigate]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <>
      <Helmet>
        <title>Sign In - BloodLink | Connect to Save Lives</title>
        <meta name="description" content="Sign in to BloodLink - Connect with blood donors and hospitals for life-saving donations." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative w-full max-w-md">
          {/* Logo and Brand */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg">
                <Icon name="Droplets" size={32} color="white" />
              </div>
              <h1 className="text-3xl font-bold text-primary">
                BloodLink
              </h1>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Welcome Back
            </h2>
            <p className="text-text-secondary">
              Sign in to continue saving lives
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-card backdrop-blur-sm rounded-2xl shadow-lg border border-border p-8">
            <LoginForm onLogin={handleLogin} />
            
            <div className="mt-6">
              <AlternativeActions />
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-accent rounded-lg border border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Info" size={16} className="text-primary" />
                <p className="text-sm text-foreground">
                  Use your registered email and password to sign in. 
                  <Link to="/user-registration" className="text-primary underline ml-1 hover:text-primary/80">
                    Create an account
                  </Link> if you don't have one.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} BloodLink. Connecting lives through blood donation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;