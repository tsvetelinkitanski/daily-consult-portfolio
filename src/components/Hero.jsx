const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
          alt="Financial consulting background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Вашият надежден <span className="gradient-text">финансов партньор</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Над 20 години опит в счетоводството. Професионално обслужване, прецизност и индивидуален подход към всеки клиент.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-gradient text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Свържете се с нас
              </a>
              <a href="#services" className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold border-2 border-blue-900 hover:bg-blue-50 transition">
                Нашите услуги
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="float">
              <svg className="w-full h-auto" viewBox="0 0 500 500" fill="none">
                <circle cx="250" cy="250" r="200" fill="url(#gradient1)" opacity="0.2"/>
                <circle cx="250" cy="250" r="150" fill="url(#gradient2)" opacity="0.3"/>
                <path d="M250 100 L350 200 L350 350 L150 350 L150 200 Z" fill="url(#gradient3)" opacity="0.7"/>
                <rect x="200" y="180" width="100" height="20" rx="5" fill="white"/>
                <rect x="200" y="220" width="100" height="20" rx="5" fill="white"/>
                <rect x="200" y="260" width="100" height="20" rx="5" fill="white"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#667eea', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#764ba2', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#764ba2', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#667eea', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#667eea', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#764ba2', stopOpacity:1}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
