import React from 'react';
/**
 * 受控组件 和非受控组件
 * 受控组件把数据保存在dom中,因此使用非受控组件更容易集成react组件代码
 */
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    };
    handleSubmit(event) {
        console.log(this.textInput.value);
        event.preventDefault();
        this.props.onAddComment(this.textInput.value);
        this.textInput.value="";
    };
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        ref={(textInput) => { this.textInput = textInput }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    留言
                </button>
        <p>已有{this.props.commentsLength}条评论</p>
            </form>
        );
    }
}

export default CommentBox;