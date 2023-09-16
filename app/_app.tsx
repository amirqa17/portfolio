// _app.tsx
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import projectsData from './../pages/projects/projects.json';
import Layout from './layout';
import Projects from '@/pages/projects';
import ProjectPage from '@/pages/projects/[projectId]';

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter(); // Initialize the router

  return (
    <Layout>
      {/* Use router.pathname for conditional rendering */}
      {router.pathname === '/' && (
        <Projects />
      )}
      {router.pathname === '/projects/:projectId' && (
        <ProjectPage />
      )}
    </Layout>
  );
};

export default App;
