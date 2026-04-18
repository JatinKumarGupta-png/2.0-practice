const users = [
  {
    fullname: "Aarav Sharma",
    image: "https://images.pexels.com/photos/31599837/pexels-photo-31599837.jpeg",
    profession: "Frontend Developer",
    description: "Passionate about building interactive UI with React.",
    tags: ["JavaScript", "React", "CSS"]
  },
  {
    fullname: "Priya Verma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Designing user-friendly and beautiful interfaces.",
    tags: ["Figma", "Design", "UX"]
  },
  {
    fullname: "Rohan Mehta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    profession: "Backend Developer",
    description: "Loves working with APIs and databases.",
    tags: ["Node.js", "MongoDB", "Express"]
  },
  {
    fullname: "Sneha Kapoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Digital Marketer",
    description: "Helping brands grow online presence.",
    tags: ["SEO", "Marketing", "Social Media"]
  },
  {
    fullname: "Kabir Singh",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    profession: "Mobile App Developer",
    description: "Building Android & iOS apps.",
    tags: ["Flutter", "Dart", "Firebase"]
  },
  {
    fullname: "Ananya Iyer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Analyst",
    description: "Turning data into meaningful insights.",
    tags: ["Python", "Pandas", "SQL"]
  },
  {
    fullname: "Vikram Patel",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "DevOps Engineer",
    description: "Automating deployments and scaling systems.",
    tags: ["AWS", "Docker", "CI/CD"]
  },
  {
    fullname: "Neha Gupta",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    profession: "Content Writer",
    description: "Crafting engaging and SEO-friendly content.",
    tags: ["Writing", "Blogging", "SEO"]
  }
];
var sum = "";

users.forEach(function(elem){
    sum = sum + `<div class="card">
        <img src=${elem.image} alt="">
        <h3>${elem.fullname}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
      </div>`
    
    
})
let main = document.querySelector('main');
main.innerHTML = sum;