import React from 'react';
import {
  FaInstagram,
  FaYoutubeSquare,
  FaPinterestSquare,
} from 'react-icons/fa';

export default [
  {
    id: Math.random(),
    url: 'https://instagram.com/hochwerben',
    image: <FaInstagram className="youtube-icon icon" />,
  },
  {
    id: Math.random(),
    url: 'https://pinterest.de',
    image: <FaPinterestSquare className="youtube-icon" />,
  },
  {
    id: Math.random(),
    url: 'https://www.youtube.com/channel/UCBFCE4OPehK7whABCuWjw4Q',
    image: <FaYoutubeSquare className="youtube-icon" />,
  },
];
