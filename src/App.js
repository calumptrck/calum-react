import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import twemoji from 'twemoji';
import ReactModal from 'react-modal';
import axios from 'axios';
import projects from './projects.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import moment from 'moment';

ReactModal.setAppElement('body');

class App extends Component {
  _isMounted = false; // Independant from state
  constructor(props) {
    super(props)
    this.state = {
      projects: projects,
      limit: 3,
      tasks: null,
      error: null,
    }
    this.fetchTasks = this.fetchTasks.bind(this);
    this.addTasks = this.addTasks.bind(this);

  }

  addTasks(n) {
    const oldLimit = this.state.limit;
    this.setState({ limit: oldLimit + n })
    
  }

  fetchTasks() {
    axios(`https://calum.co/api/tasks`)
      .then(result => this._isMounted && this.setState({ tasks: result.data }))
      .catch(error => this._isMounted && this.setState({ error: error }))
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchTasks();
  }

  componentWillUnmount() {
    this._isMounted = true;
  }

  render() {
    const { projects, tasks, limit } = this.state;
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
            {tasks && <Tasks days={tasks} addTasks={this.addTasks} quantity={limit} />}
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

const Tasks = ({ days, quantity, addTasks }) => 
  <section className="tasks">
    <h1 className="stitle">What I'm working on:</h1>
    <hr />
    <ReactCSSTransitionGroup transitionName="addTask" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
    {days.slice(0, quantity).map((day) =>
      <Day day={day} key={day._id} />
    )}
    </ReactCSSTransitionGroup>
    <div className="desc">
        <span onClick={() => addTasks(3)} role="img" aria-label="check">👀</span>
    </div>
  </section>

const Day = ({ day }) =>
  <div className="day shadow2">

    <h1 className="taskDate">
      <p>{day.date === moment().format('MMMM Do')
          ? "Today"
          : day.date }</p>
    </h1>
    <hr />
    <ul>
      {day.tasks.map((task, index) =>
        <li key={index}>
          <span className="check" role="img" aria-label="check">✅ </span>
          {task}
        </li>
      )}

    </ul>
  </div>



const Card = () =>
  <div className="card shadow grow2">
    <img className="profilePhoto" src="images/sm-sq.jpg" alt="profile" />
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
          <hr/>
          <p>{project.longDesc}</p>
        </div>
        <div className="preview-image">
          <img src={project.preview} alt="project-preview" />
        </div>
      </div>
    </ReactModal>
  </div>




export default App;
