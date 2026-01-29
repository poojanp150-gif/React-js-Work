import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const techItems = [
  { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "Tailwind CSS", img: "https://abhishekganvir.vercel.app/tailwind.svg" },
  { name: "Express JS", img: "	https://abhishekganvir.vercel.app/ex.png" },
  { name: "Node JS", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },

  { name: "React + Native", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "MongoDB", img: "https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png" },
  { name: "TypeScript", img: "https://cdn-icons-png.flaticon.com/512/919/919832.png" },

];

export default function Tech() {
   useEffect(() => {
               AOS.init({
                   duration: 1000,        
                   easing: 'ease-in-out', 
                   once: false,           
                   mirror: false,         
               });
           }, []);
  return (
    <div className="container py-5">
      <div className="row justify-content-center g-4">
        {techItems.map(({ name, img }, idx) => (
          <div key={idx} className="col-6 col-md-4 col-lg-2 d-flex justify-content-center" >
            <div
              className="d-flex flex-column align-items-center justify-content-center p-2 rounded-3 tech-card mb-3"
              style={{
                width: "130px",
                height: "130px",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
                background: "linear-gradient(135deg, #1e293b, #0f172a)"
              }}
            >
              <img
                src={img}
                alt={name}
                style={{ width: "50px", height: "50px", objectFit: "contain", marginBottom: "15px" }}
              />
              <span className="text-white fw-semibold" style={{ fontSize: "1rem" }}>
                {name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .tech-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.6);
        }
      `}</style>
    </div>
  );
}
