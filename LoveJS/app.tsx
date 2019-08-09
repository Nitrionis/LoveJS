import React from 'react';
import ReactDOM from 'react-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import axios from 'axios';

interface Props { }
interface State {
    activePageNumber: Number
}

export class App extends React.Component<Props, State> {
    girlInfo: any;
    constructor(props) {
        super(props);
        this.state = {
            activePageNumber: 1
        };
        axios.get('/girlInfo', {
            params: { id: window.location.href.split('?')[1] }
        }).then((res) => {
            this.girlInfo = res.data;
            this.girlInfo.girlName = res.data.name;
        });
    }
    changePage = (number: number) => {
        this.setState({ activePageNumber: number });
    }
    render() {
        switch (this.state.activePageNumber) {
            case 1: return (<FirstPage changePage={this.changePage}></FirstPage>);
            case 2: return (<SecondPage girlInfo={this.girlInfo}></SecondPage>);
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));