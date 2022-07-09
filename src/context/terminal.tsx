import { useDisclosure } from '@chakra-ui/react';
import React, { createContext, useContext } from 'react';

type TerminalContext = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

const terminalContext = createContext<TerminalContext>({
  isOpen: false,
  onOpen: () => {
    throw new Error('onOpen must be implemented');
  },
  onClose: () => {
    throw new Error('onClose must be implemented');
  },
  onToggle: () => {
    throw new Error('onToggle must be implemented');
  },
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

  return (
    <terminalContext.Provider value={{ isOpen, onOpen, onClose, onToggle }}>
      {children}
    </terminalContext.Provider>
  );
}
