import React from "react";


function App(){
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="assets/css/styles.css" />
        {/* =====BOX ICONS===== */}
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200i,300,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:700&display=swap"
          rel="stylesheet"
        />
        <title>Divij Jain</title>
        {/*===== HEADER =====*/}
        <header className="l-header">
          <nav className="nav bd-grid">
            <div>
              <a href="#" className="nav__logo" />
            </div>
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    Skills
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#work" className="nav__link">
                    Projects
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bx-menu" />
            </div>
          </nav>
        </header>
        <main className="l-main">
          {/*===== HOME =====*/}
          <section className="home bd-grid" id="home">
            <div className="home__data">
              <h1 className="home__title">
                Hi,
                <br />
                I'am <span className="home__title-color">Divij Jain</span>
                <br /> CS Student
              </h1>
              <a
                href="https://diiviij.github.io/src/DivijJain.pdf"
                target="_blank"
                className="button"
              >
                View Resume
              </a>
            </div>
            <div className="home__social">
              <a
                href="https://linkedin.com/in/divij-jain-625b651a5"
                target="_blank"
                className="home__social-icon"
              >
                <i className="bx bxl-linkedin" />
              </a>
              <a
                href="mailto:divijj01@gmail.com"
                target="_blank"
                className="home__social-icon"
              >
                <i className="fab fa-google" />
              </a>
              <a
                href="https://github.com/diiviij"
                target="_blank"
                className="home__social-icon"
              >
                <i className="bx bxl-github" />
              </a>
              <a
                href="https://twitter.com/diiviij1"
                target="_blank"
                className="home__social-icon"
              >
                <i className="bx bxl-twitter" />
              </a>
              I
            </div>
            <div className="home__img">
              <img src="https://diiviij.github.io/src/component/assets/img/divij.png"  />
            </div>
          </section>
          {/*===== ABOUT =====*/}
          <section className="about section " id="about">
            <h2 className="section-title">About</h2>
            <div className="about__container bd-grid">
              <div className="about__img">
                <img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
              <div>
                <h2 className= "about__subtitle">
                  I'am Divij  
                  </h2>
                <p className="about__text">
                  Currently having a Master's degree in computer application from VIT
                  Bhopal, apart from technical stuff I am an extroverted kid who loves
                  to interact and build new connections with people..{" "}
                </p>
              </div>
            </div>
          </section>
          {/*===== SKILLS =====*/}
          <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills__container bd-grid">
              <div>
                <h2 className="skills__subtitle">Profesional Skills</h2>
                <p className="skills__text">
                  I have list some of my Programming skills and Prohects below.
                </p>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-java skills__icon" />
                    <span className="skills__name">Java</span>
                  </div>
                  <div className="skills__bar skills__html"></div>
                  <div>
                    <span className="skills__percentage">95%</span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-css3 skills__icon" />
                    <span className="skills__name">CSS3</span>
                  </div>
                  <div className="skills__bar skills__css"></div>
                  <div>
                    <span className="skills__percentage">85%</span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-javascript skills__icon" />
                    <span className="skills__name">JAVASCRIPT</span>
                  </div>
                  <div className="skills__bar skills__js"></div>
                  <div>
                    <span className="skills__percentage">65%</span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="fab fa-python skills__icon" />
                    <span className="skills__name">PYTHON</span>
                  </div>
                  <div className="skills__bar skills__js"></div>
                  <div>
                    <span className="skills__percentage">65%</span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="fab fa-cuttlefish skills__icon" />
                    <span className="skills__name">C++</span>
                  </div>
                  <div className="skills__bar skills__js"></div>
                  <div>
                    <span className="skills__percentage">65%</span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-html5  skills__icon" />
                    <span className="skills__name">HTML</span>
                  </div>
                  <div className="skills__bar skills__ux"></div>
                  <div>
                    <span className="skills__percentage">85%</span>
                  </div>
                </div>
              </div>
              <div>
                <img src="https://storytale-public2.b-cdn.net/2021/08/16/ade359fb-0e0e-4e4d-a0b0-9ee4746e7eeb-Statistics.png?height=410 1x, https://storytale-public2.b-cdn.net/2021/08/16/ade359fb-0e0e-4e4d-a0b0-9ee4746e7eeb-Statistics.png?height=820 2x" className="skills__img" />
              </div>
            </div>
          </section>
          {/*===== WORK =====*/}
          <section className="work section" id="work">
            <h2 className="section-title">Projects</h2>
            <div className="work__container bd-grid">
              <div className="work__img">
                <a href="https://learnbuddy.netlify.app/article">
                  <img src="https://diiviij.github.io/src/component/assets/img/work1.jpeg" />
                </a>
              </div>
              <div className="work__img">
                <a href="https://github.com/diiviij/InstaBot">
                  <img
                    src="https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/How-to-Make-an-Instagram-Bot-With-InstaPy_Watermarked.0bce6603f368.jpg&w=960&sig=c5790ac7cf28823ed7b71f07fd77bcffbf626971"
                    
                  />
                </a>
                
              </div>
              <div className="work__img">
                {" "}
                <a href="https://learnbuddy.netlify.app/news">
                  <img src="https://diiviij.github.io/src/component/assets/img/work3.jpeg"  />
                </a>
              </div>











              <div className="work__img">
                <a href="https://github.com/diiviij/Pytelebot">
                  <img src="https://www.macitynet.it/wp-content/uploads/2016/04/10-migliori-bot-di-telegram-e1461579945480.jpg" />
                </a>
              </div>
              <div className="work__img">
                <a href="https://github.com/diiviij/Opencv-Python">
                  <img
                    src="https://th.bing.com/th/id/OIP.TEo8uPhO0p5eMaBOUw7oYgHaEK?pid=ImgDet&rs=1"
                    
                  />
                </a>
                
              </div>
              <div className="work__img">
                {" "}
                <a href="https://learnbuddy.netlify.app/news">
                  <img src="https://diiviij.github.io/src/component/assets/img/work3.jpeg"  />
                </a>
              </div>


















              <div className="work__img">
                <a href="https://learnbuddy.netlify.app/article">
                  <img src="https://diiviij.github.io/src/component/assets/img/work1.jpeg" />
                </a>
              </div>
              <div className="work__img">
                <a href="https://github.com/diiviij/InstaBot">
                  <img
                    src="https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/How-to-Make-an-Instagram-Bot-With-InstaPy_Watermarked.0bce6603f368.jpg&w=960&sig=c5790ac7cf28823ed7b71f07fd77bcffbf626971"
                    
                  />
                </a>
                
              </div>
              <div className="work__img">
                {" "}
                <a href="https://learnbuddy.netlify.app/news">
                  <img src="https://diiviij.github.io/src/component/assets/img/work3.jpeg"  />
                </a>
              </div>





            </div>
          </section>
          {/*===== CONTACT =====*/}
          <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>
            <div className="contact__container bd-grid">
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScxmREPoMO0irdyxT1F1gyRLQS3ANXgLBzG1lP7iL4hRGFwrw/formResponse"
                target="_self"
                id="bootstrapForm"
                method="POST"
                className="contact__form"
              >
                <legend htmlFor={165327259}>Name</legend>
                <div className="form-group">
                  <input
                    id={52779752}
                    type="text"
                    name="entry.52779752"
                    className="form-control contact__input"
                  />
                </div>
                <legend htmlFor={79170264}>Email</legend>
                <div className="form-group">
                  <input
                    id={1145729624}
                    type="text"
                    name="entry.1145729624"
                    className="form-control contact__input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id={907692925}
                    name="entry.907692925"
                    className="form-control contact__input"
                    defaultValue={""}
                  />
                </div>
                <input type="hidden" name="pageHistory" defaultValue={0} />
                <input
                  className="btn btn-primary contact__button button"
                  type="submit"
                  defaultValue="Submit"
                />
              </form>
            </div>
          </section>
        </main>
        {/*===== FOOTER =====*/}
        <footer className="footer">
          <p className="footer__title">Divij Jain </p>
          <div className="footer__social">
            <a href="https://instagram.com/diiviij" className="footer__icon">
              <i className="bx bxl-instagram" />
            </a>
            <a href="https://twitter.com/diiviij01" className="footer__icon">
              <i className="bx bxl-twitter" />
            </a>
          </div>
          <p>© 2021 copyright all right reserved</p>
        </footer>
        {/*===== SCROLL REVEAL =====*/}
        {/*===== MAIN JS =====*/}
      </div>

        
    );
}

export default App;