import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        {/*this.props.modules.map( modules => (
                            <Link className="nav-link" key={modules.id} to={"module/".concat(modules.id)} selected>{modules.text}</Link>
                        ))*/}
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modules: state.modules
    }
}

export default connect(mapStateToProps)(NavBar)