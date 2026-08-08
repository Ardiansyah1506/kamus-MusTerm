import Head from 'next/head';
import Link from 'next/link';
import Model from "../components/model/model";

const Page = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[#02040a] overflow-hidden flex items-center pt-20">
        
        {/* Deep Space Glowing Orbs */}
        <div className="glow-orb-primary w-[600px] h-[600px] top-[-100px] right-[-100px] animate-pulse-slow"></div>
        <div className="glow-orb-secondary w-[800px] h-[800px] bottom-[-200px] left-[-200px] animate-pulse-slow delay-300"></div>
        <div className="glow-orb-accent w-[500px] h-[500px] top-[40%] left-[20%] animate-pulse-slow delay-700"></div>

        {/* Background Typography Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black pointer-events-none select-none z-0 tracking-tighter text-stroke opacity-30 whitespace-nowrap">
          MUSTERM
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[75vh]">
            
            {/* Left Content */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-10 z-20">
              
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-md animate-fade-up">
                  <span className="flex w-2 h-2 rounded-full bg-sky-400 mr-3 animate-pulse"></span>
                  <span className="text-sky-300 text-sm font-jakarta font-medium tracking-wide uppercase">Eksplorasi Medis Generasi Baru</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.1] tracking-tight animate-fade-up delay-100">
                   Kamus <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 text-glow">
                    Muskuloskeletal
                  </span>
                </h1>
                
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl animate-fade-up delay-200 font-jakarta">
                  Pelajari anatomi, patologi, dan terminologi sistem pergerakan tubuh manusia secara interaktif. Dirancang khusus untuk mahasiswa dan praktisi medis modern.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300 pt-4">
                <Link href="/anatomi" className="relative overflow-hidden group px-8 py-4 bg-white text-[#02040a] rounded-2xl font-bold font-jakarta text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 text-center">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Mulai Eksplorasi 
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link href="/terminologi" className="px-8 py-4 glass-card border-white/10 hover:border-white/30 text-white rounded-2xl font-semibold font-jakarta text-lg transition-all duration-300 text-center flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Cari Istilah
                </Link>
              </div>
              
              {/* Feature Cards Mini */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-up delay-400 pt-6 border-t border-white/5 mt-8">
                 <Link href="/anatomi" className="group p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center mb-3 text-sky-400 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    </div>
                    <p className="text-white font-semibold text-sm">Anatomi</p>
                 </Link>
                 <Link href="/patologi" className="group p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center mb-3 text-rose-400 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                    <p className="text-white font-semibold text-sm">Patologi</p>
                 </Link>
                 <Link href="/terminologi" className="group p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all cursor-pointer hidden md:block">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-3 text-amber-400 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <p className="text-white font-semibold text-sm">Terminologi</p>
                 </Link>
              </div>

            </div>

            {/* Right Content: Glowing Floating 3D Model */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center items-center relative min-h-[500px] lg:min-h-[700px] z-10 animate-fade-up delay-200">
              <div className="absolute inset-0 z-20 pointer-events-none rounded-full shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] lg:hidden"></div>
              
              {/* Decorative rings for 3D model */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] border border-white/5 rounded-full z-0 animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] border border-dashed border-white/10 rounded-full z-0 animate-[spin_60s_linear_infinite_reverse]"></div>

              <div className="w-full h-full absolute inset-0 z-10 flex justify-center items-center animate-float scale-125 lg:scale-[1.6]">
                 <Model />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
