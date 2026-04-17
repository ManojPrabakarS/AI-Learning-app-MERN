import React, { useState } from 'react';
import { Play, Clock, User, Star, Filter } from 'lucide-react';

const MyLearning = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [videoModal, setVideoModal] = useState(null);

  // Sample tutorial data - replace with your YouTube links
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      description: 'Learn the fundamentals of React Hooks and how to use them in your projects.',
      thumbnail: 'https://img.youtube.com/vi/dCLhUialKPQ/maxresdefault.jpg',
      duration: '45:32',
      instructor: 'Tech Master',
      rating: 4.8,
      views: '125K',
      youtubeId: 'dCLhUialKPQ',
      category: 'React',
    },
    {
      id: 2,
      title: 'Tailwind CSS Complete Tutorial',
      description: 'Master Tailwind CSS from basics to advanced patterns and best practices.',
      thumbnail: 'https://img.youtube.com/vi/6biMWgD6_JY/maxresdefault.jpg',
      duration: '2:15:30',
      instructor: 'CSS Expert',
      rating: 4.9,
      views: '235K',
      youtubeId: '6biMWgD6_JY',
      category: 'CSS',
    },
    {
      id: 3,
      title: 'MongoDB Advanced Queries',
      description: 'Deep dive into MongoDB aggregation pipeline and complex queries.',
      thumbnail: 'https://img.youtube.com/vi/d2MnfyV20hk/maxresdefault.jpg',
      duration: '1:30:45',
      instructor: 'Database Pro',
      rating: 4.7,
      views: '89K',
      youtubeId: 'd2MnfyV20hk',
      category: 'Database',
    },
    {
      id: 4,
      title: 'Node.js RESTful API Design',
      description: 'Build scalable and secure REST APIs using Node.js and Express.',
      thumbnail: 'https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg',
      duration: '3:20:15',
      instructor: 'Backend Master',
      rating: 4.9,
      views: '156K',
      youtubeId: 'Oe421EPjeBE',
      category: 'Backend',
    },
    {
      id: 5,
      title: 'JavaScript Async/Await Mastery',
      description: 'Understand asynchronous JavaScript and master async/await patterns.',
      thumbnail: 'https://img.youtube.com/vi/ZYb_ZU8LNxs/maxresdefault.jpg',
      duration: '1:45:22',
      instructor: 'JS Wizard',
      rating: 4.8,
      views: '201K',
      youtubeId: 'ZYb_ZU8LNxs',
      category: 'JavaScript',
    },
    {
      id: 6,
      title: 'Full Stack Authentication',
      description: 'Implement secure JWT authentication in full-stack applications.',
      thumbnail: 'https://img.youtube.com/vi/ewGbjpFmRbw/maxresdefault.jpg',
      duration: '2:10:00',
      instructor: 'Security Expert',
      rating: 4.6,
      views: '112K',
      youtubeId: 'ewGbjpFmRbw',
      category: 'Security',
    },
  ];

  const categories = ['all', 'React', 'CSS', 'Database', 'Backend', 'JavaScript', 'Security'];

  const filteredTutorials =
    selectedFilter === 'all'
      ? tutorials
      : tutorials.filter((tutorial) => tutorial.category === selectedFilter);

  const handleWatchVideo = (youtubeId) => {
    setVideoModal(youtubeId);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-violet-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-purple-200/50 backdrop-blur-sm top-0 z-20 bg-white/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-purple-900 mb-2">My Learning</h1>
            <p className="text-purple-600">Continue your learning journey with curated video tutorials</p>
          </div>
        </header>

        {/* Main Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Filter size={20} className="text-purple-600" />
              <h2 className="text-lg font-semibold text-purple-900">Filter by Category</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                    selectedFilter === category
                      ? 'bg-linear-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="group bg-white/80 backdrop-blur border border-purple-200/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                {/* Thumbnail Container */}
                <div className="relative overflow-hidden h-48 bg-purple-100">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleWatchVideo(tutorial.youtubeId)}
                      className="w-16 h-16 rounded-full bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <Play size={28} className="text-white fill-white" />
                    </button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-sm text-slate-900 flex items-center gap-1">
                    <Clock size={14} />
                    {tutorial.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-300">
                      {tutorial.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-purple-900 mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
                    {tutorial.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {tutorial.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-3 border-t border-purple-200/50 pt-4">
                    {/* Instructor */}
                    <div className="flex items-center gap-2 text-sm">
                      <User size={16} className="text-purple-600" />
                      <span className="text-slate-700">{tutorial.instructor}</span>
                    </div>

                    {/* Rating and Views */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${
                                i < Math.floor(tutorial.rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-slate-700 ml-2">
                          {tutorial.rating}
                        </span>
                      </div>
                      <span className="text-sm text-slate-600">{tutorial.views} views</span>
                    </div>
                  </div>

                  {/* Watch Button */}
                  <button
                    onClick={() => handleWatchVideo(tutorial.youtubeId)}
                    className="w-full mt-4 px-4 py-2 bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play size={16} className="fill-white" />
                    Watch Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTutorials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No tutorials found for this category.</p>
            </div>
          )}
        </main>
      </div>

      {/* Video Modal */}
      {videoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setVideoModal(null)}
              className="absolute -top-10 right-0 text-white hover:text-purple-200 transition-colors"
            >
              ✕ Close
            </button>
            <div className="aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoModal}?autoplay=1`}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyLearning;
