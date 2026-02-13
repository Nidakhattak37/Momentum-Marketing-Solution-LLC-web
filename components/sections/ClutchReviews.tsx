
import React from 'react';

const reviews = [
  {
    id: "001",
    author: "Sarah Johnson",
    role: "CEO @ NEXUS TECH",
    quote: "Momentum doubled our inbound leads within the first quarter. Their attention to ROI is unmatched.",
    rating: "5.0",
    initial: "S",
    delay: "delay-[100ms]"
  },
  {
    id: "002",
    author: "Michael Chen",
    role: "MARKETING DIRECTOR @ ECOSTYLE",
    quote: "The best digital partner we've had. Their SEO knowledge is deep and their execution is flawless.",
    rating: "5.0",
    initial: "M",
    delay: "delay-[200ms]"
  },
  {
    id: "003",
    author: "David Rodriguez",
    role: "FOUNDER @ SWIFT LOGISTICS",
    quote: "Professional, creative, and results-oriented. They completely rebranded our digital presence.",
    rating: "5.0",
    initial: "D",
    delay: "delay-[300ms]"
  }
];

const ClutchReviews: React.FC = () => {
  return (
    <section className="w-full py-20 px-10 md:px-24 lg:px-40 bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center shadow-lg">
                <span className="text-black font-black text-sm">C</span>
              </div>
              <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-1">
                CLUTCH <span className="text-[#FF00C7]">VERIFIED.</span>
              </h2>
            </div>
            <p className="text-zinc-600 text-[11px] font-bold tracking-wider uppercase opacity-80">
              High-velocity results confirmed by industry auditing.
            </p>
          </div>

          <div className="flex items-center bg-[#0a0a0c]/80 border border-white/5 rounded-xl p-3 gap-4 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col">
              <span className="text-xl font-black text-white leading-none">5.0</span>
              <span className="text-[8px] font-black text-zinc-700 tracking-[0.2em] uppercase mt-1">AVERAGE</span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <button className="text-[9px] font-black text-white/60 tracking-[0.2em] uppercase hover:text-[#FF00C7] hover:scale-105 transition-all">
              PROFILE
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className={`group relative p-6 bg-[#0a0a0c]/40 border border-white/5 rounded-[1.5rem] hover:bg-[#0a0a0c]/60 hover:border-[#FF00C7]/20 transition-all duration-500 flex flex-col justify-between min-h-[220px] animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both ${review.delay}`}
            >
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-2.5 h-2.5 text-[#FF00C7] fill-current drop-shadow-[0_0_3px_#FF00C7]" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[11px] font-black text-white/80">{review.rating}</span>
                  </div>
                  <span className="text-[8px] font-black text-zinc-800 tracking-[0.2em]">ID: {review.id}</span>
                </div>

                <p className="text-[12px] font-medium text-zinc-500 leading-relaxed italic group-hover:text-zinc-300 transition-colors">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-white/5 flex items-center gap-3 mt-6">
                <div className="w-8 h-8 bg-[#16161a] border border-white/10 rounded-lg flex items-center justify-center transition-colors group-hover:border-[#FF00C7]/30">
                  <span className="text-white font-black text-[11px]">{review.initial}</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[11px] font-black text-white uppercase tracking-tight group-hover:text-white transition-colors">{review.author}</h4>
                  <p className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest mt-0.5">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClutchReviews;
