export default function FeaturedCaseStudy() {
  return (
    <div className="p-4 md:p-8 bg-surface border border-white/5 rounded-xl mb-32 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex-1">
          <h2 className="text-white text-3xl font-extrabold leading-tight tracking-tight mb-4">
            The Launchpad Framework
          </h2>
          <p className="text-white/60 text-base max-w-xl">
            A proprietary full-stack starter kit using Next.js and Firebase
            designed for rapid prototyping and seamless scaling. Reducing
            "time-to-market" for startups by 40%.
          </p>
        </div>
        <div
          className="w-full md:w-1/3 aspect-video bg-black/50 rounded-lg overflow-hidden"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwVpHFNkFHTzWMywQ4SekWIP-S9O9B8MfvE9W_EQrjSDwLqlekeuxSYF26Rf9hDbLn8gryBq7TT4kVCDyekIOa57p3xbhoWTi3Hxc8W-QApUhPHROaVyu_3SV-7vQl40H1H1_EEgEUxz2vD2h78hrHHr_eZLXqDF0hVWKD7wI40M3zdM0_ISc85LEnfzLuuOft0ipEKzqW03mhY2_y43ZPJiWtXf-uMhp8INBeVnB5SWmZcPpM0aLi3jm5jhc6KIoBJEkdnNGk7uk_")',
            backgroundSize: "cover",
          }}
        ></div>
        <button className="flex min-w-35 items-center justify-center rounded h-12 px-6 bg-primary text-white text-xs font-extrabold uppercase tracking-widest hover:scale-105 transition-transform">
          View Case Study
        </button>
      </div>
    </div>
  );
}
