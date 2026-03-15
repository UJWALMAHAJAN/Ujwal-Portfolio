import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Flipkart UI Clone",
    category: "Web Application",
    tools: "HTML, CSS, JavaScript, React JS",
    image: `${import.meta.env.BASE_URL}images/preview.png`,
    link: "https://ujwalmahajan.github.io/Flipkart-UI-Clone/",
  },
  {
    title: "Tic Tac Toe Game",
    category: "Web Game",
    tools: "HTML, CSS, JavaScript",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "https://ujwalmahajan.github.io/Tic-Tac-Toe/",
  },
  {
    title: "Jarvis AI Virtual Assistant",
    category: "Desktop Application",
    tools: "Python, Speech Recognition",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "https://github.com/ujwalmahajan/Jarvis-AI",
  },
  {
    title: "PG Life Website",
    category: "Full Stack Platform",
    tools: "HTML, PHP, CSS, JS, MySQL",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "https://github.com/ujwalmahajan/PG-Life",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      console.log("goToSlide called with index:", index);
      if (isAnimating) {
        console.log("Animation in progress, skipping...");
        return;
      }
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    console.log("goToPrev called");
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    console.log("goToNext called");
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer" style={{color: '#fff', textDecoration: 'underline', marginTop: '10px', display: 'inline-block'}} data-cursor="disable">
                              View Project
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
