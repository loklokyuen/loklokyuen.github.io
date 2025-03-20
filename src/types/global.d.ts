type SkillName = 'JavaScript' | 'React' | 'TypeScript' | 'HTML' | 'CSS' | 'Node.js' | 'Express.js' | 'PostgreSQL' | 'Git'
    | 'React Native' | 'Firebase' | 'Firebase Authentication' | 'Firestore' | 'Cloudinary' | 'React Native Paper' | 'Jest' | 'Supertest'
    | 'GitHub Actions' | 'Supabase' | 'Tailwind CSS' | 'React Router' | 'Axios' | 'Netlify' | 'Material-UI';

type Project = FullStackProject | SeparatedProject;

interface ProjectDetails {
    description: string;
    technologies: SkillName[];
    github: string;
    demo: string | null;
    image: string | null;
}

interface FullStackProject {
    title: string;
    type: 'fullstack';
    details: ProjectDetails;
}

interface SeparatedProject {
    title: string;
    type: 'separated';
    frontend: {
        details: ProjectDetails;
    };
    backend: {
        details: ProjectDetails;
    };
}
      