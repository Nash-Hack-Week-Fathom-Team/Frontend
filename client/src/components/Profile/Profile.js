import React, { Component } from 'react';

class Profile extends Component {
    state = {
        image: "https://picsum.photos/100"
    };
    render() {
        return (
            <div>
                <img src={this.state.image} alt="Scooba Steve"/>
                <a href="#">Scooba Steve</a>
            </div>
        );
    }
}

export default Profile;