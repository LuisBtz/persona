export default {
  //
  name: 'residents',
  title: 'Residents',
  type: 'document',
  icon: () => `📝`,
  fields: [
    {
      name: 'name',
      title: 'Residents name',
      type: 'string',
      description: 'The name of the resident',
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
      name: 'residentImage',
      title: 'Residents image',
      type: 'image',
      description: 'Image show in the list page',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shortText',
      title: 'Short Text',
      type: 'object',
      description: 'Short text below main image',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'es',
          title: 'Español',
          type: 'string',
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'Images in the top of the page',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      title: 'Is it a current resident?',
      name: 'current',
      type: 'string',
      options: {
        list: [
          { title: 'Past', value: 'past' },
          { title: 'Current', value: 'current' },
          { title: 'Upcoming', value: 'upcoming' },
        ], // <-- predefined values
      },
    },
    {
      name: 'bodyField',
      title: 'Page body',
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
          ],
        },
      ],
    },
  ],
};
