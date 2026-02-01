import "../styles/main2.css";
import { motion } from "framer-motion";
import hackerearth from "../images/hackerearth1.png";
import github from "../images/github.png";
import linked_in from "../images/linked_in.png";
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
        <div className="dev-visual">
          <div className="dev-blob" aria-hidden="true"></div>
          <div className="dev-grid" aria-hidden="true"></div>
          <img
            className="behind_the_image"
            src="data:image/svg+xml;utf8,%3Csvg width='340' height='340' viewBox='0 0 340 340' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%25' stop-color='%2300cefc'/%3E%3Cstop offset='100%25' stop-color='%233c1d4b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='260' height='190' x='40' y='60' rx='14' fill='%23151925' stroke='url(%23g)' stroke-width='3'/%3E%3Crect width='220' height='24' x='60' y='80' rx='6' fill='%230a1124'/%3E%3Ccircle cx='74' cy='92' r='5' fill='%23ff5f56'/%3E%3Ccircle cx='92' cy='92' r='5' fill='%23ffbd2e'/%3E%3Ccircle cx='110' cy='92' r='5' fill='%2327c93f'/%3E%3Ctext x='70' y='126' fill='%23e8f3ff' font-size='12' font-family='monospace'%3Econst%20dev%20=%20{%3C/text%3E%3Ctext x='82' y='144' fill='%237dd3ff' font-size='12' font-family='monospace'%3Estack:%20[%22React%22,%20%22Node%22]%3C/text%3E%3Ctext x='82' y='162' fill='%23e8f3ff' font-size='12' font-family='monospace'%3Efocus:%20%22clean%20UIs%22%3C/text%3E%3Ctext x='82' y='180' fill='%23e8f3ff' font-size='12' font-family='monospace'%3Eship():%20true%3C/text%3E%3Ctext x='60' y='212' fill='%237dd3ff' font-size='12' font-family='monospace'%3E//%20always%20learning%3C/text%3E%3C/svg%3E"
            alt="Developer themed illustration"
          />
          <div className="floating-badge">
            <p>Building</p>
            <span>React / Node</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
