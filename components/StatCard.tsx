interface StatCardProps {
  title: string
  value: string
  description: string
}

export default function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div 
      className="bg-charcoal rounded-lg p-6 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gold/30"
      role="region"
      aria-label={`${title}: ${value}`}
    >
      <div className="text-center">
        <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">
          {title}
        </h3>
        <div className="text-2xl md:text-3xl font-bold text-gold mb-2">
          {value}
        </div>
        <p className="text-xs text-gray-500">
          {description}
        </p>
      </div>
    </div>
  )
}
