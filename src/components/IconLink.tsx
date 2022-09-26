import { Icon, IconButton, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

export type IconLinkProps = {
  href: string;
  icon: IconType;
  hoverColor?: string;
};

const IconLink: React.FC<IconLinkProps> = ({ href, icon, hoverColor, ...props }) => {
  return (
    <IconButton
      as="a"
      href={href}
      target="_blank"
      size="md"
      fontSize="2xl"
      variant="ghost"
      ml="2"
      aria-label={href}
      color={{ base: hoverColor, md: 'current' }}
      _hover={{
        color: hoverColor,
        bg: useColorModeValue('gray.200', 'whiteAlpha.200'),
      }}
      icon={<Icon as={icon} />}
      {...props}
    />
  );
};

export default IconLink;
