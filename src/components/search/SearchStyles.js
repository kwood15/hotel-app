import styled from 'styled-components';
import { Button, Input } from '../shared/SharedStyles';

export const SearchButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: .3125em;
  border-bottom-right-radius: .3125em;
`;

export const SearchInput = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
