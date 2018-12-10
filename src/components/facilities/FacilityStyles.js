import styled from 'styled-components';

export const FacilityGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
  box-shadow: inset 0px -1px 0px 0 ${props => props.theme.white};
`;

export const FacilityLabel = styled.label`
  color: ${props => props.theme.labelColor};
`;

export const FacilityList = styled.ul`
  margin-bottom: 16px;
`;

export const FacilityListItem = styled.li`
  .facilities-list__name {
    display: inline-block;
    padding: 6px;
    text-transform: capitalize;
`;
