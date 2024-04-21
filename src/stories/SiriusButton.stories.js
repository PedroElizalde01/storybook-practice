import React from 'react';
import { SiriusButton } from '../components/base/SiriusButton/SiriusButton';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
 title: 'Sirius/Button',
 component: SiriusButton,
 parameters: {
    layout: 'centered',
 },
 tags: ['autodocs'],
 argTypes: {
    type: { control: 'select', options: ['primary', 'default', 'dashed', 'text', 'link'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
 },
 args: { onClick: fn() },
};

export const Primary = {
 args: {
    type: 'primary',
    children: 'Primary Button',
 },
};

export const Default = {
 args: {
    type: 'default',
    children: 'Default Button',
 },
};

export const Dashed = {
 args: {
    type: 'dashed',
    children: 'Dashed Button',
 },
};

export const Text = {
 args: {
    type: 'text',
    children: 'Text Button',
 },
};

export const Link = {
 args: {
    type: 'link',
    children: 'Link Button',
 },
};

export const Disabled = {
 args: {
    type: 'primary',
    children: 'Disabled Button',
    disabled: true,
 },
};

export const Loading = {
 args: {
    type: 'primary',
    children: 'Loading Button',
    loading: true,
 },
};
