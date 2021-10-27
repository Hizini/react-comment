import React, { Component } from 'react'
import './input.scss';

class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            nickname: '',
            checked: false,
        }
    }

    onInputValueHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onInputNicknameHandler = (e) => {
        this.setState({
            nickname: e.target.value
        })
    }

    onButtonHandler = () => {
        const { inputData } = this.props
        if (this.state.value === '') {
            alert("댓글을 입력해주세요!")
        }
        if (this.state.nickname === '') {
            alert("닉네임을 입력해주세요!")
        }
        if (this.state.value && this.state.nickname !== '') {
            console.log(this.state.value, this.state.nickname)
            inputData(this.state.value, this.state.nickname, this.state.checked)
            // if (this.state.checked === true) {
            //     this.setState({
            //         nickname: '익명'
            //     })
            // }
        }
    }

    onCheckedHandler = () => {
        this.setState({
            checked: !this.state.checked
        })
    }


render() {
    console.log(this.state.checked)
    return (
        <>
            <div className="">
                <input onChange={this.onInputValueHandler} type='text' value={this.state.value} placeholder="댓글을 입력하세요."></input>
                <input onChange={this.onInputNicknameHandler} type='text' value={this.state.nickname} placeholder="닉네임을 입력하세요."></input>
                <button onClick={this.onButtonHandler}>입력</button>
                <div>닉네임 익명 여부
                    <input onChange={this.onCheckedHandler} type='checkbox' value={this.state.checked}></input>
                </div>
            </div>
        </>
    )
}
}

export default Input