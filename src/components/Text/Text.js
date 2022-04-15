import { typography, space, position, color, compose } from 'styled-system';
import styled from 'styled-components';

export const Text = styled('p')(compose(typography, space, position, color));
