import React from 'react';
import './ManagingWork.css';

function ManagingWork() {
    return (
        <section id="managing-work">

            <div className="home-team">

                <img alt="home-illo-team-image" src="https://github.githubassets.com/images/modules/site/home-illo-team.svg" />

            </div>

            <div className="work">

                <div>

                    <h1>Write better code</h1>

                    <div className="details">
                        <p>Collaboration makes perfect. The conversations and code reviews that happen in pull requests help your team share the weight of your work and improve the software you build. <span>Learn about code review.</span></p>
                        <i class="fas fa-caret-right"></i>
                    </div>

                </div>

                <div>

                    <h1>Manage your chaos</h1>

                    <div className="details">
                        <p>Take a deep breath. On GitHub, project management happens in issues and project boards, right alongside your code. All you have to do is mention a teammate to get them involved. <span>Learn about project management.</span></p>
                        <i class="fas fa-caret-right"></i>
                    </div>

                </div>

                <div>

                    <h1>Find the right tools</h1>

                    <div className="details">
                        <p>Browse and buy apps from GitHub Marketplace with your GitHub account. Find the tools you like or discover new favorites—then start using them in minutes. <span>Learn about integrations.</span></p>
                        <i class="fas fa-caret-right"></i>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default ManagingWork;