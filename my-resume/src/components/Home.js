import React, {Component} from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Skills from './Skills';
import Experiences from './Experiences';
import Education from './Education';
import Portifolios from './Portifolios';
import About from './About';

export default class Home extends Component {
  render() {
    return (
     <section>
      <Navbar/>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4 l3'>
              <Profile />
          </div>
          <div className='col s12 m8 l9'>
            <About />
            <Skills />
            <Experiences />
            <Education />
            <Portifolios />
          </div>
        </div>
      </div>
     </section>
    );
  }
}