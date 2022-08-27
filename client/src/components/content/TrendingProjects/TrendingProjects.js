import React from "react";
import "./TrendingProjects.css";
import growth from "../../../Images/growth2.png";
import ProjectCard from "./ProjectCard";

const TrendingProjects = ({ trendingProjects }) => {
  return (
    <>
      <section className="trending container">
        <div className="heading">Trending Projects</div>
        <div className="projects">
          {trendingProjects.length > 0 &&
            trendingProjects.map(
              ({ trendingprojects_id, title, domains, description }) => (
                <ProjectCard
                  key={trendingprojects_id}
                  icon={growth}
                  title={title}
                  subtitle={domains}
                  description={description}
                ></ProjectCard>
              )
            )}
        </div>
      </section>
    </>
  );
};

export default TrendingProjects;
