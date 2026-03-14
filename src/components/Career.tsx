import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Innovation Engineer</h4>
                <h5>Stemrobo Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on IoT and software-based projects using Arduino, ESP32, Python, and OpenCV.
              Integrated Blynk IoT platform for real-time monitoring through mobile dashboards.
              Built prototypes for Smart Parking, Smart Irrigation, and safety systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Indian Institute of Technology, Jammu</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed an IoT-based Smart Parking and Irrigation System using ESP32, sensors, and Blynk IoT.
              Created a mobile app interface to read real-time sensor values and automated water supply with relay modules.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>InternShala</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Intensive training in Web Development with AI. Gained hands-on experience in HTML, CSS,
              Bootstrap, JavaScript, React.js, PHP, and DBMS. Developed and deployed a full-stack PG Life website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
