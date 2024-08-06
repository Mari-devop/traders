import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 20px;
  margin: 60px 0;
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
  margin-right: 390px;
  h3 {
    color: var(--primary-text-color);   
    font-size: 20px;   
    font-weight: 500; 
    margin: 0;
  }
  p {
    color: var(--primary-text-color);
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }
    @media (max-width: 769px) {
      margin-right: 430px;
    }
    @media (max-width: 720px) {
      margin-right: 480px;
    }
    @media (max-width: 677px) {
      margin-right: 530px;
    }
    @media (max-width: 617px) {
      margin-right: 630px;
    }
    @media (max-width: 521px) {
      margin-right: 730px;
    }
    @media (max-width: 400px) {
      margin-right: 810px;
    }
`;

export const ActivityLogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const LogEntry = styled.div`
  color: var(--primary-text-color);
  font-size: 12px;
  gap: 10px;
`;

export const LogEntryHeader = styled.div`
  color: rgb(156 163 175);
  font-size: 12px;
  font-weight: 500;
`;

export const LogEntryBody = styled.div`
    color: var(--primary-text-color);
    font-weight: 500;
    font-size: 15px;
    width: 85vw;

    @media (max-width: 1840px) {
     width: 82vw;
    }
    @media (max-width: 1630px) {
     width: 78vw;
    }
    @media (max-width: 1341px) {
     width: 74vw;
    }
    @media (max-width: 1110px) {
     width: 70vw;
    }
    @media (max-width: 1021px) {
     width: 88vw;
    }
    @media (max-width: 521px) {
     width: 84vw;
    }
`;

export const SecondRow = styled.div`
  grid-column: span 2;
  margin-top: 20px;
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
