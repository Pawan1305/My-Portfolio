import "../styles/main2.css";
import hackerearth from "../images/hackerearth1.png";
import github from "../images/github.png";
import linked_in from "../images/linked_in.png";
import { motion } from "framer-motion";
import leetcodes from "../images/leetcodes.png";
// import profileImg from './images/MyPhoto.jpeg';
// import instagram from './images/instagram.jpg'

const Main = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="Main"
      id="mainy"
    >
      <div className="main_left">
        <h3 className="it_is_me">Hey! It's Me</h3>
        <h2 className="names">Pawan</h2>
        <p className="i_am_a">
          I am a&nbsp;<span class="typewriter"></span>
        </p>

        <div className="flex1">
          <p className="follow_me">follow me: </p>
          <div className="logos">
            {/* <a href="https://www.codechef.com/users/pawan1305" target="_blank"><img src={codechef} alt="" /></a> */}
            <a
              href="https://www.linkedin.com/in/pawan1305"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linked_in} alt=""></img>
            </a>
            <a
              href="https://github.com/pawan1305"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" />
            </a>
            <a
              href="https://leetcode.com/u/Pawan_P1/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={leetcodes} alt=""></img>
            </a>
            <a
              href="https://www.hackerearth.com/@pawan.kumar.13"
              target="_blank"
              rel="noreferrer"
            >
              <img src={hackerearth} alt=""></img>
            </a>
            {/* <a href="https://www.instagram.com/pawan13.me/" target="_blank"><img src={instagram} alt="" /></a> */}
          </div>
        </div>
        <div className="flex1">
          <a href="mailto:pawan.punnu.k@gmail.com">
            <button className="buttonc">E-Mail Me</button>
          </a>
          <button
            onClick={() =>
              window.open("https://pawan1305.github.io/My-CV/", "_blank")
            }
            className="buttonb"
          >
            Resume
          </button>
        </div>
      </div>
      <div className="right_main">
        <div className="image_container">
          <img
            className="behind_the_image"
            src="data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22b%22 gradientTransform=%22rotate(-45 .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22%2300cefc%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22%233c1d4b%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M921 673.5q-74 173.5-247.5 191t-347 0Q153 847 86.5 673.5T130 370q110-130 240-234.5t281-21Q802 198 898.5 349T921 673.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22url(%23b)%22 d=%22M921 673.5q-74 173.5-247.5 191t-347 0Q153 847 86.5 673.5T130 370q110-130 240-234.5t281-21Q802 198 898.5 349T921 673.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt=""
          ></img>
          {/* <img className="my_image" src={profileImg} alt="Pawan" /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
