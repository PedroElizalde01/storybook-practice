import React from 'react';
import { SiriusImage } from '../components/base/SiriusImage/SiriusImage';
import { fn } from '@storybook/test';

export default {
 title: 'Sirius/Image',
 component: SiriusImage,
 parameters: {
    layout: 'centered',
 },
 tags: ['autodocs'],
 argTypes: {
    src: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
 },
};

export const SmallImage = {
 args: {
    src: 'https://via.placeholder.com/150',
    width: 150,
    height: 150,
 },
};

export const MediumImage = {
 args: {
    src: 'https://via.placeholder.com/300',
    width: 300,
    height: 300,
 },
};

export const LargeImage = {
 args: {
    src: 'https://via.placeholder.com/600',
    width: 600,
    height: 600,
 },
};
