import React, { useState } from 'react';
import styled from 'styled-components';
import { compose, backgroundImage } from 'styled-system';
import { Text } from '../../../Text';
import { Box } from '../../../Box';
import { PlayButton } from '../../../PlayButton';

const SoundCardBackgroundPoster = styled('div')`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${compose(backgroundImage)}
`;

export const SoundCard = React.memo(
  ({ image, shortDescription, isPlayed, onPlaySound }) => {
    return (
      <SoundCardBackgroundPoster backgroundImage={`url(${image})`}>
        <Box position="absolute" bottom="0px" display="flex" width={1}>
          <PlayButton isPlay={isPlayed} onToggle={onPlaySound} />
          <Box
            display={['none', 'flex']}
            width={1}
            alignItems="center"
            paddingX={3}
          >
            <Text as="h3" color="light" lineHieght={0}>
              {shortDescription}
            </Text>
          </Box>
        </Box>
      </SoundCardBackgroundPoster>
    );
  }
);
