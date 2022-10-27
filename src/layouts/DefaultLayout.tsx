import { Box, Fade, Flex, Icon, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

import Head from '../components/Head';
import Matrix from '../components/Matrix';
import Navbar from '../components/Navbar';
import Terminal from '../components/Terminal';
import { useTerminal } from '../context/terminal';
import { scrollToTop } from '../utils/scroll';

export type DefaultLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showFooter?: boolean;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  title,
  description,
  showFooter = true,
}) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { showMatrix } = useTerminal();

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
      <Head title={title} description={description} />
      <Box w="full" scrollBehavior="smooth">
        <Terminal />
        {showMatrix && <Matrix position="fixed" zIndex="-1" />}
        <Navbar />

        {children}
        {showFooter && (
          <Flex as="footer" p="4" justifyContent="center">
            Built with Next.js + Chakra UI
          </Flex>
        )}

        <Fade in={showScrollToTop} unmountOnExit>
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
