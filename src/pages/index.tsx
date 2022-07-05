import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useMemo } from 'react';
import { BsArrowDownCircle, BsPhone, BsShield } from 'react-icons/bs';
import {
  FaCoffee,
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa';
import { SiNodedotjs, SiVuedotjs } from 'react-icons/si';

import IconLink from '../components/IconLink';
import Timeline from '../components/Timeline';
import skills from '../constants/skills';
import DefaultLayout from '../layouts/DefaultLayout';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const fullPageSize = 'calc(100vh - 56px)';
  const skillIcons = useMemo(() => skills(colorMode), [colorMode]);

  function scrollToTimeline() {
    return document.querySelector('#timeline')?.scrollIntoView();
  }

  return (
    <DefaultLayout>
      <Flex
        id="main"
        pos="relative"
        flexDir="column"
        alignItems="center"
        minH={fullPageSize}
        scrollSnapAlign="start">
        <Box mt={{ base: '2em', md: '20vh' }}>
          <Text display="inline-block" fontSize="6xl" fontWeight="bold">
            Hey!
          </Text>
          <Text
            display="inline-block"
            fontSize="6xl"
            ml="4"
            fontWeight="bold"
            color="primary.300">
            I&apos;m Yonatan
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" color="neutral.300">
            A Full Stack Web Developer
          </Text>
        </Box>
        <Flex gap="1em" mt="4">
          <Button bg="primary.300" color="neutral.900" _hover={{ bg: 'primary.200' }}>
            Download CV
          </Button>
          <Button onClick={scrollToTimeline}>Learn more</Button>
        </Flex>
        <Box mt="8">
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
        <Box display="flex" flexDir="column" alignItems="center" mt="2">
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
        <Link href="#timeline" mt="10" className="float-animation">
          <Icon as={BsArrowDownCircle} w={8} h={8} />
        </Link>
      </Flex>
      <Flex
        justifyContent="center"
        mt="4"
        pt="14"
        id="timeline"
        h={fullPageSize}
        scrollSnapAlign="start">
        <Flex flexDirection="column" justifyContent="center">
          <Text fontSize="xl" color="neutral.300" mb="4">
            Timeline
          </Text>
          <Timeline
            entries={[
              {
                date: '2020 - Present',
                title: (
                  <>
                    Full Stack Developer @{' '}
                    <Link href="https://www.is.com/" isExternal>
                      ironSource
                    </Link>
                  </>
                ),
                description: (
                  <>
                    <List mt="2" spacing="1">
                      <ListItem display="flex" alignItems="center">
                        <ListIcon as={SiNodedotjs} color="accent.500" />
                        Built NodeJS services with Typescript, Express, TypeORM
                      </ListItem>
                      <ListItem display="flex" alignItems="center">
                        <ListIcon
                          as={SiVuedotjs}
                          color="accent.500"
                          alignSelf="baseline"
                          mt="1"
                        />
                        Created UIs with VueJS, Vuex, Vue Router, Vite, Sass
                        <br />
                        Worked on a migration of AngularJS pages to Vue
                      </ListItem>
                    </List>
                  </>
                ),
                icon: <Icon as={BsPhone} />,
              },
              {
                date: '2020',
                title: (
                  <>
                    Full Stack Developer @{' '}
                    <Link href="https://www.drinkripples.com/" isExternal>
                      Ripples
                    </Link>
                  </>
                ),
                description: (
                  <>
                    Built a Web Content Management System & Web apps with React,
                    <br />
                    TypeScript, NodeJS, Express, MongoDB, and AWS
                  </>
                ),
                icon: <Icon as={FaCoffee} />,
              },
              {
                date: '2015 - 2020',
                title: 'Full Stack Developer @ IDF Matzpen',
                description:
                  'Built a Complex Map Component with React, Redux, Material-UI and ArcGIS',
                icon: <Icon as={BsShield} />,
              },
            ]}
          />
        </Flex>
      </Flex>
      <Box mt="4" pt="14" id="timeline" h={fullPageSize} scrollSnapAlign="start">
        Contact me
      </Box>
    </DefaultLayout>
  );
};

export default Home;
