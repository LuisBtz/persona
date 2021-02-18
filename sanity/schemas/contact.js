export default {
  //
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: () => `☎️`,
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
      name: 'iframe',
      title: 'Map code',
      type: 'string',
      description: 'The code of the map',
    },
    {
      title: 'Contact info',
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
