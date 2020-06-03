import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing'


const Dashboard=()=>{return "Dashboard"};

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing}/> 
                        <Route exact path="/surveys" component={Dashboard}/> 
                    </div>
                </BrowserRouter>
            </div>
        )
    }
   
}

export default connect(null,actions) (App);
//connect method takes props and action creators as arguments