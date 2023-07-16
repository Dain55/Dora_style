import "./App.scss";
import "../public/Font/stylesheet.scss";
import Catalogi from "./components/catalegi/catalogi";
import Marketing from "./components/Marketing/marketing";
import Teachers from "./components/Teachers/teacher";
import Statistics from "./components/statistics/statistics";
import Blog from "./components/blog/blog";
import "./Media.scss"
function App() {
  return (
    <>
      <header>
        <div className="container header-wrap">
          <div className="left">
            <img src="/ICON/logo.png" alt="" />
          </div>
          <div className="center">
            <p>Home</p>
            <p>Services</p>
            <p>Works</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="rigth">
            <button>Hire me</button>
          </div>
          <div className="media-rigth">
          <img className="catalog-icon" src="/ICON/tiles.png" alt="" />
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="page-person">
            <div className="box-name-person">
              <h1 className="textOne">Hi, I'm</h1>
              <h1 className="textTwo">Mary Hardy</h1>
              <h1 className="textThree">Digital Marketing Expert</h1>
              <p>
                Shot what able cold new the see hold. Friendly as an betrayed
                formerly he.<br></br> Morning because as to society behaved
                moments
              </p>
              <div className="btn-orange">
                <button className="One">Download CV</button>
                <button className="Two">Contact</button>
              </div>
            </div>
            <div className="box-man-teacher">
              <img src="/IMG/hero-person-img.png" alt="" />
            </div>
          </div>
          <Catalogi />
        </div>

        <Statistics />
        <div className="container">
          <Marketing />
          <div className="page-teachers">
            <div className="header-text-btn">
              <div>
                <h1>
                  Clients Are Satisfied For<br></br> Our Work, View Feedback
                </h1>
              </div>
            </div>
            <div className="div_teach">
              <Teachers />
              <Teachers />
            </div>
          </div>
        </div>
        <Blog />
        <div className="container">
          <div className="page-phone">
              <div className="box-number">
                <div className="number-about">
                    <h1>Let's Connect</h1>
                    <br></br>
                    <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                </div>
                <div className="email">
                  <h1>Let's message me and mack something together</h1>
                    <input placeholder="Your name" type="text" />
                    <br></br>
                    <input placeholder="Your email"  type="text" />
                    <br></br>
                    <textarea placeholder="Message" rows="10" cols="95" type="text" />
                    <br></br>
                    <button className="btn-send">Send Message</button>
                </div>
              </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="end-box">
          <h4>
            Developed with love by <a href="">Codeefly</a> © 2023
          </h4>
        </div>
      </footer>
    </>
  );
}

export default App;
