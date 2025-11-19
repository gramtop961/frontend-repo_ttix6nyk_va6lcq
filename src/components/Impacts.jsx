export default function Impacts() {
  const items = [
    {
      title: 'Mass Unemployment',
      text:
        'Unemployment peaked around 30% in 1932. Many families relied on relief payments, soup kitchens, and odd jobs. Long-term joblessness affected skills, morale, and health.',
    },
    {
      title: 'Falling Incomes and Prices',
      text:
        'Wages were cut and working hours reduced. Export prices for wool and wheat collapsed, squeezing farmers and rural towns. Mortgage stress and evictions became common.',
    },
    {
      title: 'Social Strain',
      text:
        'Poverty, homelessness, and hunger rose sharply. Shanty settlements—often called “humpies”—appeared on the edges of cities. Mutual aid, union support, and charity were vital lifelines.',
    },
    {
      title: 'Political Upheaval',
      text:
        'Debates over austerity versus stimulus split parties and governments. Strikes, protests, and new political movements reflected competing visions for recovery.',
    },
  ]

  return (
    <section id="impacts" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Impacts</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
