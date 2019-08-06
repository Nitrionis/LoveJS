import React from 'react';

interface LogoProps {
    text: string,
    style: any
}
interface LogoState { }

export default class ColorfullText extends React.Component<LogoProps, LogoState> {
    colors: Array<string>;
    constructor(props) {
        super(props);
        this.colors = ["#4285F4", "#34A853", "#FBBC05", "#EA4335"];
    }
    rebuildString = () => {
        if (this.props.text != null) {
            return this.props.text.split('').map((v, i) => {
                return <h1 key={i} className="ColorfullText" style={{ color: this.colors[i % this.colors.length] }}>{v}</h1>;
            });
        } else {
            return null;
        }
    }
    render() {
        return (
            <div style={this.props.style}>
                {this.rebuildString()}
            </div>
        );
    }
}