import React from 'react';
import './TradeMarkSection.css';

function TradeMarkSection() {
    return (
        <section id="trademark">

            <div className="copyright">

                <p>&copy; 2019 GitHub, Inc.</p>
                <a>Terms</a>
                <a>Privacy</a>

            </div>

            <div className="links">

                <i class="fab fa-twitter"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-github"></i>

            </div>

        </section>
    );
}

export default TradeMarkSection;