import styled from 'styled-components';

export const FacilityGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
`;

export const FacilityLabel = styled.label`
  text-transform: uppercase;
  color: ${props => props.theme.primaryColor};
`;

export const FacilityList = styled.label`
  text-transform: capitalize;
`;

