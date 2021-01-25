import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

import {
  setGeneratedCode,
  setCodeBase,
} from '../../redux/gameengine/GameEngine.actions'; //importing in random number actions

import './Level.scss';

class Level extends React.Component {
  // setting random codes on mounting(game start)
  componentDidMount() {
    this.props.setGeneratedCode();
    this.props.setCodeBase();
  }

  render() {
    return (
      <>
        <Box className='level-header'>Level</Box>
        <Box className='level'>{this.props.LvL}</Box>
      </>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { setGeneratedCode, setCodeBase })(
  Level
);
