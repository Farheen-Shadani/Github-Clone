import React from 'react';
import './GithubUsers.css';

function GithubUsers() {
    return (
        <section id="github-users">

            <div id="circular-description">

                <div className="repositories">
                    <h1>100M*</h1>
                    <p>repositories worldwide</p>
                </div>

                <div className="developers">
                    <h1>40M*</h1>
                    <p>developers worldwide</p>
                </div>

                <div className="business">
                    <h1>2.1M*</h1>
                    <p>businesses & organizations worldwide</p>
                </div>

            </div>

            <div id="written-description">

                <div className="repositories-info">
                    <p>GitHub’s users create and maintain influential technologies alongside the world’s largest <span>open source community</span></p>
                    <i class="fas fa-caret-right"></i>
                </div>

                <div className="dvelopers-info">
                    <p><span>Developers</span> use GitHub for personal projects, from experimenting with new programming languages to hosting their life’s work.</p>
                    <i class="fas fa-caret-right"></i>
                </div>

                <div className="business-info">
                    <p><span>Businesses</span> of all sizes use GitHub to support their development process and to securely build software.</p>
                    <i class="fas fa-caret-right"></i>
                </div>

                <p>* As of April 2019</p>

            </div>

        </section>
    );
}

export default GithubUsers;