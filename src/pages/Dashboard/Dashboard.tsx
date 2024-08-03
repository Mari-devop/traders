import React from 'react';
import { useQuery } from 'react-query';
import { useLogs } from '../../context/LogsContext';
import { 
  DashboardContainer, 
  FirstRow, 
  SecondRow, 
  Left, 
  Right,
  ActivityLogContainer, 
  LogEntry, 
  LogEntryHeader, 
  LogEntryBody 
} 
from './Dashboard.styled';

const fetchLocation = async () => {
  const response = await fetch('https://northwindtraders-sparkling-dawn-9488.fly.dev/dashboard/location');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.location;
};

const Dashboard: React.FC = () => {
  const { logs } = useLogs();

  const queryCount = logs.length;
  const resultCount = logs.reduce((sum, log) => sum + log.resultsCount, 0);
  
  const selectCount = logs.filter(log => 
    log.logs.toUpperCase().includes('SELECT') && 
    !log.logs.toUpperCase().includes('WHERE') && 
    !log.logs.toUpperCase().includes('LEFT JOIN')
  ).length;
  
  const selectJoinCount = logs.filter(log => 
    log.logs.toUpperCase().includes('SELECT') && 
    log.logs.toUpperCase().includes('LEFT JOIN')
  ).length;
  
  const selectWhereCount = logs.filter(log => 
    log.logs.toUpperCase().includes('SELECT') && 
    log.logs.toUpperCase().includes('WHERE')
  ).length;

  const { data: location, error: locationError, isLoading: locationLoading } = useQuery('location', fetchLocation);

  if (locationLoading) {
    return <div>Loading...</div>;
  }

  if (locationError) {
    return <div>Error loading location</div>;
  }

  return (
    <DashboardContainer>
      <FirstRow>
        <Left>
          <h3>Worker</h3>
          <p>Colo: KBP</p>
          <p>Country: {location}</p>
        </Left>
        <Right>
          <h3>SQL Metrics</h3>
          <p>Query count: {queryCount}</p>
          <p>Result count: {resultCount}</p>
          <p>#SELECT: {selectCount}</p>
          <p>#SELECT WHERE: {selectWhereCount}</p>
          <p>#SELECT LEFT JOIN: {selectJoinCount}</p>
        </Right>
      </FirstRow>
      <SecondRow>
        <h3>Activity log</h3>
        <p>Explore the app and see metrics here</p>
        <ActivityLogContainer>
          {logs.map((log, index) => (
            <LogEntry key={index}>
              <LogEntryHeader>{log.logsData}</LogEntryHeader>
              <LogEntryBody>
                {log.logs}
              </LogEntryBody>
            </LogEntry>
          ))}
        </ActivityLogContainer>
      </SecondRow>
    </DashboardContainer>
  );
};

export default Dashboard;
