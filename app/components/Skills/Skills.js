import styles from "./Skills.module.css";

export default function Skills() {

  const skills = [

    "React",
    "Next.js",
    "TypeScript",

    "JavaScript",

    "HTML5",
    "CSS3",
    "CSS Modules",

    "Responsive Design",

    "Supabase",
    "Authentication",
    "Database",

    "AI Integration",

    "API Integration",

    "Git & GitHub",

    "Vercel",
    "Deployment"

  ];


  return (

    <section id="skills" className={styles.skills}>


      <h2>
        Skills
      </h2>



      <div className={styles.list}>


        {skills.map((skill)=>(


          <div

            key={skill}

            className={styles.item}

          >

            {skill}


          </div>


        ))}


      </div>



    </section>

  );

}
