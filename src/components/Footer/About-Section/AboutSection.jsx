import React from 'react';
import './AboutSection.css';

function AboutSection() {
    return (
        <section id="about">

            <h1>GitHub</h1>

            <div className="contacts">

                <div>
                    <p>Product</p>
                    <a>Features</a>
                    <a>Security</a>
                    <a>Enterprise</a>
                    <a>Customer stories</a>
                    <a>Pricing</a>
                    <a>Resources</a>
                </div>

                <div>
                    <p>Platform</p>
                    <a>Developer API</a>
                    <a>Partners</a>
                    <a>Atom</a>
                    <a>Electron</a>
                    <a>GitHub Desktop</a>
                </div>

                <div>
                    <p>Support</p>
                    <a>Help</a>
                    <a>Community Forum</a>
                    <a>Training</a>
                    <a>Status</a>
                    <a>Contact GitHub</a>
                </div>

                <div>
                    <p>Company</p>
                    <a>About</a>
                    <a>Blog</a>
                    <a>Careers</a>
                    <a>Press</a>
                    <a>Shop</a>
                </div>

            </div>

        </section>
    );
}

export default AboutSection;