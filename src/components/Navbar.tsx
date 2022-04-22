import {
  Button,
  chakra,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaBloggerB, FaMoon, FaSun } from 'react-icons/fa';
import { GiTrail } from 'react-icons/gi';
import { HiDocumentDownload } from 'react-icons/hi';
import { IoLogoGameControllerB } from 'react-icons/io';

type NavbarProps = {
  mouseTrailEnabled: boolean;
  setMouseTrailEnabled: (enabled: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ mouseTrailEnabled, setMouseTrailEnabled }) => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue('dark', 'light');
  const { toggleColorMode } = useColorMode();

  return (
    <chakra.header pos={{ base: 'absolute', md: 'sticky' }} top="0" w="full" zIndex="1">
      <chakra.nav d="flex" p="2" backdropFilter="blur(.4em)" bg="transparent">
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" fontWeight="normal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <chakra.img src="/favicon.ico" alt="logo" width="8" />
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button
            as="a"
            variant="ghost"
            ml="auto"
            fontWeight="normal"
            leftIcon={<Icon as={HiDocumentDownload} w="4" h="6" />}>
            CV
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button
            as="a"
            variant="ghost"
            fontWeight="normal"
            ml="2"
            leftIcon={<Icon as={FaBloggerB} w="3" h="4" />}>
            Blog
          </Button>
        </NextLink>
        <NextLink href="/game" passHref>
          <Button
            as="a"
            variant="ghost"
            fontWeight="normal"
            ml="2"
            leftIcon={<Icon as={IoLogoGameControllerB} w="5" h="14" />}>
            Game
          </Button>
        </NextLink>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label="toggle mouse trail"
          variant="ghost"
          color="current"
          ml="2"
          textColor={mouseTrailEnabled ? 'current' : 'gray.500'}
          onClick={() => setMouseTrailEnabled(!mouseTrailEnabled)}
          icon={<GiTrail />}
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
