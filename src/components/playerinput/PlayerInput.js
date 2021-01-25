import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setLevel } from '../../redux/gameengine/GameEngine.actions';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './PlayerInput.scss';

const PlayerInput = props => {
  const [playerInput, setPlayerInput] = useState({
    GuessA: 0,
    GuessB: 0,
    GuessC: 0,
  });

  const [open, setOpen] = useState(false);
  const [fail, setFail] = useState(false);
  const [playerGameOver, setPlayerGameOver] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickFail = () => {
    setFail(true);
  };

  const gameOver = () => {
    setPlayerGameOver(true);
    sessionStorage.clear();
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };

  const handlePlayerInput = e => {
    const value = e.target.value;
    setPlayerInput({
      ...playerInput,
      [e.target.name]: value,
    });
  };

  const handlePlayerOutcome = e => {
    const GuessSum =
      parseInt(playerInput.GuessA) +
      parseInt(playerInput.GuessB) +
      parseInt(playerInput.GuessC);

    const GuessProduct =
      parseInt(playerInput.GuessA) *
      parseInt(playerInput.GuessB) *
      parseInt(playerInput.GuessC);

    if (
      props.CodeSum === GuessSum &&
      props.CodeProduct === GuessProduct &&
      props.LvL <= 4
    ) {
      props.setLevel();
      handleClickOpen();
    } else if (props.LvL > 4) {
      gameOver();
    } else {
      handleClickFail();
    }
  };

  const handleSubmit = () => {
    handlePlayerOutcome();
  };

  return (
    <>
      <form>
        <input
          type='number'
          name='GuessA'
          placeholder='Input #1'
          value={playerInput.GuessA}
          onChange={handlePlayerInput}
        />
        <input
          type='number'
          name='GuessB'
          placeholder='Input #2'
          value={playerInput.GuessB}
          onChange={handlePlayerInput}
        />
        <input
          type='number'
          name='GuessC'
          placeholder='Input #3'
          value={playerInput.GuessC}
          onChange={handlePlayerInput}
        />
        <button type='button' onClick={handleSubmit}>
          Enter
        </button>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title' className='dialog-title-success'>
          Congrats!
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className='dialog-content-text-success'
            id='alert-dialog-description'
          >
            You have advanced to <b>Level: {props.LvL}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} color='primary' autoFocus>
            Ok
          </button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={fail}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title' className='dialog-title'>
          You Lose!
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className='dialog-content-text'
            id='alert-dialog-description'
          >
            Replay level
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} color='primary' autoFocus>
            Ok
          </button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={playerGameOver}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title' className='dialog-title'>
          Game Over!
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className='dialog-content-text'
            id='alert-dialog-description'
          >
            Congrats! You have beat the game!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} color='primary' autoFocus>
            Ok
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { setLevel })(PlayerInput);
