import React from 'react';

class UniHeader extends React.Component {
    render(){
        return(
            <div className="main-section-block-header">
                {this.props.mainLeftIco}
                <h3>{this.props.nameBlock}</h3>
                {this.props.rightIco1 && <div>{this.props.rightIco1}</div>}
                <div>{this.props.rightIco2}</div>
            </div>
        );
    }
}
    
export default UniHeader;