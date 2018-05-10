import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import twemoji from 'twemoji';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const projects = [
  {
    title: ' 🏫 Studddent.',
    desc: 'A powerful, curated stash of online discounts available for students.',
    badges: [
      {
        text: '🥇 #1 On Product Hunt',
        link: '//www.producthunt.com/posts/studddent'
      },
      {
        text: '🔗 View Project',
        link: '//studddent.com'
      },
    ],
    longDesc: "Studddent is a place for college students, and educators to share high-quality student discounts that are available online. I was excited last fall when I started my first term at university to start taking advantage of all the student discounts that I’d heard about, they can turn out to be quite helpful as a broke student. I quickly compiled a spreadsheet of my favorites and asked other students to send me any good ones. I wanted a way to spread the word about good discounts, so I decided to create a place for people to share and vote on great student discounts, with the goal of creating a curated list of high-quality resources for students.",
    featured: true,
  },
  {
    title: ' 📈 Coindash.',
    desc: 'A dashboard for monioring the crypto market, and your own investments.',
    badges: [
      {
        text: '🚧 Work In Progress',
        link: '//github.com/calumptrck/CoinDash/commits/master'
      },
      {
        text: '🔗 View Project',
        link: '//calumptrck.github.io/CoinDash/'
      },
    ],
    featured: false,
  },
  {
    title: ' 🌤️ LocalWeather.',
    desc: 'Plaintext description of the weather on top of beautiful relevant Unsplash images.',
    badges: [
      {
        text: '🔗 View Project',
        link: '//calumptrck.github.io/LocalWeather/'
      },
    ],
    featured: false,
  },
  {
    title: ' 💰 TuitionCoins.',
    desc: 'How much $$ UWaterloo students would have if they invested their tuition in bitcoin.',
    badges: [
      {
        text: '🔗 View Project',
        link: '//calumptrck.github.io/TuitionCoins/'
      },
    ],
    featured: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: projects,
    }
  }


  render() {
    const { projects } = this.state;


    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 twi">
            <div className="card shadow grow2">
              <img className="profilePhoto" src="images/sm-sq.jpg" />
              <h1>Calum Patrick.</h1>
              <p>Currently studying mathematics at the University of Waterloo, as well as designing and developing web apps in
            my free time using Node.js.</p>
              <div className="social">
                <a href="//github.com/calumptrck">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="//www.instagram.com/calumpat/">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="//twitter.com">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="//www.youtube.com/channel/UCM2Fz5E-jKbEsMPRedz9ppQ">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="mailto:calum@calum.co">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <section className="featuredBlock">
              <h1 className="stitle">Featured:</h1>
              <hr />
              {projects.filter((project) => project.featured).map((project) =>
                <Project
                  key={project.title}
                  project={project}

                />
              )}
            </section>
            <section className="projects">
              <h1 className="stitle">My Work:</h1>
              <hr />
              {projects.filter((project) => !project.featured).map((project, index) =>
                <Project key={project.title} project={project} />
              )}
            </section>
          </div>
          <div className="col-lg-6">
            <section className="tasks">
              <h1 className="stitle">What I'm working on:</h1>
              <hr />
              <div className="day shadow2">
                <h1 className="taskDate">
                  <p>Current date</p>
                </h1>
                <hr />
                <ul>
                  <li>
                    <span className="check">✅ </span>
                    task
                  </li>
                </ul>
              </div>
              <div className="desc">
                <a href="/tasks">
                  <span>👀</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

class Project extends Component { // <a> Can't be nested
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  parseEmoji = () => {
    twemoji.parse(ReactDOM.findDOMNode(this))
  }

  componentDidMount() {
    this.parseEmoji()
  }
  render() {
    const { project } = this.props;
    return (
      <div>
          <ProjectModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} project={project} />
        <div onClick={this.handleOpenModal} className="project shadow2 grow">
          <div className="ptext">
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
          </div>
          <div className="bullets">
            <ul>
              {project.badges.map((badge) =>
                <div key={badge.text}>
                  <li>{badge.text}</li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const Button = ({ className, onClick, children }) =>
  <button
    className={className}
    onClick={onClick}
  >{children}
  </button>

const CloseModalButton = ({ className, onClick, children }) =>
  <Button
    className={className}
    onClick={onClick}
  >
    <i className="fa fa-times" aria-hidden="true"></i>
  </Button>

const ProjectModal = ({ showModal, handleCloseModal, project }) =>
  <div>
    <ReactModal
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modalBody">
        <div className="modalHeader">
          <div className="modalTitle">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
          <CloseModalButton
            className="closeModalButton"
            onClick={handleCloseModal}
          />
        </div>
        <hr />
        <div className="modalSidebar">
          <div className="modalBullets">
            <ul>
              {project.badges.map((badge) =>
                <a href={badge.link} key={badge.text}>
                  <li className="shadow3 grow">{badge.text}</li>
                </a>
              )}
            </ul>
          </div>
        </div>
        <div className="modalText">
          {project.longDesc}
        </div>

      </div>
    </ReactModal>
  </div>



export default App;
