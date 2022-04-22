import { Box, chakra, Fade, Icon, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

import Head from '../components/Head';
import MouseTrail from '../components/MouseTrail';
import Navbar from '../components/Navbar';
import useLocalStorageState from '../hooks/useLocalStorageState';

export type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [mouseTrailEnabled, setMouseTrailEnabled] = useLocalStorageState(
    'mouseTrailEnabled',
    true,
  );
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const onContainerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.currentTarget;
    setShowScrollToTop(scrollTop > 100);

    if (scrollTop === 0 && typeof window !== 'undefined') {
      location.hash = '';
    }
  };

  return (
    <>
      <Head />
      <MouseTrail isEnabled={mouseTrailEnabled} />
      <Box
        height="100vh"
        w="full"
        scrollSnapType={{ base: 'y mandatory', sm: 'none' }}
        scrollBehavior="smooth"
        overflowY="auto"
        onScroll={onContainerScroll}>
        <Navbar
          mouseTrailEnabled={mouseTrailEnabled}
          setMouseTrailEnabled={setMouseTrailEnabled}
        />

        {children}
        <chakra.footer scrollSnapAlign="start" h="5em">
          built with Next.js + Chakra UI
        </chakra.footer>

        <Fade in={showScrollToTop}>
          <Link href="#main" pos="fixed" right="2em" bottom="1em">
            <Icon as={BsArrowUpCircle} w={8} h={8} />
          </Link>
        </Fade>
      </Box>
    </>
  );
};

export default DefaultLayout;
