import { Code2, TestTube2, Database, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Testing & QA',
      icon: TestTube2,
      skills: ['Selenium', 'Postman', 'Jira', 'JUnit', 'Manual Testing'],
      color: 'text-primary-500',
    },
    {
      category: 'Desarrollo',
      icon: Code2,
      skills: ['React Native', 'JavaScript', 'Java', 'HTML/CSS', 'Git'],
      color: 'text-secondary-500',
    },
    {
      category: 'Bases de Datos',
      icon: Database,
      skills: ['SQL', 'Firebase', 'Queries', 'Stored Procedures', 'Data Analysis'],
      color: 'text-primary-500',
    },
    {
      category: 'Herramientas',
      icon: Zap,
      skills: ['Automation', 'CI/CD', 'Figma', 'VS Code', 'DevTools'],
      color: 'text-secondary-500',
    },
  ];

  return (
    <section className="py-20 bg-primary-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-light-50 mb-12">Stack Técnico</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.category} className="bg-primary-900 rounded-xl p-6 border border-primary-500 hover:border-secondary-500 transition-all">
                <div className={`${category.color} mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-light-50 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="bg-primary-950 text-light-100 text-xs px-3 py-1 rounded-full border border-primary-500">
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
