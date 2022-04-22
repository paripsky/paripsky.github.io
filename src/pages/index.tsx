import {
  Box,
  Icon,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useMemo } from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa';

import IconLink from '../components/IconLink';
import RainbowText from '../components/RainbowText';
import skills from '../constants/skills';
import DefaultLayout from '../layouts/DefaultLayout';

const Home: NextPage = () => {
  const topTextGradient = useColorModeValue(
    'linear(to-l, blue.200, teal.400)',
    'linear(to-l, pink.200, purple.400)',
  );
  const bottomTextGradient = useColorModeValue(
    'linear(to-r, blue.500, purple.700)',
    'linear(to-r, blue.100, teal.400)',
  );
  const { colorMode } = useColorMode();
  const fullPageSize = useBreakpointValue({ base: '100vh', md: 'calc(100vh - 56px)' });
  const skillIcons = useMemo(() => skills(colorMode), [colorMode]);

  return (
    <DefaultLayout>
      <Box
        id="main"
        pos="relative"
        d="flex"
        flexDir="column"
        alignItems="center"
        h={fullPageSize}
        scrollSnapAlign="start">
        <Text
          mt={{ base: '10vh', md: '20vh' }}
          d="inline-block"
          bgGradient={topTextGradient}
          bgClip="text"
          textAlign="center"
          fontSize="6xl"
          fontWeight="bold">
          Hey, I&apos;m Yonatan
        </Text>
        <Box w="full" maxW="400px">
          <RainbowText text="a Full Stack" viewBox="0 0 400 120"></RainbowText>
        </Box>
        <Text
          my="-10"
          d="inline-block"
          bgGradient={bottomTextGradient}
          bgClip="text"
          fontSize="2xl"
          fontWeight="bold">
          Web developer
        </Text>
        <Box mt="14">
          <IconLink
            href="https://medium.com/@paripsky"
            aria-label="navigate to Medium"
            icon={FaMediumM}
          />
          <IconLink
            href="https://www.linkedin.com/in/paripsky"
            aria-label="navigate to Linkedin"
            icon={FaLinkedinIn}
          />
          <IconLink
            href="https://github.com/paripsky"
            aria-label="navigate to Github"
            icon={FaGithub}
          />
          <IconLink
            href="https://stackoverflow.com/users/4109475/paripsky"
            aria-label="navigate to Stackoverflow"
            icon={FaStackOverflow}
          />
          <IconLink
            href="https://twitter.com/pepechuuu"
            aria-label="navigate to Twitter"
            icon={FaTwitter}
          />
        </Box>
        <Box d="flex" flexDir="column" alignItems="center" mt="2">
          <Text>Skills</Text>
          <SimpleGrid columns={{ base: 6, md: 14 }} mt="2">
            {skillIcons.map((skill) => (
              <IconLink
                key={skill.href}
                hoverColor={skill.hoverColor}
                icon={skill.icon}
                aria-label={skill['aria-label']}
                href={skill.href}
              />
            ))}
          </SimpleGrid>
        </Box>
        <Link href="#timeline" bottom="2" pos="absolute" className="float-animation">
          <Icon as={BsArrowDownCircle} w={8} h={8} />
        </Link>
      </Box>
      <Box mt="4" pt="14" id="timeline" h={fullPageSize} scrollSnapAlign="start">
        skills react icon, vue icon, redux, material ui, ant design, chakra ui, etc, java,
        php, mysql
      </Box>
      <Box mt="4" pt="14" id="timeline" h={fullPageSize} scrollSnapAlign="start">
        Timeline
      </Box>
      <Box mt="4" pt="14" id="timeline" h={fullPageSize} scrollSnapAlign="start">
        Contact me
      </Box>
    </DefaultLayout>
  );
};

export default Home;
