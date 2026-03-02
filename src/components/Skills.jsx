import { Code2, TestTube2, Database, Wrench, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Testing & QA',
      icon: TestTube2,
      skills: [
        'Selenium',
        'Cucumber ',
        'Postman',
        'Appium',
        'RestAssured',
        'Locust ',
        'TestNG',
        'JUnit',
        'Manual Testing',
        'API Testing',
        'Spring Boot',
        'Page Object Model (POM)',
        'TestGrid',
        'Android Studio',
        'Jira',
      ],
      color: 'text-primary-500',
    },
    {
      category: 'Lenguajes & Frameworks',
      icon: Code2,
      skills: ['JavaScript', 'TypeScript', 'Java', 'React Native', 'Node.js', 'Express', 'Python'],
      color: 'text-secondary-500',
    },
    {
      category: 'Bases de Datos',
      icon: Database,
      skills: ['SQL Server', 'Firebase', 'DBeaver'],
      color: 'text-primary-500',
    },
    {
      category: 'DevOps & Herramientas',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Bitbucket', 'Jenkins', 'Vercel', 'VS Code'],
      color: 'text-secondary-500',
    },
    {
      category: 'Metodologías',
      icon: Users,
      skills: ['Agile', 'Kanban'],
      color: 'text-primary-500',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-light-50 mb-8 sm:mb-12">Stack Técnico</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.category} className="bg-primary-900 rounded-xl p-4 sm:p-6 border border-primary-500 hover:border-secondary-500 transition-all">
                <div className={`${category.color} mb-3 sm:mb-4`}>
                  <Icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-light-50 mb-3 sm:mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="bg-primary-950 text-light-100 text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-primary-500">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
