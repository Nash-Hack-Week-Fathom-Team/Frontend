import React, { Component } from 'react';

class Profile extends Component {
    state = {
        image: "https://picsum.photos/100"
    };
    render() {
        return (
            <div class="Profile">
                <img src={this.state.image} alt="Steve" class="profile-pic"/>
                <a class="profile-name" href="#">Steve</a>
            </div>
        );
    }
}

export default Profile;