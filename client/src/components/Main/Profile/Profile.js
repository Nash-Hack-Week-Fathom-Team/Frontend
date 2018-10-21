import React, { Component } from 'react';

class Profile extends Component {
    state = {
        image: "https://picsum.photos/100"
    };
    render() {
        return (
            <div class="Profile">
                <img src={this.state.image} alt="Scooba Steve" class="profile-pic"/>
                <a class="profile-name" href="#">Scooba Steve</a>
            </div>
        );
    }
}

export default Profile;