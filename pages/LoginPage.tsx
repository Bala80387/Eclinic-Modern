
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, EyeOff, Eye, Mail, Lock } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        toast({
          title: "Login successful",
          description: "Welcome back to Eclinic!",
          variant: "default",
        });
        navigate('/');
      } else {
        toast({
          title: "Login failed",
          description: "Please check your credentials and try again.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex animate-fade-in">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-10 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Log in to access your Eclinic account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-eclinic-600 hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-eclinic-600 hover:bg-eclinic-700 transition-all"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </div>
              ) : (
                <span>Log in</span>
              )}
            </Button>
            
            <div className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="#" className="text-eclinic-600 hover:underline">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
      
      {/* Right side - Image and Info */}
      <div className="hidden lg:block lg:w-1/2 bg-eclinic-600 relative overflow-hidden animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-eclinic-700/90 to-eclinic-900/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt="Medical professionals"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative h-full flex flex-col justify-center px-12 z-20 animate-fade-up" style={{ animationDelay: "500ms" }}>
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            Your Health Journey Starts Here
          </h2>
          <p className="text-eclinic-100 mb-8">
            Access your medical records, book appointments, and connect with healthcare professionals all in one place.
          </p>
          
          <div className="flex items-center text-white hover:text-eclinic-200 transition-colors cursor-pointer group">
            <span className="font-medium">Learn more about our services</span>
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
