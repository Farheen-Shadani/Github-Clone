import React from 'react';
import './LoginSection.css';

function LoginSection() {
    return (
        <section id="login">

            <div id="login-background"></div>

            <div id="login-front">

                <div id="info">
                    <h1>Built for developers</h1>
                    <p>GitHub is a development platform inspired by the way you work. From <a>open source</a> to <a>business</a>, you can host and review code, manage projects, and build software alongside 40 million developers.</p>
                </div>

                <form id="form">

                    <label for="user">Username</label>
                    <input type="text" name="user" className="user"></input>

                    <label for="email">Email</label>
                    <input type="email" name="email" className="email"></input>

                    <label for="password">Password</label>
                    <input type="password" name="password" className="password"></input>

                    <p>
                        Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. <a>Learn more</a>.
                    </p>

                    <button type="submit">Sign up for GitHub</button>

                    <p>
                        By clicking “Sign up for GitHub”, you agree to our <a>Terms of Service</a> and <a>Privacy Statement</a>. We’ll occasionally send you account related emails.
                    </p>

                </form>

            </div>

        </section>
    )
}

export default LoginSection;