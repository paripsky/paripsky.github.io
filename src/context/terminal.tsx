import { useDisclosure } from '@chakra-ui/react';
import React, { createContext, useContext, useState } from 'react';

import handleCommand from '../utils/commands';

type TerminalContext = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  commandHistory: {
    command: string;
    result: string;
  }[];
  setCommandHistory: React.Dispatch<
    React.SetStateAction<
      {
        command: string;
        result: string;
      }[]
    >
  >;
  onCommand(command: string): string;
  showMatrix: boolean;
  setShowMatrix: React.Dispatch<React.SetStateAction<boolean>>;
};

const unimplemented = () => {
  throw new Error('function must be implemented');
};

const terminalContext = createContext<TerminalContext>({
  isOpen: false,
  onOpen: unimplemented,
  onClose: unimplemented,
  onToggle: unimplemented,
  commandHistory: [],
  setCommandHistory: unimplemented,
  onCommand: unimplemented,
  showMatrix: false,
  setShowMatrix: unimplemented,
});

export const useTerminal = () => {
  const context = useContext(terminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }

  return context;
};

type TerminalProviderProps = {
  children?: React.ReactNode;
};

export function TerminalProvider({ children }: TerminalProviderProps) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [commandHistory, setCommandHistory] = useState<
    {
      command: string;
      result: string;
    }[]
  >(() => [
    {
      command: 'help',
      result: onCommand('help'),
    },
  ]);
  const [showMatrix, setShowMatrix] = useState(false);

  function onCommand(command: string) {
    return handleCommand(command, {
      onClose,
      onClear: () => {
        console.log('clear');
        setCommandHistory([]);
      },
      toggleMatrix: () => setShowMatrix(!showMatrix),
    });
  }

  return (
    <terminalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        onToggle,
        commandHistory,
        setCommandHistory,
        onCommand,
        showMatrix,
        setShowMatrix,
      }}>
      {children}
    </terminalContext.Provider>
  );
}
