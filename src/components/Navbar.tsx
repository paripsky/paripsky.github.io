import {
  Button,
  chakra,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BsTerminal } from 'react-icons/bs';
import { FaBloggerB, FaMoon, FaSun } from 'react-icons/fa';
import { HiOutlinePresentationChartLine } from 'react-icons/hi';

import { useTerminal } from '../context/terminal';

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue('dark', 'light');
  const { toggleColorMode } = useColorMode();
  const { onToggle: onToggleTerminal } = useTerminal();

  function isRouteActive(route: string) {
    return router.pathname === route;
  }

  function getButtonVariant(route: string) {
    return isRouteActive(route) ? 'solid' : 'ghost';
  }

  return (
    <chakra.header pos="sticky" top="0" w="full" zIndex="1">
      <chakra.nav display="flex" p="2" backdropFilter="blur(.4em)" bg="transparent">
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" fontWeight="normal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <chakra.img src="/favicon.ico" alt="logo" width="8" />
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button
            as="a"
            variant={getButtonVariant('/blog')}
            fontWeight="normal"
            ml="auto"
            leftIcon={<Icon as={FaBloggerB} w="3" h="4" />}>
            Blog
          </Button>
        </NextLink>
        <NextLink href="/lectures" passHref>
          <Button
            as="a"
            variant={getButtonVariant('/lectures')}
            fontWeight="normal"
            ml="2"
            leftIcon={<Icon as={HiOutlinePresentationChartLine} w="5" h="14" />}>
            Lectures
          </Button>
        </NextLink>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label="Toggle terminal"
          variant="ghost"
          color="current"
          ml="2"
          onClick={onToggleTerminal}
          icon={<BsTerminal />}
        />
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          ml="2"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
        />
      </chakra.nav>
    </chakra.header>
  );
};

export default Navbar;
