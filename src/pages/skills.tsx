import { Box, Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';

import SkillsSphere from '../components/SkillsSphere';
import DefaultLayout from '../layouts/DefaultLayout';
import { fullPageSize } from '../utils/fullPageSize';

const Skills: NextPage = ({}) => {
  return (
    <DefaultLayout title="Skills">
      <Box h={fullPageSize} maxH={fullPageSize}>
        <SkillsSphere />
      </Box>
      <Box position="fixed" bottom="2" right="2">
        <NextLink href="/" passHref>
          <Button as="a" fontWeight="normal">
            Back
          </Button>
        </NextLink>
      </Box>
    </DefaultLayout>
  );
};

export default Skills;
