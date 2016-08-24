/**
 * Created by pomy on 8/23/16.
 */

'use strict';

import {connect} from 'react-redux';

import {addTodo,addTodoWithThunk,addTodoWithCustom,addTodoWithPromise} from '../../redux/actions/index';

import TodoList from '../../general/to-do-list/index';

function mapStateToProps (state) {
    return {
        todoList:state.todoList
    };
}

function mapDispatchToProps (dispatch) {
    return {
        addTodo:(val) => {
            dispatch(addTodo(val));
        },
        addTodoWithThunk:(val)=>{
            dispatch(addTodoWithThunk(val));
        },
        addTodoWithCustom:(val)=>{
            dispatch(addTodoWithCustom(val));
        },
        addTodoWithPromise:(val)=>{
            dispatch(addTodoWithPromise(val));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)


