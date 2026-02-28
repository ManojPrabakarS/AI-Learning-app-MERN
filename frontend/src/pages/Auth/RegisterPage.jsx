import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../service/authService.js'
import toast from 'react-hot-toast';
import { Puzzle, Mail, Lock, LockOpen, Eye, EyeOff, ArrowRight, User } from 'lucide-react';

const RegisterPage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be atleast 6 characters long...")
      return
    }

    setError('');
    setLoading(true);
    try {
      await authService.register(username, email, password);
      toast.success('Registered Successfully...');
      navigate('/login');
    } catch (error) {
      setError(error.message || 'Failed to Register. Please try again.');
      toast.error(error.message || 'Failed to Register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-linear-to-br from-slate-200 via-slate to-slate-500'>

        <div className='absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-30' />

        <div className='relative w-full max-w-md px-6'>
          <div className='bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl shadow-slate-200/50 p-10'>
            {/* Header */}
            <div className='text-center mb-5'>
              <div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-purple-400 to-purple-500 shadow-lg shadow-purple-500/25 mb-4'>
                <Puzzle className='w-7 h-7 text-white' strokeWidth={2} />
              </div>
              <h1 className='text-2xl font-medium text-slate-900 tracking-tight mb-1'>
                Create an account
              </h1>
              <p className='text-slate-500 text-sm'>
                Sign up to start your journey
              </p>
            </div>

            {/* Form */}
            <div className='space-y-5'>
              {/* UserName */}
              <div className='space-y-2'>
                <label className='block text-xs font-semibold text-slate-700 uppercase tracking-wide'>
                  Username
                </label>
                <div className='relative group'>
                  <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${focusedField === 'username' ? 'text-purple-600' : 'text-slate-400'
                    }`}>
                    <User className='h-5 w-5' strokeWidth={2} />
                  </div>
                  <input type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setFocusedField('username')}
                    onBlur={() => setFocusedField(null)}
                    className='w-full h-12 pl-12 pr-4 border-2 border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-purple-500 focus:bg-white focus-shadow-lg focus:shadow-purple-500/10'
                    placeholder='Username'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='block text-xs font-semibold text-slate-700 uppercase tracking-wide'>
                  Email
                </label>
                <div className='relative group'>
                  <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${focusedField === 'email' ? 'text-purple-600' : 'text-slate-400'
                    }`}>
                    <Mail className='w-5 h-5' strokeWidth={2} />
                  </div>

                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className='w-full h-12 pl-12 pr-4 border-2 border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-purple-500 focus:bg-white focus-shadow-lg focus:shadow-purple-500/10'
                    placeholder='email'
                  />
                </div>
              </div>

              {/* Password */}
              <div className='space-y-2'>
                <label className='block text-xs font-semibold text-slate-700 uppercase tracking-wide'>
                  password
                </label>
                <div className='relative group'>
                  <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${focusedField === 'password' ? 'text-purple-600' : 'text-slate-400'
                    }`}>
                    {showPassword ? <LockOpen className='w-5 h-5' strokeWidth={2} /> : <Lock className='w-5 h-5' strokeWidth={2} />}
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className='w-full h-12 pl-12 pr-10 border-2 border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-purple-500 focus:bg-white focus-shadow-lg focus:shadow-purple-500/10'
                    placeholder='Password' />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors duration-200'
                  >
                    {showPassword ? <EyeOff className='w-5 h-5' strokeWidth={2} /> : <Eye className='w-5 h-5' strokeWidth={2} />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className='rounded-lg bg-red-50 border-red-200 p-3'>
                  <p className='text-xs text-red-600 font-medium text-center'>{error}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className='group relative w-full h-12 bg-linear-to-r from-purple-500 to-purple-500 hover:from-purple-600 hover:to-purple-600 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 shadow-lg shadow-purple-500/25 overflow-hidden'>

                <span className='relative z-10 flex items-center justify-center gap-2'>
                  {loading ? (
                    <>
                      <div className='w-4 h-4 border-2 border-white/30  border-t-white rounded-full animate-spin' />
                      Create account...
                    </>
                  ) : (
                    <>
                      Create account
                      <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' strokeWidth={2.5} />
                    </>
                  )}
                </span>
                <div className='absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700' />
              </button>
            </div>
            {/* Footer */}
            <div className='mt-1 pt-6 border-t border-slate-200/60'>
              <p className='text-center text-sm text-slate-600'>
                Already have an account?{' '}
                <Link to='/login' className='font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200'>
                  Sign in</Link>
              </p>
            </div>

          </div>
          {/* <p className='text-center text-xs text-slate-600 mt-6'>
            Developed and Design by Manoj Prabakar
          </p> */}
        </div>
      </div>
    </>
  )
}

export default RegisterPage
