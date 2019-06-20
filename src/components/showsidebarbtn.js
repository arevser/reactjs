import React, { Component } from  'react';
import '../styles/header.css';

export class ShowSidebarBtn extends Component {
    render() {
        return (
            <div>
                <input type="submit" onClick={() => this.props.onClickBtn()} />
            </div>
        )
    }
}