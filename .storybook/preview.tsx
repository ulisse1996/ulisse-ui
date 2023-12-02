import "./tailwind.css";

import type { Preview } from "@storybook/react";
import { I18nProvider } from "@react-aria/i18n";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const viewports = {
  ...MINIMAL_VIEWPORTS,
  medium: {
    name: "Medium",
    styles: {
      width: "1280px",
      height: "720px",
    },
  },
  large: {
    name: "Large",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <I18nProvider>
        <Story />
      </I18nProvider>
    ),
  ],
};

export default preview;
