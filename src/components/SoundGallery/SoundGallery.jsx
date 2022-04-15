import React, { useCallback, useReducer } from 'react';
import styled from 'styled-components';
import { width } from 'styled-system';
import { Box } from '../Box';
import { SoundCard } from './components/SoundCard';

import {
  initialState,
  reducer,
  receivePlayedSound,
} from './SoundGallery.state';

const SoundGalleryItem = styled('li')`
  letter-spacing: 0;
  display: block;
  ${width}
`;

export const SoundGallery = React.memo(({ items }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (v) => v);
  const onPlaySound = useCallback((id) => dispatch(receivePlayedSound(id)), []);
  const onStopPlay = useCallback(() => dispatch(receivePlayedSound(null)), []);

  return (
    <Box as="ul" display="flex" flexWrap="wrap">
      {items.map(({ id, image, alt }) => {
        const isPlayed = state.playedSound === id;
        return (
          <SoundGalleryItem key={id} as="li" width={1 / 3}>
            <SoundCard
              image={image}
              shortDescription={alt}
              isPlayed={isPlayed}
              onPlaySound={isPlayed ? onStopPlay : () => onPlaySound(id)}
            />
          </SoundGalleryItem>
        );
      })}
    </Box>
  );
});
