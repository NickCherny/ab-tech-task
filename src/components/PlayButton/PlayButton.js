import React from 'react';
import styled from 'styled-components';
import { PlayIcon, PauseIcon } from '../../icons';

const ButtonWrapper = styled('button')`
  background-color: ${(props) => props.theme.colors.brandPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 0;
  flex-shrink: 0;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export const PlayButton = React.memo(({ isPlay, onToggle }) => {
  return (
    <ButtonWrapper onClick={onToggle}>
      {isPlay ? <PauseIcon /> : <PlayIcon />}
    </ButtonWrapper>
  );
});
