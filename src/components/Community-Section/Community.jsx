import React from 'react';
// import '../Business-Section/Businesses.css';
import ImgCard from '../Img-Card/ImgCard'

function Community() {
    return (
        <section id="community">

            <ImgCard
                URL="https://customer-stories-feed.github.com/customer_stories/freakboy3742/hero.jpg"
                heading="Russell Keith-Magee"
                text="Russell Keith-Magee created BeeWare to fill a gap in his own process. Today, BeeWare is the go-to project for supporting Python on every platform."
            />

            <ImgCard
                URL="https://customer-stories-feed.github.com/customer_stories/kris-nova/hero.jpg"
                heading="Kris Nova"
                text="Kris Nova quickly developed a passion for open source software. Now she gets to work on open source tooling at her day job, which includes maintaining Kubernetes Operations (kops)."
            />

            <ImgCard
                URL="https://customer-stories-feed.github.com/customer_stories/yyx990803/hero.jpg"
                heading="Evan You"
                text="In 2013, Evan You founded Vue, a Javascript framework funded by the community on Patreon. In 2016, Vue reached 2,000,000 downloads."
            />

            <ImgCard
                URL="https://customer-stories-feed.github.com/customer_stories/jessfraz/hero.jpg"
                heading="Jess Frazelle"
                text="Jess Frazelle works on Kubernetes full-time. Previously she maintained Docker, a software containerization platform used by thousands of teams."
            />

        </section>
    );
}
export default Community;