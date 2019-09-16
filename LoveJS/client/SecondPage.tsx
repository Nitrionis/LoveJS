import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ColorfullText from './ColorfullText';
import Axios from 'axios';

interface SecondPageProps {
    girlInfo: {
        girlName: string,
        comment: string,
        description: string,
        imgPath: string
    }
}
interface SecondPageState {}

export default class SecondPage extends React.Component<SecondPageProps, SecondPageState> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <header style={{ height: "64px", width: "100%" }}>
                    <div style={{ display: "inline-block", padding: "18px" }}>
                        <svg style={{ fill: "#757575", width: "24px", height: "24px" }} viewBox="0 0 24 24" >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </div>
                    <div style={{
                        display: "inline-block",
                        background: "url(https://www.google.com/images/nav_logo289_hr.webp) no-repeat",
                        backgroundPosition: "0 -374px",
                        backgroundSize: "167px",
                        height: "36px",
                        width: "92px",
                        margin: "16px 0 14px",
                        position: "absolute",
                        left: "50%",
                        marginLeft: "-46px"
                    }}></div>
                </header>
                <div style={{
                    marginLeft: "8px",
                    marginRight: "8px"
                }}>
                    <div id="firstPageSearchBoxMainDiv">
                        <div id="firstPageSearchBoxLeftDiv">
                            <input type="search" className="firstPageInput" value="самая красивая девушка" />
                            <div className="firstPageMicrophoneDiv">
                                <span aria-label="Голосовой поиск" className="firstPageMicrophone" style={{ marginTop: "-3px", marginLeft: "5px" }}>×</span>
                            </div>
                        </div>
                        <button className="firstPageSearchButton">
                            <div className="firstPageSearchButtonIconDiv">
                                <span className="firstPageSearchButtonIcon">
                                    <svg focusable="false" viewBox="0 0 24 24">
                                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <div id="msc">
                    <div id="msd">
                        <div className="P1Ycoe"></div>
                        <div data-pr="c" id="hdtb-sc">
                            <div id="hdtb-msb">
                                <div aria-selected="true" className="hdtb-mitem hdtb-msel hdtb-imb" role="tab">Все</div>
                                <div aria-selected="false" className="hdtb-mitem hdtb-imb" role="tab">
                                    <a className="q qs">Картинки</a></div>
                                <div aria-selected="false" className="hdtb-mitem hdtb-imb" role="tab">
                                    <a className="q qs">Новости</a></div>
                                <div aria-selected="false" className="hdtb-mitem hdtb-imb" role="tab">
                                    <a className="q qs">Видео</a></div>
                                <div aria-selected="false" className="hdtb-mitem hdtb-imb" role="tab">
                                    <a className="q qs">Карты</a></div>
                                <div aria-selected="false" className="hdtb-mitem hdtb-imb" role="tab">
                                    <a className="q qs" >Покупки</a></div>
                                <div aria-selected="false" className="hdtb-mitem hdtb-imb" role="tab">
                                    <a className="q qs" >Книги</a></div>
                                <div aria-selected="false" className="hdtb-mitem hdtb-imb" role="tab">
                                    <a className="q qs" >Авиабилеты</a></div>
                                <a className="hdtb-tl" id="hdtb-tls" role="button" data-ved="0ahUKEwi8y8Kj--jjAhWJepoKHV8yD2wQ2x8IEg">Инструменты поиска</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cnt">
                    <div className="center_col UOcpr" id="center_col" style={{ color: "#f7f7f7" }}>
                        <div className="g kno-result rQUFld kno-kp mnr-c g-blk" lang="ru-RU" data-hveid="CBAQAA" data-ved="2ahUKEwirt5znoerjAhUmposKHSVyA1cQjh8oAXoECBAQAA">
                            <div className="kp-hc">
                                <div className="Ftghae iirjIb">
                                    <div className="rsir2d">
                                        <span className="JP8rKe r8U5xb z1asCe Fp7My">
                                            <svg focusable="false" viewBox="0 0 24 24">
                                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="SPZz6b">
                                        <div className="kno-ecr-pt kno-fb-ctx PZPZlf HOpgu gsmt" data-local-attribute="d3bn" data-attrid="title" data-ved="2ahUKEwirt5znoerjAhUmposKHSVyA1cQ3B0oATACegQIDRAL">
                                            <span>{this.props.girlInfo.girlName}</span>
                                        </div>
                                        <div className="wwUB2c kno-fb-ctx PZPZlf" data-attrid="subtitle">
                                            <span data-ved="2ahUKEwirt5znoerjAhUmposKHSVyA1cQ2kooAjACegQIDRAM">{this.props.girlInfo.comment}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ borderTop: "solid 1px rgba(0, 0, 0, .16)", borderRadius: 0 }}>
                                <div style={{ position: "relative", padding: "16px" }}>
                                    <img src={this.props.girlInfo.imgPath} style={{
                                        position: "relative",
                                        borderRadius: "8px",
                                        width: "100%"
                                    }}></img>
                                </div>
                            </div>
                            <div style={{
                                borderTop: "solid 1px rgba(0, 0, 0, .16)",
                                borderRadius: 0,
                                color: "#1d1d1d",
                                fontSize: "16px",
                                padding: "16px"
                            }}>
                                <span>{this.props.girlInfo.description}</span>
                            </div>
                            <Poll />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

