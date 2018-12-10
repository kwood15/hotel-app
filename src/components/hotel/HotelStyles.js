import styled from 'styled-components';

export const HotelListSection = styled.section`
  border-radius: 6px;
  padding: 20px;
  background-color: ${props => props.theme.midGrey};
  box-shadow: 1px 1px 1px 1px #b1afaf;
`;

export const HotelItemWrapper = styled.div`
  border-radius: 6px;
  border: 1px solid #cccccc;
  box-shadow: 1px 2px 2px -1px #bbbbbb;
  padding: 20px;
  background-color: ${props => props.theme.white};
  margin-bottom: 16px;
`;

export const HotelItemTitle = styled.h3`
  font-size: 1.15em;
  margin: 0;
  margin-top: 0.5rem;
`;

export const HotelItemImage = styled.div`
  background-color: ${props => props.theme.placeholderBackground};
  min-height: 150px;
  display: flex;
  flex: 0 0 33.33333%;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  text-transform: uppercase;
  padding: 6px;
  margin-right: 6px;
  margin-bottom: 6px;
  p {
    color: ${props => props.theme.placeholderColor};
  }
`;
