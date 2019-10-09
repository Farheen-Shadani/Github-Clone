import React from 'react';
import './SignInSection.css';

function SignInSection() {
    return (
        <section id="sign-in">

            <h1>Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.</h1>

            <form id="footer-form">
                <div>
                    <label for="user">Username</label>
                    <input type="text" name="user" className="user" placeholder="Pick a username"></input>
                </div>

                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" className="email" placeholder="Your email address"></input>
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="Create a password"></input>
                </div>
                <button type="submit">Sign up for GitHub</button>

            </form>

            <p>By clicking “Sign up for GitHub”, you agree to our <a>terms of service</a> and <a>privacy statement</a>. We’ll occasionally send you account related emails.</p>

        </section>
    );
}

export default SignInSection;