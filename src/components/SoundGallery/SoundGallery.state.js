export const receivePlayedSound = (soundId) => ({
  type: 'SOUND/PLAY',
  payload: {
    soundId,
  },
});

export const initialState = {
  playedSound: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SOUND/PLAY': {
      return {
        ...state,
        playedSound: action.payload.soundId,
      };
    }
    default:
      return state;
  }
};
