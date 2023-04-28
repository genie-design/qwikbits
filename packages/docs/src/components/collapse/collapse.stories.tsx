import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Collapse, type CollapseProps } from "@qwikbits/headless-ui";
const meta: Meta<CollapseProps> = {
  component: Collapse,
};

type Story = StoryObj<CollapseProps>;

export default meta;

export const Primary: Story = {
  args: {},
  render: (props) => (
    <Collapse {...props}>
      <span q:slot="trigger">Open Accordion</span> <div>CONTENT</div>
    </Collapse>
  ),
};
