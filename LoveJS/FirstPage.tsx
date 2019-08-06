import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import ColorfullText from './ColorfullText';

interface Props {
    changePage: (number: number) => void
}
interface State {
    orientation: boolean,
    pointer: {
        style: any
    },
    logoText: string
}

export default class FirstPage extends React.Component<Props, State> {

    searchInput: React.RefObject<HTMLInputElement>;
    searchButtonRef: React.RefObject<HTMLButtonElement>;
    logoUpdateCount: number;
    logoFinalText: string;
    inputTimer: any;
    searchInputUpdateCount: number;
    searchInputFinalText: string;

    constructor(props) {
        super(props);
        this.state = {
            orientation: true,
            pointer: {
                style: { left: "calc(50% - 32px)", display: "none", transform: "rotate(-90deg)" }
            },
            logoText: null
        };
        this.searchInput = React.createRef();
        this.searchButtonRef = React.createRef();
        this.searchInputUpdateCount = 0;
        this.searchInputFinalText = "самая красивая девушка";
        window.addEventListener('resize', () => {
            this.setState({ orientation: screen.orientation.angle == 0 });
        });
    }
    getRotation(deg: Number) {
        return "rotate(" + deg.toString() + "deg)";
    }
    componentDidMount() {
        this.logoUpdateCount = 0;
        this.logoFinalText = "Как найти девушку?";
        setTimeout(() => {
            this.inputTimer = setInterval(this.animateLogo, 200);
        }, 2000);
    }
    animateLogo = () => {
        this.logoUpdateCount++;
        if (this.logoUpdateCount > this.logoFinalText.length) {
            clearInterval(this.inputTimer);
            setTimeout(() => {
                this.setState({ logoText: null });
                setTimeout(() => {
                    this.setState({
                        pointer: {
                            style: { left: "calc(50% - 32px)", transform: "rotate(-90deg)" }
                        }
                    });
                    this.movePointerToSearchInput();
                }, 2000);
            }, 1000);
            return;
        }
        this.setState({ logoText: this.logoFinalText.slice(0, this.logoUpdateCount) });
    }
    movePointerToSearchInput = () => {
        let rect = this.searchInput.current.getBoundingClientRect();
        this.setState({
            pointer: {
                style: {
                    left: rect.left - 16,
                    top: rect.top + 8,
                    transform: "rotate(-90deg)",
                    opacity: 1
                }
            }
        });
        setTimeout(() => {
            this.searchInput.current.focus();
            this.setState({
                pointer: {
                    style: {
                        right: (window.innerWidth - this.state.pointer.style.left - 64) / window.innerWidth * 100 + "%",
                        top: this.state.pointer.style.top,
                        transform: "rotate(-90deg)",
                        opacity: 0
                    }
                }
            });
            this.inputTimer = setInterval(this.updateSearchInput, 300);
        }, 2200);
    }
    updateSearchInput = () => {
        this.searchInputUpdateCount++;
        if (this.searchInputUpdateCount >= this.searchInputFinalText.length) {
            clearInterval(this.inputTimer);
            setTimeout(this.movePointerToButton, 200);
        }
        this.searchInput.current.value = this.searchInputFinalText.slice(0, this.searchInputUpdateCount);
    }
    movePointerToButton = () => {
        let rect = this.searchButtonRef.current.getBoundingClientRect();
        this.setState({
            pointer: {
                style: {
                    right: -5,
                    top: rect.top + 12,
                    transform: "rotate(-90deg)",
                    opacity: 1
                }
            }
        });
        setTimeout(() => {
            this.setState({
                pointer: {
                    style: {
                        right: -5,
                        top: rect.top + 12,
                        transform: "rotate(-90deg)",
                        opacity: 0
                    }
                }
            });
        }, 2100);
        setTimeout(() => {
            this.props.changePage(2);
        }, 4100);
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{ paddingTop: "20px", margin: "10px" }}>
                    <Logo text={this.state.logoText} />
                    <div id="firstPageSearchBoxMainDiv">
                        <div id="firstPageSearchBoxLeftDiv">
                            <input ref={this.searchInput} type="search" className="firstPageInput" />
                            <div className="firstPageMicrophoneDiv">
                                <span aria-label="Голосовой поиск" className="firstPageMicrophone">
                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <button ref={this.searchButtonRef} className="firstPageSearchButton" onClick={() => this.props.changePage(2)}>
                            <div className="firstPageSearchButtonIconDiv">
                                <span className="firstPageSearchButtonIcon">
                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <Footer orientation={this.state.orientation} />
                <img className="firstPagePointer"
                    style={this.state.pointer.style}
                    height="64"
                    width="64"
                    src="target.png"
                />
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header style={{ height: "48px", width: "100%" }}>
                <div style={{ padding: "12px 16px" }}>
                    <svg style={{ fill: "#757575", width: "24px", height: "24px" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                    <div style={{ display: "inline-flex", verticalAlign: "top" }}>
                        <span className="firstPageTopText">ВСЕ</span>
                        <span className="firstPageTopText">КАРТИНКИ</span>
                    </div>
                    <div
                        style={{
                            float: "right",
                            height: "48px",
                            lineHeight: "normal",
                            padding: "0 4px",
                            opacity: 0.55
                        }}
                    >
                        <div
                            style={{
                                width: "24px", height: "24px",
                                backgroundPosition: "-64px -31px",
                                display: "inline-block",
                                marginRight: "8px",
                                backgroundSize: "128px 88px",
                                backgroundImage: "url(//ssl.gstatic.com/gb/images/qi2_00ed8ca1.png)"
                            }}>
                        </div>
                        <HelpIcon />
                    </div>
                </div>
            </header>
        );
    }
}

interface FooterProps {
    orientation: boolean
}
interface FooterState { }

class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props) {
        super(props);
    }
    getFooter = () => {
        if (this.props.orientation) {
            return (
                <footer className="firstPageFooter">
                    <div style={{ margin: "0 12px", textAlign: "left" }}>
                        <span style={{ fontSize: "16px", color: "rgba(0, 0, 0, .54)" }}>Россия</span>
                    </div>
                    <div className="firstPageFooterBot" style={{ visibility: "visible" }} id="swml">
                        <span className="unknown_loc"></span>
                        <span style={{ color: "#333", fontWeight: "bold" }}>Неизвестно</span>
                        <span style={{ display: "none" }}> - </span>
                        <span style={{ display: "none" }}></span>
                        <a style={{ display: "none" }}></a>
                        <span> - </span>
                        <a>Учитывать мое местоположение</a>
                    </div>
                </footer>
            );
        }
    }
    render() {
        return (
            <div>
                {this.getFooter()}
            </div>
        );
    }
}

interface LogoProps {
    text: string
}
interface LogoState { }

class Logo extends React.Component<LogoProps, LogoState> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{ display: this.props.text == null ? "block" : "none" }}>
                    <div style={{ textAlign: "center", margin: "36px auto 18px", width: "160px", lineHeight: 0 }} >
                        <img
                            style={{ border: "none", margin: "8px 0" }}
                            height="56"
                            width="160"
                            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                            id="hplogo"
                        />
                    </div>
                </div>
                <div style={{ display: this.props.text != null ? "block" : "none" }}>
                    <ColorfullText text={this.props.text} style={{
                        textAlign: "center",
                        margin: "36px auto 18px",
                        height: "72px"
                    }}/>
                </div>
            </div>
        );
    }
}