import React, {Component} from 'react';
import './styles/App.css';
import './styles/header.css';
import './styles/main.css';
import {ShowSidebarBtn} from './components/showsidebarbtn';
import {Footer} from './components/footer';
import {Sidebar} from "./components/sidebar";
import {Content} from "./components/content";


class App extends Component {

    state = {
        showSidebar: false
    };

    onClickBtn = () => {
        this.setState({ showSidebar: !this.state.showSidebar });
    };

    render() {
        return (
            <div className="App">
                <div className="header">
                    <ShowSidebarBtn onClickBtn={this.onClickBtn}/>
                </div>
                <div className="main">
                    { this.state.showSidebar && <Sidebar />}
                    <Content/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
