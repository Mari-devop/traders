import styled from 'styled-components';

export const ResultItem = styled.div`
  margin-bottom: 10px;
`;

export const ResultName = styled.h3`
  margin: 0;
  color: var(--primary-text-color);

  a {
    text-decoration: none;
    color: var(--link-color);
    font-weight: 500;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ResultDetails = styled.p`
  margin: 0;
  color: var(--secondary-text-color);
`;

export const ResultContent = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;

  @media (max-width: 570px) {
    flex-direction: row;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
`;

