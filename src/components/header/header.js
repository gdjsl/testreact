import React from 'react';
import './header.scss';

class Header extends React.Component {
    render() {
        var ele = <div className='head'>
            <div className='menu-btn'>
                <i className="material-icons">menu</i>
            </div>
            <div className="profile">
                <input type="text" name="searchKey"/>
            </div>
        </div>
            ;
        return ele;
    }
}

export default Header;