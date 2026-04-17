import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Development = () => {
  const navigate = useNavigate();

  const upcomingFeatures = [
    {
      title: 'Enhanced Analytics',
      description: 'Advanced learning insights and progress tracking',
      icon: '📊',
    },
    {
      title: 'AI Tutor',
      description: 'Personalized learning assistance powered by AI',
      icon: '🤖',
    },
    {
      title: 'Collaboration Tools',
      description: 'Study with friends and share learning resources',
      icon: '👥',
    },
    {
      title: 'Mobile App',
      description: 'Learn on the go with our native mobile application',
      icon: '📱',
    },
    {
      title: 'Advanced Quizzes',
      description: 'Interactive quizzes with real-time feedback',
      icon: '✨',
    },
    {
      title: 'Certificates',
      description: 'Earn and showcase your learning achievements',
      icon: '🏆',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-slate-700/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 mb-4"
            >
              <span>←</span> Back to Dashboard
            </button>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Under Development</h1>
            <p className="text-slate-400 mt-2">We're building something amazing. Check back soon!</p>
          </div>
        </header>

        {/* Main Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-8 mx-auto">
              <span className="text-4xl">🚀</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Coming Soon
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              We're hard at work creating new features to enhance your learning experience. 
              Our team is dedicated to delivering excellence.
            </p>

            {/* Progress Indicator */}
            <div className="bg-slate-800/50 backdrop-blur rounded-lg border border-slate-700/50 p-8 max-w-xl mx-auto mb-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300 font-medium">Development Progress</span>
                <span className="text-blue-400 font-bold">85%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: '85%' }}
                ></div>
              </div>
              <p className="text-sm text-slate-400 mt-3">Expected launch: Q2 2026</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/50"
              >
                Return to Dashboard
                <ArrowRight size={18} />
              </button>
              <button
                className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Notify Me
              </button>
            </div>
          </div>

          {/* Upcoming Features */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-2">
                ✨ Upcoming Features
              </h3>
              <p className="text-slate-400">Exciting additions to revolutionize your learning</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                    
                    <div className="mt-4 flex items-center text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Check size={16} className="mr-2" />
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          {/* <div className="mt-24 bg-linear-to-r from-blue-600/20 to-purple-600/20 backdrop-blur border border-slate-700/50 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified when new features launch and receive exclusive updates about our development progress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div> */}
        </main>

        {/* Footer Stats */}
        <footer className="border-t border-slate-700/50 backdrop-blur-sm ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">6+</div>
                <p className="text-slate-400 text-sm mt-2">Features in Progress</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">85%</div>
                <p className="text-slate-400 text-sm mt-2">Development Complete</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-400">Q2 2026</div>
                <p className="text-slate-400 text-sm mt-2">Expected Launch</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">∞</div>
                <p className="text-slate-400 text-sm mt-2">Possibilities Ahead</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Development;
