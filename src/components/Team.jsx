const Team = () => {
  const teamMembers = [
    { name: 'Елена Петрова', role: 'Управляващ партньор', description: 'Дипломиран експерт-счетоводител с 20 години опит. Специализирана в корпоративно счетоводство и данъчно планиране.' },
    { name: 'Иван Георгиев', role: 'Старши счетоводител', description: 'Експерт в счетоводното обслужване на МСП. Над 15 години практика в областта на данъчните консултации.' },
    { name: 'Мария Димитрова', role: 'Кадрови специалист', description: 'Специализирана в трудово право и кадрово счетоводство. Експертиза в осигурителното законодателство.' }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Нашият <span className="gradient-text">екип</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Опитни специалисти с доказан професионализъм и експертиза
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover section-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-80 bg-gradient flex items-center justify-center">
                <svg className="w-32 h-32 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
