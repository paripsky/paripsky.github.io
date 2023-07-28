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
import { Tb3DCubeSphere } from 'react-icons/tb';

import { useTerminal } from '../context/terminal';

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const router = useRouter();
  const text = useColorModeValue('dark', 'light');
  const { toggleColorMode } = useColorMode();
  const { onToggle: onToggleTerminal } = useTerminal();

  function isRouteActive(route: string) {
    return router.pathname.startsWith(route);
  }

  function getButtonVariant(route: string) {
    return isRouteActive(route) ? 'solid' : 'ghost';
  }

  return (
    <chakra.header pos="sticky" top="0" w="full" zIndex="1">
      <chakra.nav display="flex" p="2" backdropFilter="blur(.4em)" bg="transparent">
        <NextLink href="/" passHref legacyBehavior>
          <Button as="a" variant="ghost" fontWeight="normal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <chakra.img src="/favicon.ico" alt="logo" width="8" />
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref legacyBehavior>
          <Button
            as="a"
            variant={getButtonVariant('/blog')}
            fontWeight="normal"
            ml="auto"
            leftIcon={<Icon as={FaBloggerB} w="3" h="4" />}>
            Blog
          </Button>
        </NextLink>
        <NextLink href="/skills" passHref legacyBehavior>
          <IconButton
            as="a"
            title="Skills"
            variant={getButtonVariant('/skills')}
            fontWeight="normal"
            aria-label="skills"
            ml="2"
            icon={<Icon as={Tb3DCubeSphere} />}></IconButton>
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
