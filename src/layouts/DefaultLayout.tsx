import { Box, Fade, Flex, Icon, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Terminal from '../components/Terminal';
import { scrollToTop } from '../utils/scroll';

export type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const onContainerScroll = () => {
      const { scrollTop } = document.scrollingElement as HTMLElement;
      setShowScrollToTop(scrollTop > 100);

      if (scrollTop === 0 && typeof window !== 'undefined') {
        location.hash = '';
      }
    };

    document.addEventListener('scroll', onContainerScroll);

    return () => document.removeEventListener('scroll', onContainerScroll);
  }, [setShowScrollToTop]);

  return (
    <>
      <Head />
      <Box w="full" scrollBehavior="smooth">
        <Terminal />
        <Navbar />

        {children}
        <Flex as="footer" p="4" justifyContent="center">
          Built with Next.js + Chakra UI
        </Flex>

        <Fade in={showScrollToTop}>
          <IconButton
            pos="fixed"
            right="2em"
            bottom="1em"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            isRound
            icon={<Icon as={BsArrowUpCircle} w={8} h={8} />}
          />
        </Fade>
      </Box>
    </>
  );
};

export default DefaultLayout;
