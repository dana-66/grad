import { useNavigate } from "react-router-dom";
import "../styles/infoPage.css";
import Navbar from "../components/Navbar";
import TextCard from "../components/TextCard";
import Button from "../components/Button";
import {
  Email,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

function Info() {
  const navigate = useNavigate();

  const videoData = [
    {
      name: "How to navigate the platform and its features?",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=lBft7AMNH7bJ4Pqg",
    },
    {
      name: "How can I deploy my project?",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=lBft7AMNH7bJ4Pqg",
    },
    {
      name: "How to add, edit, and delete website pages?",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=lBft7AMNH7bJ4Pqg",
    },
    {
      name: "How to use the built-in text editor for content updates?",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=lBft7AMNH7bJ4Pqg",
    },
    {
      name: "How to upload profile pictures, research visuals, and gallery images?",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=lBft7AMNH7bJ4Pqg",
    },
    {
      name: "How to modify a previously created website?",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=lBft7AMNH7bJ4Pqg",
    },
  ];

  const handleGetStarted = () => {
    navigate("/templates");
  };

  return (
    <>
      <Navbar />
      <header className="infoPageHeader">
        <div className="headerTextContainer">
          <h1 className="infoPageHeaderTxt">How to ...</h1>
          <h4 className="infoPAgeSubtxt">Have any Problem ?</h4>
          <a className="infoPageConnectBtn" href="mailto:danatarik66@gmail.com">
            Contact us
          </a>
        </div>
      </header>
      <section className="SpaceSection"></section>

      <section className="infoPageSection">
        <p>
          Learn How to Build & Download Your Academic Website Need help using
          the platform? Our step-by-step video guides will walk you through
          every part of the process. Click on a topic below to watch a quick
          tutorial. If you have any questions, feel free to contact our support
          team for assistance.
        </p>
      </section>

      <section className="SpaceSection"></section>

      <section className="infoGrid">
        <p>Most common questions</p>

        <div className="grid">
          {videoData.map((video, index) => (
            <TextCard
              key={index}
              className={`item item-${index}`}
              heading={video.name}
              fontColor={index % 2 === 0 ? "#fff" : "#f9a826"}
              backgroundColor={index % 2 === 0 ? "#000" : "#071754"}
              videoUrl={video.url}
            />
          ))}
        </div>
      </section>

      <section className="infoPageMain">
        <h1>Ready to build your website ?</h1>
        <Button
          text="Get Started"
          color="#071754"
          fontColor="#fff"
          filled={true}
          onClick={handleGetStarted}
        />
      </section>

      <footer className="footer">
        <div className="social-links">
          <a
            href="goTo:johnDoe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email />
          </a>
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.twitter.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.linkedin.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Info;
