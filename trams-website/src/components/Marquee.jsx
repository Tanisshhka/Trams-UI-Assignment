const items = [
  'Digital Strategy', 'Cloud Solutions', 'Data Analytics', 'UI/UX Design',
  'Product Development', 'AI & Machine Learning', 'DevOps', 'Innovation',
  'Digital Strategy', 'Cloud Solutions', 'Data Analytics', 'UI/UX Design',
  'Product Development', 'AI & Machine Learning', 'DevOps', 'Innovation',
]

export default function Marquee() {
  return (
    <section className="relative py-8 md:py-10 bg-dark overflow-hidden border-y border-white/[0.04]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6 md:mx-10">
            <span className="text-[14px] md:text-[16px] font-medium text-white/15 hover:text-white/40 transition-colors duration-300 cursor-default">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple to-coral opacity-40" />
          </span>
        ))}
      </div>
    </section>
  )
}
