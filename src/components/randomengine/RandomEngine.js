import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

import './RandomEngine.scss';

const RandomEngine = props => {
  return (
    <>
      <Box className='p-code'>Enter the correct code to advance level</Box>
      <Box className='p-code'>There are 3 numbers in the code</Box>
      <Box className='p-code'>The codes sum is:</Box>
      <Box className='code-sum'>{props.CodeSum}</Box>
      <Box className='p-code'>The codes product is:</Box>
      <Box className='code-product'>{props.CodeProduct}</Box>
    </>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(RandomEngine);
