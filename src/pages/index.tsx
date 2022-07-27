import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  Textarea,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import { BsArrowDownCircle, BsPhone, BsShield } from 'react-icons/bs';
import {
  FaCoffee,
  FaDiscord,
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

const MY_EMAIL = 'paripsky';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const subject = `${name} sent you a message from your portfolio`;
  const body = encodeURIComponent(`${message}\n\n${email}`);
  const emailHref = `mailto:${MY_EMAIL}@gmail.com?subject=${subject}&body=${body}`;
  const fullPageSize = 'calc(100vh - 56px)';
  const skillIcons = useMemo(() => skills(colorMode), [colorMode]);

  function scrollToTimeline() {
    return document.querySelector('#timeline')?.scrollIntoView();
  }

  function scrollToContact() {
    return document.querySelector('#contact')?.scrollIntoView();
  }

  return (
    <DefaultLayout>
      <Flex
        as="main"
        id="main"
        pos="relative"
        flexDir="column"
        alignItems="center"
        minH={fullPageSize}
        scrollSnapAlign="start">
        <Box mt={{ base: '2em', md: '20vh' }}>
          <Text display="inline-block" fontSize="5xl" fontWeight="bold">
            Hey!
          </Text>
          <Text
            display="inline-block"
            fontSize="5xl"
            ml="2"
            fontWeight="bold"
            color="primary.300">
            I&apos;m Yonatan
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" color="neutral.300">
            A Full Stack Web Developer
          </Text>
          <Text display="flex" justifyContent="center" fontSize="md" color="neutral.300">
            React, Node &amp; Anything JS
          </Text>
        </Box>
        <Flex gap="1em" mt="4">
          <Button
            onClick={scrollToContact}
            bg="primary.300"
            color="neutral.900"
            _hover={{ bg: 'primary.200' }}>
            Contact me
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
          <IconLink
            href="https://discord.com/users/140373456305782785"
            aria-label="navigate to Discord"
            icon={FaDiscord}
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
        <Flex flexDirection="column" justifyContent="center" mx="4">
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
                        <ListIcon
                          as={SiNodedotjs}
                          color="accent.500"
                          alignSelf="baseline"
                          mt="1"
                        />
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
          <Link href="#contact" mt="10" className="float-animation" alignSelf="center">
            <Icon as={BsArrowDownCircle} w={8} h={8} />
          </Link>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="4"
        pt="14"
        id="contact"
        h={fullPageSize}
        scrollSnapAlign="start">
        <Heading mb="4">Contact Me</Heading>
        <Flex
          as="form"
          flexDirection="column"
          bg="neutral.800"
          border="1px solid"
          borderColor="neutral.700"
          w={useBreakpointValue({ base: 'xs', md: 'md' })}
          p="4"
          borderRadius="4">
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mt="2">
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mt="2">
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <Button
            as="a"
            mt="2"
            bg="accent.600"
            disabled={!name || !email || !message}
            href={name && email && message ? emailHref : undefined}>
            Send
          </Button>
        </Flex>
      </Flex>
    </DefaultLayout>
  );
};

export default Home;
