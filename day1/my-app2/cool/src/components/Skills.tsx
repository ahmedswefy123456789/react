import React from "react";

export default function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Git"];
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
