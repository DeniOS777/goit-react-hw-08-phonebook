import React from 'react';
import { Pending } from './TextLoader.styled';

export const TextLoader = ({ text }) => {
  return <Pending>{text}</Pending>;
};
