import React from 'react';
import './Businesses.css';
import ImgCard from '../Img-Card/ImgCard';

function Businesses() {
    return (
        <section id="businesses">

            <ImgCard
                URL="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg"
                heading="MGM Resorts International"
                text="Hospitality"
            />

            <ImgCard
                URL="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg"
                heading="Nationwide"
                text="Insurance"
            />

            <ImgCard
                URL="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg"
                heading="SAP"
                text="Business Software"
            />

            <ImgCard
                URL="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg"
                heading="Spotify"
                text="Technology / Streaming"
            />

        </section>
    )

}

export default Businesses;