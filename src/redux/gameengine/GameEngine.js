import { GameEngineActionTypes } from './GameEngine.types';

const initialState = {
  LvL: 1,
  CodeA: 0,
  CodeB: 0,
  CodeC: 0,
  CodeSum: 0,
  CodeProduct: 0,
};

const gameEngine = (state = initialState, action) => {
  switch (action.type) {
    case GameEngineActionTypes.SET_NEW_LEVEL:
      return { ...state, LvL: state.LvL + 1 };
    case GameEngineActionTypes.SET_GENERATED_CODE:
      return {
        ...state,
        CodeA: action.codeA + state.LvL + state.LvL,
        CodeB: action.codeB + state.LvL + state.LvL,
        CodeC: action.codeC + state.LvL + state.LvL,
      };
    case GameEngineActionTypes.SET_CODEBASE:
      return {
        ...state,
        CodeSum: state.CodeA + state.CodeB + state.CodeC,
        CodeProduct: state.CodeA * state.CodeB * state.CodeC,
      };
    default:
      return state;
  }
};

export default gameEngine;
