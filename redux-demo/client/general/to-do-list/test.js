/**
 * Created by pomy on 8/23/16.
 * test
 */

'use strict';

import React,{Component} from 'react';
import {connect} from 'react-redux';

class Test extends Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log('sssss test');
        return(
            <div>
                Test:{this.props.val}
            </div>
        )
    }
}

export default connect((state)=>{
    return state.test;
})(Test);