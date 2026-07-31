"use client";

import styles from "./Projects.module.css";
import Image from "next/image";
import { useState } from "react";


export default function Projects() {


  const aiImages = [
    "/ai-content-home.png",
    "/ai-content-dashboard.png",
    "/ai-content-generator.png",
  ];


  const [currentImage, setCurrentImage] = useState(0);



  function nextImage(){

    setCurrentImage(
      (prev)=>
      (prev + 1) % aiImages.length
    );

  }



  function prevImage(){

    setCurrentImage(
      (prev)=>
      (prev - 1 + aiImages.length) % aiImages.length
    );

  }




  return (

<section id="projects" className={styles.projects}>


<h2>
Projects
</h2>





{/* PROJECT 1 */}

<div className={styles.card}>


<div className={styles.image}>


<Image

src="/gym.png"

alt="Web Next Gym"

width={600}

height={400}

className={styles.projectImage}

/>


</div>




<div className={styles.content}>


<h3>
Web Next Gym
</h3>


<p>

A modern responsive fitness website built with Next.js and React.
Includes multilingual support, responsive design and reusable components.

</p>



<div className={styles.tags}>

<span>Next.js</span>
<span>React</span>
<span>CSS Modules</span>
<span>Vercel</span>

</div>



<div className={styles.links}>


<a
href="https://web-next-gym.vercel.app/en"
target="_blank"
rel="noopener noreferrer"
>
Live Demo
</a>



<a
href="https://github.com/DianasCode/web-next-gym"
target="_blank"
rel="noopener noreferrer"
>
GitHub
</a>


</div>



</div>


</div>









{/* PROJECT 2 */}



<div className={styles.card}>


<div className={styles.imageSlider}>


<Image

src={aiImages[currentImage]}

alt="AI Content Studio"

width={600}

height={400}

className={styles.projectImage}

/>



<button

className={styles.prev}

onClick={prevImage}

>
‹
</button>



<button

className={styles.next}

onClick={nextImage}

>
›
</button>




<div className={styles.dots}>


{
aiImages.map(
(_,index)=>(

<span

key={index}

className={
index===currentImage
?
styles.activeDot
:
""
}

onClick={()=>setCurrentImage(index)}

>


</span>

)
)

}



</div>



</div>







<div className={styles.content}>


<h3>
AI Content Studio
</h3>




<p>

An AI-powered content generation platform that creates blog posts,
product descriptions, social media content and marketing copy.
Includes authentication, dashboard, favorites and AI generation tools.

</p>




<div className={styles.tags}>


<span>Next.js</span>
<span>TypeScript</span>
<span>Supabase</span>
<span>CSS Modules</span>
<span>Vercel</span>


</div>




<div className={styles.links}>


<a

href="https://ai-content-studio-sandy.vercel.app"

target="_blank"

rel="noopener noreferrer"

>

Live Demo

</a>




<a

href="https://github.com/DianasCode/ai-content-studio"

target="_blank"

rel="noopener noreferrer"

>

GitHub

</a>



</div>



</div>




</div>



</section>


  );
}
