import React from 'react'
class Welcome extends React.Component{
    render(){
        const todoList = ['Learn React','Learn Redux']
        const isLogin = false;
        return (
            <div>
                <h1>Hello React</h1>
                {isLogin ? <p>你已登陆</p> : <p>你未登陆</p>}

            </div>
        )
    }
}
export default Welcome