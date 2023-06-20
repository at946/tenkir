import type { Preview } from '@storybook/react';
import '@storybook/addon-console';
import '@/styles/globals.css';
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      light: { ...themes.dark },
      dark: { ...themes.dark },
      darkClass: ['dark'],
      stylePreview: true,
    },
  },
};

export default preview;

export const decorators = [
  (renderStory) => <div className='dark:bg-zinc-800'>{renderStory()}</div>,
];
