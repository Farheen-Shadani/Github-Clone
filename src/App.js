import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import LoginSection from './components/Login-Section/LoginSection';
import GithubAction from './components/Github-Action/GithubAction';
import Organizations from './components/Organizations/Organizations';
import ManagingWork from './components/Managing-Work/ManagingWork';
import Businesses from './components/Business-Section/Businesses';
import CodeSecurity from './components/Code-Security/CodeSecurity';
import Hosting from './components/Hosting-Section/Hosting';
import Integrators from './components/Integrators/Integrators';
import Community from './components/Community-Section/Community';
import GithubUsers from './components/Github-Users/GithubUsers';
import BasicButton from './components/Basic-Button/BasicButton';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <main>

        <LoginSection />

        <GithubAction />

        <h2>More than 2.1 million businesses and organizations use GitHub</h2>

        <Organizations />

        <h3>GitHub for teams</h3>

        <h1>A better way to work together</h1>

        <h2>GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.</h2>

        <BasicButton btnText="Sign up your team" />

        <ManagingWork />

        <h2>See how the world's leading companies use GitHub Enterprise.</h2>

        <Businesses />

        <h3>Security and administration</h3>

        <h1>Your business needs, met</h1>

        <h2>From flexible hosting to granular access controls, we’ve got your security requirements covered.</h2>

        <BasicButton btnText="Learn how Github Enterprise works" />

        <CodeSecurity />

        <Hosting />

        <h3>Integrations</h3>

        <h1>Build on GitHub</h1>

        <h2>Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.</h2>

        <BasicButton btnText="Learn about integrations" />

        <Integrators />

        <p>Sometimes, there’s more than one tool for the job. Why not try something new?</p>

        <a>Browse GitHub Marketplace →</a>

        <h3>Community</h3>

        <h1 className="welcome">Welcome home, developers</h1>

        <h2>GitHub is home to the world’s largest community of developers and their projects...</h2>

        <Community />

        <h2>...whether you’re making your first commit or sending a Rover to Mars, there’s room for you here, too.</h2>

        <GithubUsers />

      </main>

      <Footer />

    </div>
  );
}

export default App;