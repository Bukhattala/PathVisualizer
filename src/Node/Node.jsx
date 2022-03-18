import React from 'react';
import './Node.css';

export default function Node() {
  return (
    <div style={styles.nodeStyle}>
    </div>
  )
}

const styles = {
  nodeStyle : {
      width: '20px',
      height: '20px',
      backgroundColor: 'black',
      outline: '1px solid rgba(144, 175, 175, 0.75)',
      display: 'inline-block',
      
  }
}
