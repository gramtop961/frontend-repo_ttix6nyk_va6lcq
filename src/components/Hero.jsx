import { Menu } from 'lucide-react'

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-indigo-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.25),transparent_50%)]" />
      <nav className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
            <Menu className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-wide">Australia in the Great Depression</span>
        </div>
        <div className="hidden sm:flex gap-6 text-sm text-white/90">
          <a href="#overview" className="hover:text-white">Overview</a>
          <a href="#impacts" className="hover:text-white">Impacts</a>
          <a href="#reactions" className="hover:text-white">Reactions</a>
        </div>
      </nav>
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          The Great Depression in Australia
        </h1>
        <p className="mt-5 text-lg md:text-xl text-white/85 max-w-3xl">
          A concise look at what happened, how it reshaped lives and work, and how government and communities responded between 1929 and the late 1930s.
        </p>
      </div>
    </header>
  )
}
