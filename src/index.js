import React from 'react';
import PropTypes  from 'prop-types';
import styles from './styles.css'
import {isString,isFunc,isNode} from './utils';

export default class ToolTip extends React.Component{
 
  render(){
    const {funComponent =null,ClassComponent=null,text=null} = this.props;
        return <div className='tooltip-container'>
      <div className='tooltip-content'>
  {(isString(text) && text) || (isFunc(funComponent) && funComponent()) || (!ClassComponent ? 'No Text': <ClassComponent/> )}
      </div>
      <div className='tooltip-arrow'/>
    </div>
  }
}
ToolTip.proptypes= {
  ClassComponent : PropTypes.node,
  funComponent : PropTypes.func,
  text :PropTypes.string
}
