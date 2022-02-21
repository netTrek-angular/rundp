import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiComponent } from './ui.component';

export default {
  title: 'UiComponent',
  component: UiComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<UiComponent>;

const Template: Story<UiComponent> = (args: UiComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    val:  'hello world',
    val2:  'hello world',
}