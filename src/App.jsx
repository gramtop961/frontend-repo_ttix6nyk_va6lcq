import Hero from './components/Hero'
import Overview from './components/Overview'
import Impacts from './components/Impacts'
import Reactions from './components/Reactions'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Overview />
      <Impacts />
      <Reactions />
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">A short educational overview of the Great Depression in Australia.</p>
          <a href="/test" className="text-sm text-sky-300 hover:text-white">System test</a>
        </div>
      </footer>
    </div>
  )
}

export default App
