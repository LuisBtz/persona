export default {
  //
  name: 'contact',
  title: 'Contact',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              type: 'block',
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
            },
          ],
        },
      ],
    },
  ],
};
