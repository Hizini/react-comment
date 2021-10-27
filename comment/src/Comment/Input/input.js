import React, { Component } from 'react'
import './input.scss';

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            nickname: '',
            commentArr: [],
            checked: false,
        }
    }

    getInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onButtonHandler = () => {
        const { inputData } = this.props
        if(this.state.value === '') {
            alert("댓글을 입력해주세요!")
        }
        if(this.state.nickname === '') {
            alert("닉네임을 입력해주세요!")
        }
        if(this.state.value && this.state.nickname !== '') {
            inputData(this.state.value, this.state.nickname)
            // this.setState({
            //     commentArr: this.state.commentArr.concat([this.state.value, this.state.nickname])
            // })
        }
    }

    render() {
        const { value, nickname } = this.state

        console.log(this.state.commentArr)
        return (
            <>
                <div className="">
                    <input onChange={this.getInputValue} type='text' name="value" value={this.state.value} placeholder="댓글을 입력하세요."></input>
                    <input onChange={this.getInputValue} type='text' name="nickname" value={this.state.nickname} placeholder="닉네임을 입력하세요."></input>
                    <button onClick={this.onButtonHandler}>입력</button>
                </div>
            </>
        )
    }
}

export default Input