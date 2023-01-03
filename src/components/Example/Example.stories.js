import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import MyComponent  from "./Example";

export default {
  title: "Example/MyComponent",
  component: MyComponent,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

const Template = (args) => <MyComponent {...args} />;

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const Tablet = Template.bind({});

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
