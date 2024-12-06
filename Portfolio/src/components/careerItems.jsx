import { SkillBadge } from './SkillBadge';

export function CareerItem({ 
  role, 
  company, 
  location, 
  period, 
  achievements, 
  skills 
}) {
  return (
    <div className="mb-8 relative pl-6 border-l-2 border-gray-700">
      <div className="absolute -left-[5px] top-0">
        <div className="w-2 h-2 rounded-full bg-blue-400" />
      </div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-white text-lg font-semibold">{role}</h3>
          <p className="text-gray-400">
            {company} • {location}
          </p>
        </div>
        <span className="text-green-400 text-sm">{period}</span>
      </div>
      <ul className="space-y-2 mb-4">
        {achievements?.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-300">
            <span className="text-green-400">→</span>
            {achievement}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill}>{skill}</SkillBadge>
        ))}
      </div>
    </div>
  );
}