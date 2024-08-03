import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LogEntry {
  logs: string;
  logsData: string;
  resultsCount: number;
}

interface LogsContextProps {
  logs: LogEntry[];
  addLog: (log: LogEntry) => void;
}

const LogsContext = createContext<LogsContextProps | undefined>(undefined);

export const useLogs = () => {
  const context = useContext(LogsContext);
  if (!context) {
    throw new Error('useLogs must be used within a LogsProvider');
  }
  return context;
};

export const LogsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = (log: LogEntry) => {
    setLogs(prevLogs => [...prevLogs, log]);
  };

  return (
    <LogsContext.Provider value={{ logs, addLog }}>
      {children}
    </LogsContext.Provider>
  );
};
