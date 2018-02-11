import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/header/header';



class Dashboard extends React.Component {
    render() {
        var ele = <Header />
            ;
        return ele;
    }
}

const container = document.getElementById('root');
ReactDOM.render(<Dashboard />, container);