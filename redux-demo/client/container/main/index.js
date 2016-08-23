/**
 * Created by pomy on 8/23/16.
 */

'use strict';

import {connect} from 'react-redux';

import {addTodo} from '../../redux/actions/index';

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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)