interface PollProps { }
interface PollState {
    girlId: string,
    answers: Array<boolean>
}
class Poll extends React.Component<PollProps, PollState> {
    constructor(props) {
        super(props);
        this.state = {
            girlId: window.location.href.split('?')[1],
            answers: [false, false, false, false]
        };
    }
    getQuestion = (text: string, dataOffset: number, action: (i, v) => void) => {
        return (
            <div style={{
                borderTop: "solid 1px rgba(0, 0, 0, .16)",
                borderRadius: 0,
                color: "#1d1d1d",
                fontSize: "16px",
                paddingLeft: "16px"
            }}>
                <span>{text}</span>
                <div style={{ display: "inline-block" }}>
                    <FormControlLabel
                        value="start"
                        control={
                            <Checkbox color="primary" onChange={(e, v) => action(dataOffset + 0, v)} />
                        }
                        label="Да"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="start"
                        control={
                            <Checkbox color="secondary" onChange={(e, v) => action(dataOffset + 1, v)} />
                        }
                        label="Нет"
                        labelPlacement="start"
                    />
                </div>
            </div>
        );
    }
    getSecondQuestion = () => {
        if (this.state.answers[0]) {
            return this.getQuestion("Вас это заинтересовало?", 2, (dataIndex, v) => {
                this.setState({
                    answers: this.state.answers.map((value, i) => {
                        if (i == dataIndex)
                            return v;
                        return value;
                    })
                });
            });
        }
    }
    getMessage = () => {
        if (this.state.answers[2] && !this.state.answers[3]) {
            const style = {
                textAlign: "center",
                lineHeight: "0px"
            }
            return (
                <div style={{
                    borderTop: "solid 1px rgba(0, 0, 0, .16)",
                    borderRadius: 0,
                    color: "#1d1d1d",
                    fontSize: "16px",
                    paddingLeft: "16px"
                }}>
                    <ColorfullText text="Наша служба" style={style} />
                    <ColorfullText text="поддержки скоро" style={style} />
                    <ColorfullText text="свяжется с вами:)" style={style} />
                </div>
            );
        }
    }
    componentDidUpdate() {
        window.scrollTo(0, document.body.scrollHeight);
        Axios.post(window.location.toString().concat("result"), this.state);
    }
    render() {
        return (
            <div>
                {/*this.getQuestion("Вы свободны?", 0, (dataIndex, v) => {
                //    this.setState({
                //        answers: this.state.answers.map((value, i) => {
                //            if (i == dataIndex)
                //                return v;
                //            return value;
                //        })
                //    });
                */})}
                {this.getSecondQuestion()}
                {this.getMessage()}
            </div>
        );
    }
}