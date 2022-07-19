import { Flex, Heading, Stack } from '@chakra-ui/react';
import { NextPage } from 'next';

import LinkCard from '../components/LinkCard';
import DefaultLayout from '../layouts/DefaultLayout';

const Lectures: NextPage = () => {
  return (
    <DefaultLayout>
      <Flex
        alignItems="center"
        m="4"
        flexDirection="column"
        minHeight="calc(100vh - 144px)">
        <Heading fontSize="4xl" mt={{ base: '2em', md: '20vh' }}>
          Lectures
        </Heading>
        <Stack m="8" gap="4">
          <LinkCard
            title="HTML, CSS, JS - The Basics"
            description={`The basics of HTML, CSS & JS, what are they,\nwhen to use them & more`}
            href="/lectures/html-css-js-basics.html"
            tags={['HTML', 'CSS', 'JS']}
          />
          <LinkCard
            title="Into to Vue 2"
            description={`An interactive presentation that teaches the\nbasics of Vue 2, what it's used for & more`}
            href="/lectures/intro-to-vue.html"
            tags={['Vue']}
          />
          <LinkCard
            title="Into to NodeJS"
            description={`A presentation that teaches the basics of NodeJS,\nhow to create a simple server with express & more`}
            href="https://docs.google.com/presentation/d/1d0NwWU7ZvB0TwMsalfm8mBjEdqGUHWEO7SGMG_gzMyM"
            tags={['NodeJS', 'Express', 'JS']}
          />
        </Stack>
      </Flex>
    </DefaultLayout>
  );
};

export default Lectures;
