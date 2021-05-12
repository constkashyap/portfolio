import React, { useState } from 'react';
import './Home.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { DiDjango } from 'react-icons/di';
import { FaReact, FaAws, FaDocker } from 'react-icons/fa';
import { SiPostgresql, SiGraphql, SiRedux, SiMongodb } from 'react-icons/si';


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
                            <h3 className="int-head">Backend Engineer</h3>
                            <h4 className="int-head">Opmagic.AI</h4>
                            <h5 className="int-head">02/2021 - Present</h5>
                            <p className="int-desc">Working on backend using Django.<br/>
                                 Also working on Docker and AWS.</p>

                        </div>

                        <div className="internship-1">
                            <h3 className="int-head">Backend Engineer</h3>
                            <h4 className="int-head">Opmagic.AI</h4>
                            <h5 className="int-head">02/2021 - Present</h5>
                            <p className="int-desc">Working on backend using Django.<br/>
                                 Also working on Docker and AWS.</p>

                        </div>

                        <div className="internship-1">
                            <h3 className="int-head">Backend Engineer</h3>
                            <h4 className="int-head">Opmagic.AI</h4>
                            <h5 className="int-head">02/2021 - Present</h5>
                            <p className="int-desc">Working on backend using Django.<br/>
                                 Also working on Docker and AWS.</p>

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
                                <input />
                                <input />
                                <textarea />

                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

        </React.Fragment>

    );
;
}

export default Home;