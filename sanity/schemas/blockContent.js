export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [], // no lists, thanks
      // Marks let you mark up inline text in the block editor.
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }],
      },
    },
    {
      title: 'Inline Image',
      name: 'inlineimage',
      type: 'image',
      blockEditor: {
        icon: () => '🖼️',
      },
    },
  ],
}
