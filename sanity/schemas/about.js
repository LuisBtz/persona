export default {
  //
  name: 'about',
  title: 'About',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  icon: () => `📎`,
  fields: [
    {
      name: 'name',
      title: 'Page Name',
      type: 'string',
      description: 'The name of this page',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      title: 'Page content',
      name: 'body',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
              ],
              lists: [], // no lists, thanks
              marks: {
                decorators: [{ title: 'Strong', value: 'strong' }],
              },
            },
            {
              type: 'image',
              title: 'Image',
              name: 'imageBody',
            },
          ],
        },
        {
          name: 'es',
          title: 'Español',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
              ],
              lists: [], // no lists, thanks
              marks: {
                decorators: [{ title: 'Strong', value: 'strong' }],
              },
            },
            {
              type: 'image',
              title: 'Image',
              name: 'imageBody',
            },
          ],
        },
      ],
    },
  ],
};
