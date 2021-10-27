
import React, { Component } from 'react'
import './comment.scss';

import Input from './Input/input';
import List from './List/list';

class Comment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            commentData: []
        }
    }

    getCommentData = (commentValue, nickname, checked) => {
        let date = new Date()
        let commentData = this.state.commentData
        commentData.push({commentValue, nickname, date, checked})

        this.setState({
            commentData : commentData
        })

    }

    render() {
        console.log(this.state.commentData)
        return (
            <>
                <div className="">
                    <div className="">
                        <List listData={this.state.commentData}/>
                        <Input inputData={this.getCommentData} />
                    </div>
                </div>
            </>
        )
    }
}

export default Comment