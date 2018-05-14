import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import twemoji from 'twemoji';
import ReactModal from 'react-modal';
import axios from 'axios';
import projects from './projects.js';

ReactModal.setAppElement('#root');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: projects,
      tasks: null,
      error: null,
    }
    this.fetchTasks = this.fetchTasks.bind(this);

  }

  fetchTasks() {
    axios(`https://calum.co/api/tasks`)
      .then(result => this.setState({ tasks: result.data }))
      .catch(error => this.setState({ error: error }))
  }

  componentDidMount() {
    this.fetchTasks();
  }
  render() {
    const { projects, tasks } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 twi">
            <Card />
            <ProjectSection className="featuredBlock" projects={projects} filter={(project) => project.featured}>
              Featured:
            </ProjectSection>
            <ProjectSection className="projects" projects={projects} filter={(project) => !project.featured}>
              My Work:
            </ProjectSection>
          </div>
          <div className="col-lg-6">
            {tasks && <Tasks days={tasks} quantity={4} />}
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
        <ProjectModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          project={project} />
        <div onClick={this.handleOpenModal} className="project shadow2 grow">
          <div className="ptext">
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
          </div>
          <div className="bullets">
            <ul>
              {project.badges.slice(0, 2).map((badge) =>
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

const Tasks = ({ days, quantity }) =>
  <section className="tasks">
    <h1 className="stitle">What I'm working on:</h1>
    <hr />
    {days.slice(0, quantity).map((day) =>
      <Day day={day} key={day._id} />
    )}
    <div className="desc">
      <a href="/tasks">
        <span>👀</span>
      </a>
    </div>
  </section>

const Day = ({ day }) =>
  <div className="day shadow2">

    <h1 className="taskDate">
      <p>{day.date}</p>
    </h1>
    <hr />
    <ul>
      {day.tasks.map((task, index) =>
        <li key={index}>
          <span className="check">✅ </span>
          {task}
        </li>
      )}

    </ul>
  </div>



const Card = () =>
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

const ProjectSection = ({ className, projects, filter, children }) =>
  <section className={className}>
    <h1 className="stitle">{children}</h1>
    <hr />
    {projects.filter(filter).map((project, index) =>
      <Project key={project.title} project={project} />
    )}
  </section>


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
              <a href={project.badges[0].link} key={project.badges[0].text}>
                <li className="badge-cta shadow grow">{project.badges[0].text}</li>
              </a>
              {project.badges.slice(1).map((badge) =>
                <a href={badge.link} key={badge.text}>
                  <li className="shadow3 grow">{badge.text}</li>
                </a>
              )}
            </ul>
          </div>

          <p>{project.longDesc}</p>
        </div>
        <div className="preview-image">
          <img src={project.preview} />
        </div>
      </div>
    </ReactModal>
  </div>




export default App;
