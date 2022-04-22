import { Box } from '@chakra-ui/react';
import React from 'react';

export type SectionProps = {
  children: React.ReactNode;
  id: string;
};

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <Box mt="4" pt="14" id={id} h="100vh" scrollSnapAlign="start">
      {children}
    </Box>
  );
};

export default Section;
