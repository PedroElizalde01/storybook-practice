import React from 'react';
import { SiriusText } from '../components/base/SiriusText/SiriusText';
import { fn } from '@storybook/test';

export default {
 title: 'Sirius/Text',
 component: SiriusText,
 parameters: {
    layout: 'centered',
 },
 tags: ['autodocs'],
 argTypes: {
    type: { control: 'select', options: ['link', 'text'] },
    variant: { control: 'select', options: ['default', 'secondary', 'warning', 'danger'] },
    href: { control: 'text' },
    target: { control: 'text' },
 },
};

export const DefaultText = {
 args: {
    children: 'Default Text',
    type: 'text',
    variant: 'default',
 },
};

export const SecondaryText = {
 args: {
    children: 'Secondary Text',
    type: 'text',
    variant: 'secondary',
 },
};

export const WarningText = {
 args: {
    children: 'Warning Text',
    type: 'text',
    variant: 'warning',
 },
};

export const DangerText = {
 args: {
    children: 'Danger Text',
    type: 'text',
    variant: 'danger',
 },
};

export const LinkText = {
 args: {
    children: 'Link Text',
    type: 'link',
    href: 'https://sirius.com.ar/',
    target: '_blank',
 },
};
