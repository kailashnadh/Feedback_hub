import { Component } from "react";
import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from './Payments';
 class Header extends Component {

    headerContent(){
        console.log(this.props.auth)
        switch (this.props.auth){
            case null:
                return 'loading';
            
            case false:
                return <li><a href="/auth/google">login to google</a></li>;

            default:
        return  [
            <li key='1'><Payments/></li>,
            <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
        <li key='2'><a href="/api/logout">logout</a></li>
       
        ];
                   
                
        }
    }
    render() {
        console.log(this.props)
        console.log(this.headerContent())
        return (
            
                <nav>
                    <div className="nav-wrapper">
                        <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">Feedbacker</Link>
                        <ul className="right">
                            {this.headerContent()}
                        </ul>
                    </div>
                </nav>

        )
    }
}

function mapStatetoProps(state){
    return {
        auth:state.auth
    };
}

export default connect(mapStatetoProps) (Header);