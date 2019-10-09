import React from 'react';
import './CodeSecurity.css';

function CodeSecurity() {
    return (
        <section id="code-security">

            <div className="security-matter">

                <div>

                    <h1>Code security</h1>
                    <p>Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code.</p>

                </div>

                <div>

                    <h1>Access controlled</h1>
                    <p>Encourage teams to work together while limiting access to those who need it with granular permissions and authentication through SAML/SSO and LDAP.</p>

                </div>

            </div>

            <div className="security-drawing">

                <img alt="security-drawing" src="https://github.githubassets.com/images/modules/site/home-illo-business.png" />

            </div>

        </section>
    );
}
export default CodeSecurity;