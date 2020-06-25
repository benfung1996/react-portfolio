import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

export default class App extends Component {

  render() {
    return (
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
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
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}

