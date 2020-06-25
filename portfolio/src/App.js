import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Title" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}

