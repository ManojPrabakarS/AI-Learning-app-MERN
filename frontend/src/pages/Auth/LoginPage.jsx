import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Puzzle, Mail, Lock, LockOpen, Eye, EyeOff, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext.jsx';
import authService from '../../service/authService.js';
const LoginPage = () => {

  const [email, setEmail] = useState('prabas2691@gmail.com');
  const [password, setPassword] = useState('Test@123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth) * 100,
      y: (clientY / innerHeight) * 100,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { token, user } = await authService.login(email, password);
      login(user, token);
      toast.success('Logged in Successfully...');
      navigate('/dashboard');
    } catch (error) {
      setError(error.message || 'Failed to login. Please check your credentials.');
      toast.error(error.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden' onMouseMove={handleMouseMove}>
      {/* Animated background gradient */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]' />
      
      {/* Grid pattern background */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40' />

      {/* Floating animated elements */}
      <div className='absolute w-80 h-80 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse' style={{top: '10%', left: '10%', animationDuration: '4s'}} />
      <div className='absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse' style={{bottom: '10%', right: '10%', animationDuration: '5s', animationDelay: '1s'}} />

      <div className='relative w-full max-w-7xl h-screen md:h-auto md:max-h-[700px] flex gap-8 px-4 md:px-8'>
        {/* Left Section - Login Form */}
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <div className='relative w-full max-w-md'>
            {/* Glow background */}
            <div className='absolute -inset-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            
            <div className='relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-8 md:p-10 hover:border-white/30 transition-colors duration-300'>
              {/* Header */}
              <div className='text-center mb-12'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-2xl shadow-purple-500/50 mb-6 transform hover:scale-110 transition-transform duration-300'>
                  <Puzzle className='w-8 h-8 text-white' strokeWidth={2} />
                </div>
                <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2'>Welcome back</h1>
                <p className='text-slate-300 text-sm md:text-base'>Sign in to continue your learning journey</p>
              </div>

              {/* Form */}
              <div className='space-y-5'>
                {/* Email */}
                <div className='space-y-2'>
                  <label className='block text-xs font-semibold text-purple-300 uppercase tracking-widest'>Email Address</label>
                  <div className='relative group'>
                    <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 ${focusedField === 'email' ? 'text-purple-400 scale-110' : 'text-slate-400'}`}>
                      <Mail className='w-5 h-5' strokeWidth={2} />
                    </div>
                    <input type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusField('email')}
                      onBlur={() => setFocusField(null)}
                      className='w-full h-12 pl-12 pr-4 border border-white/20 rounded-xl bg-white/5 text-white placeholder-slate-400 text-sm font-medium transition-all duration-300 focus:outline-none focus:border-purple-500 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20 hover:bg-white/8'
                      placeholder='your@email.com'
                    />
                  </div>
                </div>

                {/* Password */}
                <div className='space-y-2'>
                  <label className='block text-xs font-semibold text-purple-300 uppercase tracking-widest'>Password</label>
                  <div className='relative group'>
                    <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 ${focusedField === 'password' ? 'text-blue-400 scale-110' : 'text-slate-400'}`}>
                      {showPassword ? <LockOpen className='w-5 h-5' strokeWidth={2} /> : <Lock className='w-5 h-5' strokeWidth={2} />}
                    </div>
                    <input type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusField('password')}
                      onBlur={() => setFocusField(null)}
                      className='w-full h-12 pl-12 pr-12 border border-white/20 rounded-xl bg-white/5 text-white placeholder-slate-400 text-sm font-medium transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-white/10 focus:shadow-lg focus:shadow-blue-500/20 hover:bg-white/8'
                      placeholder='••••••••'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-120'
                    >
                      {showPassword ? <EyeOff className='w-5 h-5' strokeWidth={2} /> : <Eye className='w-5 h-5' strokeWidth={2} />}
                    </button>
                  </div>
                </div>
                
                {/* Error Message */}
                {error && (
                  <div className='rounded-xl bg-red-500/20 border border-red-500/50 p-4 animate-pulse'>
                    <p className='text-xs text-red-300 font-medium text-center'>{error}</p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className='group relative w-full h-12 mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 active:scale-95 text-white text-sm font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden transform'>

                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    {loading ? (
                      <>
                        <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign in</span>
                        <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' strokeWidth={2.5} />
                      </>
                    )}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700' />
                </button>
              </div>
              
              {/* Footer */}
              <div className='mt-8 pt-6 border-t border-white/10'>
                <p className='text-center text-sm text-slate-400'>
                  Don't have an account?{' '}
                  <Link to='/register' className='font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-300'>
                    Sign up free</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Animated Effects */}
        <div className='hidden lg:flex lg:w-1/2 items-center justify-center relative'>
          <div className='relative w-full h-full max-w-lg flex items-center justify-center'>
            {/* Animated Background Elements */}
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* Orbiting elements */}
              <style>{`
                @keyframes orbit1 {
                  0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
                  100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
                }
                @keyframes orbit2 {
                  0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
                  100% { transform: rotate(-360deg) translateX(150px) rotate(360deg); }
                }
                @keyframes orbit3 {
                  0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
                  100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
                }
                @keyframes float {
                  0%, 100% { transform: translateY(0px) translateX(0px); }
                  33% { transform: translateY(-20px) translateX(10px); }
                  66% { transform: translateY(-10px) translateX(-10px); }
                }
                @keyframes pulse-glow {
                  0%, 100% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.5); }
                  50% { box-shadow: 0 0 60px rgba(59, 130, 246, 0.8); }
                }
              `}</style>

              {/* Large rotating circle */}
              <div className='absolute w-96 h-96 rounded-full border-2 border-purple-500/30 animate-spin' style={{animationDuration: '30s'}} />
              
              {/* Medium rotating circle */}
              <div className='absolute w-72 h-72 rounded-full border-2 border-blue-500/30 animate-spin' style={{animationDuration: '20s', animationDirection: 'reverse'}} />
              
              {/* Small rotating circle */}
              <div className='absolute w-48 h-48 rounded-full border-2 border-purple-400/30' style={{animation: 'spin 15s linear infinite'}} />
              
              {/* Center glow */}
              <div className='absolute w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 blur-3xl' style={{animation: 'pulse-glow 3s ease-in-out infinite'}} />
              
              {/* Floating orbiting elements */}
              <div className='absolute w-full h-full'>
                {/* Orbit 1 */}
                <div style={{animation: 'orbit1 20s linear infinite'}} className='absolute w-12 h-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50' />
                </div>

                {/* Orbit 2 */}
                <div style={{animation: 'orbit2 25s linear infinite', animationDelay: '-5s'}} className='absolute w-12 h-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/50' />
                </div>

                {/* Orbit 3 */}
                <div style={{animation: 'orbit3 15s linear infinite', animationDelay: '-3s'}} className='absolute w-12 h-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='w-3 h-3 bg-gradient-to-br from-purple-300 to-pink-500 rounded-full shadow-lg shadow-pink-500/50' />
                </div>

                {/* Floating dots with float animation */}
                <div className='absolute top-16 left-20 w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/50' style={{animation: 'float 6s ease-in-out infinite'}} />
                <div className='absolute top-48 right-20 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/50' style={{animation: 'float 7s ease-in-out infinite', animationDelay: '1s'}} />
                <div className='absolute bottom-32 left-24 w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg shadow-pink-500/50' style={{animation: 'float 8s ease-in-out infinite', animationDelay: '2s'}} />
                <div className='absolute bottom-20 right-16 w-3 h-3 bg-gradient-to-br from-purple-300 to-purple-600 rounded-full shadow-lg shadow-purple-500/50' style={{animation: 'float 6.5s ease-in-out infinite', animationDelay: '1.5s'}} />
              </div>
            </div>
            
            {/* Center Content */}
            <div className='relative z-10 text-center'>
              <h2 className='text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-4 leading-tight'>Learn Smarter</h2>
              <p className='text-slate-300 text-lg md:text-xl font-medium'>AI-powered learning platform</p>
              <p className='text-slate-400 text-sm mt-2'>Master any subject with intelligent tutoring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage
