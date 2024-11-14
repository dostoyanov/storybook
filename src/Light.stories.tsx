import { Meta, StoryObj } from '@storybook/react'

import Light from './components/Light'

const meta:Meta<typeof Light> = {
  component: Light,
  title: 'Light',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select'
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>

export const Red: Story = {
  args: {
    variant: 'red',
    size: 60
  }
}

export const Green: Story = {
  args: {
    variant: 'green',
    size: 60
  }
}

export const Yellow: Story = {
  args: {
    variant: 'yellow',
    size: 60
  }
}

export const Group: Story = {
  args: {
    size: 60
  },
  render: args => <div style={{padding: 8, borderRadius: 4, border: '1px solid #666', display: 'inline-grid', gap: 8, background: '#999'}}>
    <Light variant='red' size={args.size} />
    <Light variant='yellow' size={args.size} />
    <Light variant='green' size={args.size} />
  </div>
}
