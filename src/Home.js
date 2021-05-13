import React, { useState } from 'react';
import './Home.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { DiDjango } from 'react-icons/di';
import { FaReact, FaAws, FaDocker } from 'react-icons/fa';
import { SiPostgresql, SiGraphql, SiRedux, SiMongodb } from 'react-icons/si';
import { Button, Segment} from 'semantic-ui-react';
import { AiFillMail } from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';
import * as emailjs from 'emailjs-com';

const Home = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleChange = (e) => {
        [e.target.name] = e.target.value
    }

    return ( 
        <React.Fragment>
            <div className="wrap">
                <div className="intro">
                    <GiHamburgerMenu className="menu-icon" />
                    <div className="intro-text">
                        <h1 className="head-text">
                                Hello!<br/>
                            I am Sanchit Kashyap
                        </h1>
                        <p className="desc-text">I make software solution for great people like you.</p> 
                    </div>
                </div>
                <div className="about">
                    <div className="about-text">
                        <h2 className="head-text-b">About</h2>
                        <p className="desc-text-b">I am a student pursuing Bachelor's degree in Technolgy 
                            ( Computer Science ) from Guru Gobind Singh Indraprastha 
                            University and will graduate in the year of 2022. I love
                            to learn new technologies. Some of the technologies I work on are:
                        </p>
                        <div className="tech-icons">
                            <div className="tech-icons-1">
                                <DiDjango className="tech-size"/>
                                <FaDocker className="tech-size" />
                                <FaReact className="tech-size" />
                                <SiPostgresql className="tech-size" />
                            </div>
                            <div className="tech-icons-2">
                                <SiGraphql className="tech-size" />
                                <SiRedux className="tech-size" />
                                <SiMongodb className="tech-size" />
                                <FaAws className="tech-size" />
                            </div>
                            
                        </div>
                            
                    </div>
                    <div className="internships">
                        <h2 className="head-text-b">Internships</h2>

                        <div className="internship-1">
                            <h3 className="int-head">Backend and DevOps Engineer</h3>
                            <h4 className="int-head">Opmagic.AI</h4>
                            <h5 className="int-head">02/2021 - Present</h5>
                            <p className="int-desc">I was working with Django.
                                 Right now I am working with Docker and AWS services. My roles include handling a team of six developers for 
                                 the development of various sub-modules of the product and also discussing and implementing new ideas with my team.</p>
                        </div>

                        <div className="internship-1">
                            <h3 className="int-head">Backend Developer</h3>
                            <h4 className="int-head">Iha Consulting Services</h4>
                            <h5 className="int-head">07/2020 - 12/2020</h5>
                            <p className="int-desc">I worked on the backend of an E-commerce web application with a team and brought in several ways to
                                implement logic and new ideas into the application.Technologies I worked on were Django and Flask ( for microservices arch.).
                            </p>

                        </div>

                        <div className="internship-1">
                            <h3 className="int-head">Frontend Developer</h3>
                            <h4 className="int-head">Satsara Technologies</h4>
                            <h5 className="int-head">03/2020 - 05/2020</h5>
                            <p className="int-desc">Worked on the frontend using React.<br/>
                                 We made an application for managing and scheduling video conferences. I also worked with Zoom Web SDK and libraries like Pupeteer.</p>

                        </div>

                    </div>
                    <div className="contact">
                        <h2 className="con-text-h">Contact Me</h2>
                        <div className="form"> 
                            <div className="labels">
                                <label className="con-text-l">Name</label>
                                <label className="con-text-l">Email</label>
                                <label className="con-text-l">Message</label>
                            </div>

                            <div className="inputs">
                                <input className="input-area" />
                                <input className="input-area" />
                                <textarea className="mess-area" />
                            </div>
                            
                        </div>
                        <div className="btn-send">
                            <Button inverted color="green" ><AiFillMail/> Send</Button>
                        </div>
                        <div className="connect">
                            
                            <SocialIcon style={{ height: 40, width: 40 }} bgColor="#0a66c2" url="https://linkedin.com/in/sanchitkashyap" />
                            <SocialIcon style={{ height: 40, width: 40 }} bgColor="#ffffff" url="https://github.com/constkashyap" />
                            <SocialIcon style={{ height: 40, width: 40 }} url="https://twitter.com/sweetheartsata1" />
                            <SocialIcon style={{ height: 40, width: 40 }} bgColor="#EA4335"  url="mailto:sanchitkshyap@gmail.com" />
                        </div>
                        <h5 className="foot-txt">Made using React by @SanchitKashyap</h5>



                    </div>
                    
                </div>
                
            </div>

        </React.Fragment>

    );
;
}

export default Home;