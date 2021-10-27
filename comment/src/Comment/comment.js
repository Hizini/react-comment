
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

    getCommentData = (commentValue, nickname) => {
        let date = new Date()
        let commentData = this.state.commentData
        commentData.push({commentValue, nickname, date})

        this.setState({

        })

    }

    render() {

        return (
            <>
                <div className="">
                    <div className="">

                        <Input inputData={this.getCommentData} />
                    </div>
                </div>
            </>
        )
    }
}

export default Comment