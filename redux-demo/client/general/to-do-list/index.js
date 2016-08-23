/**
 * Created by pomy on 8/23/16.
 * todo列表
 */

'use strict';

import './index.less';

import React,{Component} from 'react';

export default class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            val:''
        }
    }

    valueChange(e){
        this.setState({
            val:e.target.value
        });
    }

    add() {
        this.props.addTodo(this.state.val);
    }

    render(){

        let {todoList} = this.props;

        return(
            <div className="container">
                <div className="add">
                    <input type="text" placeholder="添加一条Todo" onChange={this.valueChange.bind(this)}/>
                    <span onClick={this.add.bind(this)}>添加</span>
                </div>
                <ul className="list">
                    {
                        todoList.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}