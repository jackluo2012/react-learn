import React from 'react';
class DigitalClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    //当组件初始化的时候，添加一个定时器
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 3000)
    }
    //当组件卸载的时候要干掉
    componentWillMount() {
        clearInterval(this.timer);
    }
    //当组件更新时
    /**
     * 
     * @param {*} currentProps  更新的props
     * @param {*} currentState  更新的state
     */
    componentDidUpdate(currentProps,currentState){
        console.log(currentProps,currentState);
    }
    render() {
        return (
            <div className="digital-clock-component jumbotron">
                <h1>{this.state.date.toLocaleTimeString()}</h1>

            </div>
        );
    }
}

export default DigitalClock;