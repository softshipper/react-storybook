
import { Story, Meta } from '@storybook/react';
import Title, {TitleProps} from "./Title";

export default {
    title: "NewIdeaCard/Title",
    component: Title
} as Meta;


const handleOnChange = (text: string) => console.log(text);

const Template: Story<TitleProps> = (args) => <Title {...args} />;
export const Demo = Template.bind({});
Demo.args = { handleOnChange: handleOnChange }

