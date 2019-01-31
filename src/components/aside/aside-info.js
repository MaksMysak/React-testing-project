import React from 'react';
import avatar from './../../images/aside-info/avatar.jpg';
import men from './../../images/aside-info/men.png';
import plane from './../../images/aside-info/plane.png';
import eye from './../../images/aside-info/eye.png';

class AsideInfo extends React.Component {
    render(){
        return(
            <div className="aside-info">
                <img className="avatar" src={avatar} alt="avatar"/>
                <h5>Maksym Mysak</h5>
                <h6>Admin Manager</h6>
                <br/>
                <div className="aside-info-soc">
                    <div className="aside-info-soc-part">
                        <img src={men} alt="men"/>
                        <h6>26k+</h6>
                        <p>+14</p>
                    </div>
                    <div className="aside-info-soc-part">
                        <img src={plane} alt="plane"/>
                        <h6>1095</h6>
                        <p>+56</p>
                    </div>
                    <div className="aside-info-soc-part">
                        <img src={eye} alt="eye"/>
                        <h6>428</h6>
                        <p>+38</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default AsideInfo;