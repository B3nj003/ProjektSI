import React from "react";
import {Link} from "react-router-dom"
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    componentDidMount(){
        this.props.clearErrors()
    }

    render(){
        const er = this.props.errors
        return(
            <div className="session-form">
                <div className="sessionform-header">
                    <Link to="/" className="picture-link">
                        <img src={window.coplogoURL} id="sessionform-coplogo" />
                    </Link>
                </div>

                <div className="sessionform-body">
                    <div className="form-square">
                        <div className="form-links">
                            <button id="border-dark">
                                <Link to="/signup" id="no-underline-selected">Sign Up</Link>
                            </button> 
                            <button>
                                <Link to="/login" id="no-underline">Log In</Link>
                            </button>
                        </div>
                        <form className="form-submits">
                            <div className="form-socialmedialink">
                                <button>
                                    <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }}/>
                                    <a href="http://www.twitter.com" id="no-underline-social">Prijavi se Twitterom</a>
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }}/>
                                    <a href="http://www.facebook.com" id="no-underline-social">Prijavi se Facebookom</a>
                                </button>
                            </div>
                            <h3 className='or-line'>OR</h3>
                            <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleInput('username')}/>
                            <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput('email')}/>
                            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
                            <p>{er}</p>
                            <button onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;

import React from "react"
import {Link} from "react-router-dom"
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDemo = this.handleDemo.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    handleDemo(e) {
        e.preventDefault();
        const user = {email: "allahjejedan@123.com", password: "123456"}
        this.props.processForm(user)
    }

    componentDidMount(){
        this.props.clearErrors()
    }

    render(){
        const er = this.props.errors
        return(
            <div className="session-form">
                <div className="sessionform-header">
                    <Link to="/" className="picture-link">
                        <img src={window.coplogoURL} id="sessionform-coplogo"/>
                    </Link>
                </div>
                
                <div className="sessionform-body">
                    <div className="form-square">
                        <div className="form-links">
                            <button>
                                <Link to="/signup" id="no-underline">Sign Up</Link>
                            </button> 
                            <button id="border-dark">
                                <Link to="/login" id="no-underline-selected">Log In</Link>
                            </button>
                        </div>
                        <form className="form-submits">
                            <div className="form-socialmedialink">
                                <button>
                                    <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }}/>
                                    <a href="http://www.twitter.com" id="no-underline-social">Log In With Twitter</a>
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }}/>
                                    <a href="http://www.facebook.com" id="no-underline-social">Log In With Facebook</a>
                                </button>
                            </div>
                            <h3 className='or-line'>OR</h3>
                            <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput('email')}/>
                            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
                            <p>{er}</p>
                            <button onClick={this.handleSubmit}>Submit</button>
                            <button onClick={this.handleDemo}>Demo User</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;