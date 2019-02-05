import React from 'react';
import './css/main.css';

import Aside from './components/aside.js';
import Main from './components/main.js';
class App extends React.Component {
  render() {
    return (
            <div className="App">
                {/* <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                    <div className="aside-info">
                        <img className="avatar" src="./css/img/avatar.jpg" alt=""/>
                        <h5>Maksym Mysak</h5>
                        <h6>Admin Manager</h6>
                        <br/>
                        <div className="aside-info-soc">
                        <div className="aside-info-soc-part">
                            <img src="css/img/aside-buttton/men.png" alt=""/>
                            <h6>26k+</h6>
                            <p>+14</p>
                        </div>
                        <div className="aside-info-soc-part">
                            <img src="css/img/aside-buttton/plane.png" alt=""/>
                            <h6>1095</h6>
                            <p>+56</p>
                        </div>
                        <div className="aside-info-soc-part">
                            <img src="css/img/aside-buttton/eye.png" alt=""/>
                            <h6>428</h6>
                            <p>+38</p>
                        </div>
                        </div>
                    </div> 
                    <section className="aside-menu">
                        <div>
                            <input id="ac-1" name="dashboard" type="checkbox"  />
                            <label htmlFor="ac-1"><i className="fas fa-home"></i><p>Dashboard</p></label>
                            <article>
                            
                            </article>
                        </div>
                        
                        
                        <div>
                            <input id="ac-4" name="messages" type="checkbox"  />
                            <label htmlFor="ac-4"><i className="fas fa-comments"></i><p>Messages</p></label>
                            <article>
                                
                            </article>
                        </div>
                        <div>
                            <input id="ac-9" name="support" type="checkbox"  />
                            <label htmlFor="ac-9"><i className="fas fa-cog"></i><p>Support</p></label>
                            <article>
                                
                            </article>
                        </div>
                    </section>     
            </div> */}
                <div className="wrapper">
                    < Aside />
                    < Main />
                </div>
            </div>
            );
       }
   }
 export default App;