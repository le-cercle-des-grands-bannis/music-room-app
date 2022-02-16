import React from 'react';
import { View } from 'react-native';

import DiscordIcon from './DiscordIcon';
import FacebookIcon from './FacebookIcon';
import FtIcon from './FtIcon';
import GitHubIcon from './GitHubIcon';
import GoogleIcon from './GoogleIcon';

const SocialAuth: React.FC = props => {
  return (
    <>
      <FacebookIcon />
      <DiscordIcon />
      <FtIcon />
      <GitHubIcon />
      <GoogleIcon />
    </>
  );
};

export default SocialAuth;
