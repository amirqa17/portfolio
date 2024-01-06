// _app.tsx
import { useState } from "react";
import { useRouter } from "next/router"; 
import Layout from "./layout";
import Projects from "@/pages/projects";
import ProjectPage from "@/pages/projects/[projectId]";

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter(); 

  return (
    <Layout>
      {router.pathname === "/" && <Projects />}
      {router.pathname === "/projects/:projectId" && <ProjectPage />}
    </Layout>
  );
};

export default App;
