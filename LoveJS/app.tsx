import React from 'react';
import ReactDOM from 'react-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

interface Props { }
interface State {
    activePageNumber: Number
}

export class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            activePageNumber: 1
        };
    }
    changePage = (number: number) => {
        this.setState({ activePageNumber: number });
    }
    render() {
        switch (this.state.activePageNumber) {
            case 1: return (<FirstPage changePage={this.changePage}></FirstPage>);
            case 2: return (<SecondPage />);
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));