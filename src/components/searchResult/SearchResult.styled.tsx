import styled from 'styled-components';

export const ResultItem = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const ResultName = styled.h3`
  margin: 0;
  color: var(--primary-text-color);

  a {
    text-decoration: none;
    color: var(--link-color);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ResultDetails = styled.p`
  margin: 5px 0;
  color: var(--secondary-text-color);
`;

export const ResultContent = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  gap: 10px;
`;
