import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 20px;
  margin: 70px 0;
  border-radius: 10px;
  width: 1080px;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: span 2;
  align-items: left;
`;

export const Left = styled.div`
  h3 {
    color: var(--primary-text-color); 
    font-size: 20px;   
    font-weight: 500;
    margin: 0;
  }
  p {
    color: var(--primary-text-color);
    font-size: 14px;
    margin: 0;
  }
`;

export const Right = styled.div`
  margin-right: 400px;
  h3 {
    color: var(--primary-text-color);   
    font-size: 20px;   
    font-weight: 500; 
    margin: 0;
  }
  p {
    color: var(--primary-text-color);
    font-size: 14px;
    margin: 0;
  }
`;

export const ActivityLogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const LogEntry = styled.div`
  color: var(--primary-text-color);
  font-size: 12px;
`;

export const LogEntryHeader = styled.div`
  color: var(--secondary-color);
`;

export const LogEntryBody = styled.div`
    margin-top: 5px;
    color: var(--primary-text-color);
    font-weight: 500;
    font-size: 15px;
`;

export const SecondRow = styled.div`
  grid-column: span 2;
  h3 {
    color: var(--primary-text-color);   
    font-size: 20px;
    font-weight: 500; 
    margin: 0;
  }
  p {
    color: var(--primary-text-color);
    font-size: 12px;
    margin: 0;
  }
`;
