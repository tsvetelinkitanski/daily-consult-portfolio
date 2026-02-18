const Stats = () => {
  const stats = [
    { number: '20+', label: 'Години опит' },
    { number: '500+', label: 'Доволни клиенти' },
    { number: '98%', label: 'Удовлетвореност' }
  ];

  return (
    <section className="py-16 bg-gradient text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="section-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-counter">{stat.number}</div>
              <p className="text-lg mt-2 opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
