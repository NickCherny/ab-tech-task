import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';

export const Article = React.memo(({ title, text }) => {
  return (
    <Box as="article">
      <Text as="h2" fontSize={[8, 10, 8]} mb={[3, 2, 3]} lineHeight={1}>
        {title}
      </Text>
      <Box>
        <Text fontSize={[5, 4, 4]} lineHeight={[1.5, 1.5]}>
          {text}
        </Text>
      </Box>
    </Box>
  );
});
