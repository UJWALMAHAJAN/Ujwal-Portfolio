import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software developer with a strong foundation in JavaScript, React, and modern web technologies.
          Experienced in building responsive web applications and full-stack platforms with clean UI,
          structured code, and database integration. Passionate about solving real problems through
          scalable software and continuously learning new frameworks and development practices.
        </p>
        
        <div style={{ marginTop: "2rem" }}>
            <h3 className="title" style={{ fontSize: "18px", marginBottom: "10px" }}>Education</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.5", fontWeight: "normal", color: "#ccc", margin: 0 }}>
                <strong style={{color: "#fff"}}>BE in Electronics & Communication Engineering</strong> | GCET, Jammu (2021-2025) <br/>
                CGPA: 8.1 / 10 <br/><br/>
                <strong style={{color: "#fff"}}>Senior Secondary</strong> | K.V, Jammu (2020-2021) <br/>
                Scored 85.4% (Non-Medical Stream)
            </p>
        </div>

        <div style={{ marginTop: "2rem" }}>
            <h3 className="title" style={{ fontSize: "18px", marginBottom: "10px" }}>Achievements</h3>
            <ul style={{ fontSize: "1rem", lineHeight: "1.5", paddingLeft: "20px", color: "#ccc", margin: 0 }}>
                <li>Gold Medallist in Mathematics Olympiad</li>
                <li>Participated in Interschool Cricket Competition</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
