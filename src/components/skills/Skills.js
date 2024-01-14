import React from 'react'
import './Skills.scss'
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiHtml5 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { IoLogoCss3 } from 'react-icons/io5';
import { RiJavascriptFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";

function Skills() {
    return (
        <div className='Skills'>
            <div className="Skills__container">
                <h2 className='Skills__headingText'>Technical Skills</h2>
                <div className="Skills__technicalContent">
                    <div className="Skills__box">
                        <SiHtml5 className='Skills__icon icon' />
                        <div className="Skills__details">
                            <h4 className='Skills__nameText'>HTML</h4>
                            <p className='Skills__descText'>
                                Proficient in writing semantic and accessible HTML markup.
                                Experience in creating structured and well-organized document outlines.
                                Knowledge of HTML5 features and specifications.
                            </p>
                        </div>
                    </div>
                    <div className="Skills__box">
                        <IoLogoCss3 className='Skills__icon icon' />
                        <div className="Skills__details">
                            <h4 className='Skills__nameText'>CSS</h4>
                            <p className='Skills__nameText'>
                                I'm skilled at creating visually appealing and responsive web designs using CSS. I have expertise in crafting clean and well-structured stylesheets to ensure a seamless and engaging user experience. My knowledge extends to the latest CSS3 features, allowing me to implement modern design trends effectively.
                            </p>
                        </div>
                    </div>
                    <div className="Skills__box">
                        <FaSass className='Skills__icon icon' />
                        <div className="Skills__details">
                            <h4 className='Skills__nameText'>SASS</h4>
                            <p className='Skills__nameText'>
                                Proficient in Sass, I leverage its power to streamline and enhance the styling process. Sass provides me with the ability to write more maintainable and organized stylesheets, making it easier to manage and scale projects. This allows for efficient styling and a consistent look and feel across web applications.
                            </p>
                        </div>
                    </div>
                    <div className="Skills__box">
                        <RiJavascriptFill className='Skills__icon icon' />
                        <div className="Skills__details">
                            <h4 className='Skills__nameText'>Java Script</h4>
                            <p className='Skills__nameText'>
                                Proficient in writing clean and modular JavaScript code to enhance the interactivity and functionality of web applications. Experience in working with modern JavaScript frameworks like React.js. Knowledge of ES6+ features and the ability to handle asynchronous operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Skills__container">
                <h2 className='Skills__headingText'>MERN Stack</h2>
                <div className="Skills__technicalContent">
                    <div className="Skills__box">
                        <DiMongodb className='Skills__icon icon' />
                        <div className="Skills__details">
                            <h4 className='Skills__nameText'>Mongo db</h4>
                            <p className='Skills__descText'>
                                I am adept at working with MongoDB, a NoSQL database, to efficiently store and manage data for web applications. My skills include designing robust database schemas, performing CRUD operations, and ensuring data integrity. MongoDB's flexibility and scalability are harnessed to create dynamic and responsive applications.
                            </p>
                        </div>
                    </div>
                    <div className="Skills__box">
                        <SiExpress className='Skills__icon icon' />
                        <div className="Skills__details">
                            <h4 className='Skills__nameText'>Express</h4>
                            <p className='Skills__descText'>
                                Experienced in using Express.js, a powerful Node.js framework, I build server-side applications with ease. My proficiency lies in creating RESTful APIs, handling middleware, and establishing a structured project architecture. Express.js enables me to develop scalable and performant backends for seamless application functionality.
                            </p>
                        </div>
                    </div>
                    <div className="Skills__box">
                        <FaReact className='Skills__icon icon' />
                        <div className="Skills__details">
                            <h4 className='Skills__nameText'>React</h4>
                            <p className='Skills__descText'>
                                As a skilled React.js developer, I specialize in building dynamic and interactive user interfaces. I leverage React's component-based architecture to create reusable UI elements, ensuring a modular and maintainable codebase. My expertise extends to state management, virtual DOM manipulation, and integrating third-party libraries for enhanced functionality.
                            </p>
                        </div>
                    </div>
                    <div className="Skills__box">
                        <FaNodeJs className='Skills__icon icon' />
                        <div className="Skills__details">
                            <h4 className='Skills__nameText'>Node JS</h4>
                            <p className='Skills__descText'>
                                Proficient in Node.js, I develop server-side applications that are fast, scalable, and efficient. My expertise includes setting up server environments, handling asynchronous tasks, and building RESTful APIs. Node.js enables me to create real-time applications and effectively manage server-side logic for a smooth user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="devProficiency">
                <h className="devProficiency__headingText">
                    Technical Proficiencies
                </h>
                <div className="devProficiency__box">
                    <div className="devProficiency__iconBox">
                        <MdDeveloperBoard className='devProficiency__icon' />
                    </div>
                    <div className="devProficiency__descBox">
                        <h4>Full Stack Web Developer</h4>
                        <p>End-to-end application development, connecting frontend and backend.</p>
                        <p>
                            RESTful API integration between frontend and backend components.</p>
                    </div>
                </div>
                <div className="devProficiency__box">
                    <div className="devProficiency__iconBox">
                        <FaGithub className='devProficiency__icon' />
                    </div>
                    <div className="devProficiency__descBox">
                        <h4>Version Control</h4>
                        <p>Experience with version control systems like Git for collaborative development. </p>
                    </div>
                </div>
                <div className="devProficiency__box">
                    <div className="devProficiency__iconBox">
                        <FaTools className='devProficiency__icon' />
                    </div>
                    <div className="devProficiency__descBox">
                        <h4>Testing Tool</h4>
                        <p>Unit testing and integration testing using tools like Jest or Mocha.</p>
                        <p>
                            Debugging and troubleshooting skills. </p>
                    </div>
                </div>
                <div className="devProficiency__box">
                    <div className="devProficiency__iconBox">
                        <AiOutlineDeploymentUnit className='devProficiency__icon' />
                    </div>
                    <div className="devProficiency__descBox">
                        <h4>Deployment</h4>
                        <p>Deploying applications on platforms like Heroku, AWS, or Azure.</p>
                        <p>
                            Knowledge of CI/CD pipelines for automated testing and deployment.
                        </p>
                    </div>
                </div>
                <div className="devProficiency__box">
                    <div className="devProficiency__iconBox">
                        <MdOutlineSecurity className='devProficiency__icon' />
                    </div>
                    <div className="devProficiency__descBox">
                        <h4>Security</h4>
                        <p>Implementing secure coding practices and protecting against common web vulnerabilities.</p>
                        <p>
                            Authentication and authorization mechanisms.
                        </p>
                    </div>
                </div>
                <div className="devProficiency__box">
                    <div className="devProficiency__iconBox">
                        <MdGroups2 className='devProficiency__icon' />
                    </div>
                    <div className="devProficiency__descBox">
                        <h4>Collaboration</h4>
                        <p>Effective collaboration with cross-functional teams.</p>
                        <p>
                            Agile methodologies and project management.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills