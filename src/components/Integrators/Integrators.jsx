import React from 'react';
import './Integrators.css'

function Integrators() {
    return (
        <section id="integrators">

            <img src="https://github.githubassets.com/images/modules/site/integrators/slackhq.png" alt="Slack" className="upside" id="slack" />
            <img src="https://github.githubassets.com/images/modules/site/integrators/zenhubio.png" alt="ZenHub" className="downside" id="zenhub" />
            <img src="https://github.githubassets.com/images/modules/site/integrators/travis-ci.png" alt="Travis CI" className="upside" id="travis" />
            <img src="https://github.githubassets.com/images/modules/site/integrators/atom.png" alt="Atom" className="downside" id="atom" />
            <img src="https://github.githubassets.com/images/modules/site/integrators/circleci.png" alt="Circle CI" className="upside" id="circle" />
            <img src="https://github.githubassets.com/images/modules/site/integrators/google.png" alt="Google" className="downside" id="google" />
            <img src="https://github.githubassets.com/images/modules/site/integrators/codeclimate.png" alt="Code Climate" className="upside" id="code" />

        </section>
    );
}
export default Integrators;