import styled from '@emotion/styled';

export const MovieWrap = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const MovieInfoWrap = styled.div`
  padding: 24px;
`;

export const Poster = styled.img`
  align-self: start;
`;

export const AddInfo = styled.div`
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  & li:first-of-type {
    margin-bottom: 4px;
  }
`;
