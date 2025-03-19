import { use, useEffect, useRef, useState } from "react"
import Skill from "./Skill"

const Skills = () => {
  const [loaded, setLoaded] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState<number[]>([]);
  const skillsRef = useRef<HTMLElement>(null);

  const frontendCoreSkills: SkillName[] = ['JavaScript', 'TypeScript', 'HTML', 'CSS']
  const frontendFrameworkSkills: SkillName[] = ['React', 'React Native', 'React Router', 'Tailwind CSS']
  const backendSkills: SkillName[] = ['Node.js', 'Express.js']
  const databaseSkills: SkillName[] = ['PostgreSQL', 'Supabase', 'Firebase', 'Firestore']
  const testingSkills: SkillName[] = ['Jest']
  const deploymentSkills: SkillName[] = ['Git', 'GitHub Actions', 'Netlify']
  
  const allSkills = [
    ...frontendCoreSkills,
    ...frontendFrameworkSkills,
    ...backendSkills,
    ...databaseSkills,
    ...testingSkills,
    ...deploymentSkills
  ];

  useEffect(() => {
    if (skillsRef.current) 
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.unobserve(entry.target);
                    const skillCount = allSkills.length;
                    for (let i = 0; i < skillCount; i++) {
                      setTimeout(() => {
                        setSkillsVisible(prev => [...prev, i]);
                      }, i * 100); 
                    }
                } else {
                    setLoaded(false);
                    setSkillsVisible([]);
                }
            });
        }, { threshold: 0.1 }
    );
    if (skillsRef.current) {
        observer.observe(skillsRef.current);
    }
    return () => {
        if (skillsRef.current) {
            observer.unobserve(skillsRef.current);
        }
    };
  }, [allSkills.length]);

  const renderSkillCategory = (skills: SkillName[], categoryTitle: string, startIndex: number) => {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-start">{categoryTitle}</h3>
        <div className="flex flex-wrap items-center justify-center">
          {skills.map((skill, index) => {
            const globalIndex = startIndex + index;
            return (
              <div 
                className={`skill-item place-items-center rounded-3xl bg-primary-100 p-4 m-2 transition-all duration-400 ease-in-out`}
                key={globalIndex} 
                style={{
                  opacity: skillsVisible.includes(globalIndex) ? 1 : 0,
                  transform: skillsVisible.includes(globalIndex) ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <Skill skillName={skill} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className={`skills animate-on-load slide-up ${loaded? 'loaded': ''} max-w-xl mx-auto`} id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {renderSkillCategory(frontendCoreSkills, "Frontend Core", 0)}
          {renderSkillCategory(frontendFrameworkSkills, "Frontend Frameworks & Libraries", frontendCoreSkills.length)}
          {renderSkillCategory(backendSkills, "Backend", frontendCoreSkills.length + frontendFrameworkSkills.length)}
          {renderSkillCategory(databaseSkills, "Databases", frontendCoreSkills.length + frontendFrameworkSkills.length + backendSkills.length)}
          {renderSkillCategory(testingSkills, "Testing", frontendCoreSkills.length + frontendFrameworkSkills.length + backendSkills.length + databaseSkills.length)}
          {renderSkillCategory(deploymentSkills, "Version Control & Deployment", frontendCoreSkills.length + frontendFrameworkSkills.length + backendSkills.length + databaseSkills.length + testingSkills.length)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
