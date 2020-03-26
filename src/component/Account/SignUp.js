import React, {Component} from 'react';
import fire from "../../fire";
import 'firebase/auth';
import {Link} from "react-router-dom";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          accCreatedSuccessfully: false,
            errorMessage: ''
        };

        this.handleSignUp = this.handleSignUp.bind(this);

    }

    handleSignUp(event) {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            return;
        }

        let  credentials = {
            email: event.target.username.value,
            password: event.target.password.value
        };

       fire.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).then(results => {
           if (results.user) {
               this.setState({
                   accCreatedSuccessfully: true,
               });
           }
       }).catch(e => {
           this.setState({
               errorMessage: e.message
           });
           //console.log("Error", e.message)
       })
    }


    render() {
        return (
            <div>
                <div className={this.state.accCreatedSuccessfully ? "hidden" : "block"}>
                    <div className="w-full max-w-xs fixed"
                         style={{left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSignUp}>
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
                                <p className="text-red-500 text-xs italic hidden">Please choose a password.</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Sign Up
                                </button>
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

                <div className={this.state.accCreatedSuccessfully ? "block" : "hidden"}
                     style={{left: "50%", top: "50%", transform: "translate(-50%, -50%)", position: "fixed"}}>

                    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                         role="alert">
                        <div className="flex">
                            <div className="py-1">
                                <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold">Account created successfully</div>
                                <div className="text-sm">
                                    <h3>You can Sign In here</h3>
                                    <div
                                       className="bg-green-800 hover:bg-green-700 my-3 hover:font-extrabold  py-2 px-4 rounded mx-2 cursor-pointer text-white w-24">
                                        <Link to="/signin">Sign In</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;