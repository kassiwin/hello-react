import React, {Component} from 'react';
import fire from "../../fire";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignIn: false,
            errorMessage: ""
        };


        this.handleSignIn = this.handleSignIn.bind(this);


    }

    handleSignIn(event) {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            return;
        }

        let credentials = {
            email: event.target.username.value,
            password: event.target.password.value
        };

        fire.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(result => {
                this.setState({
                    isSignIn: true
                });
                this.props.action();
                //console.log(result.user);
            }).catch(err => {
                this.setState({
                    errorMessage: err.message
                });
            console.log(err.message);
        })

    }

    render() {
        return (
            <div>
                <div>
                    <div className="w-full max-w-xs fixed"
                         style={{left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSignIn}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    E-mail or Username
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="user@example.com" required/>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" type="password" placeholder="**************" required/>
                                <p className="text-red-500 text-xs italic hidden">
                                    Please Enter you password.
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Sign In
                                </button>
                                <div
                                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer">
                                    Forgot Password?
                                </div>
                            </div>
                        </form>

                        <p className="text-center text-red-500 text-md my-3">
                            {this.state.errorMessage || " "}
                        </p>
                        <p className="text-center text-gray-500 text-xs">
                            &copy;2020 Learning React.
                        </p>
                    </div>

                </div>
                {this.state.isSignIn ? (<Redirect to={{pathname: "/news", state: {from: "/signin"}} }/>) : null}

            </div>
        );
    }
}

export default SignIn;