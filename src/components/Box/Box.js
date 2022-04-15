import styled from 'styled-components';
import {
  typography,
  space,
  color,
  layout,
  flexWrap,
  alignItems,
  justifyContent,
  position,
  compose,
} from 'styled-system';

export const Box = styled('div')`
  position: relative;
  ${compose(
    typography,
    space,
    color,
    layout,
    flexWrap,
    alignItems,
    justifyContent,
    position
  )}
`;
