import {
  Flex,
  Input,
  Slide,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useOutsideClick,
} from '@chakra-ui/react';
import React, { FormEvent, useEffect, useRef, useState } from 'react';

import { useTerminal } from '../context/terminal';
import handleCommand from '../utils/commands';

export type TerminalProps = {
  children?: React.ReactNode;
};

function Terminal({}: TerminalProps) {
  const bg = useColorModeValue('white', 'black');
  const { isOpen, onClose, onOpen } = useTerminal();
  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
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

  useOutsideClick({
    ref,
    handler: onClose,
  });

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Backquote' && !isOpen) {
        onOpen();
        e.preventDefault();
        return;
      }

      if (['Backquote', 'Escape'].includes(e.code)) {
        onClose();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', onKeyPress);

    return () => window.removeEventListener('keydown', onKeyPress);
  }, [onOpen, onClose, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.scrollIntoView();
  }, [commandHistory]);

  function onCommand(command: string) {
    return handleCommand(command, {
      onClose,
      onClear: () => {
        console.log('clear');
        setCommandHistory([]);
      },
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const input = target[0] as HTMLInputElement;
    const command = input.value;
    const result = onCommand(command);

    if (result) {
      setCommandHistory([
        ...commandHistory,
        {
          command,
          result,
        },
      ]);
    }

    input.value = '';
  }

  return (
    <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        fontFamily="'Press Start 2P'"
        fontSize={useBreakpointValue({ base: 'md', md: 'xs' })}
        p="4"
        ref={ref}
        maxH="md"
        overflow="auto"
        bg={bg}>
        <Flex flexDirection="column" bg={bg}>
          {commandHistory.map(({ command, result }, index) => (
            <Flex flexDirection="column" key={index}>
              <Text>&gt;{command}</Text>
              <Text whiteSpace="pre">{result}</Text>
            </Flex>
          ))}
        </Flex>
        <Flex as="form" onSubmit={onSubmit} w="full">
          &gt;
          <Input ref={inputRef} variant="unstyled" fontSize="inherit" />
        </Flex>
      </Flex>
    </Slide>
  );
}

export default Terminal;
