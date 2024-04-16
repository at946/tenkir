import '@/styles/globals.css';
import '@storybook/addon-console';
import type { Preview } from '@storybook/react';
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
      light: { ...themes.normal },
      dark: { ...themes.dark },
      darkClass: ['dark', 'bg-dark-background', 'text-dark-text'],
      lightClass: ['bg-background', 'text-text'],
      stylePreview: true,
    },
  },
};

export default preview;

export const decorators = [(Story) => <div className='p-5'>{Story()}</div>];
