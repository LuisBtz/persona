export default {
  //
  name: 'home',
  title: 'Home',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  icon: () => `🏠`,
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
      name: 'description',
      title: 'Description',
      type: 'object',
      description: 'Text in middle of the page',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'string',
        },
        {
          title: 'Español',
          name: 'es',
          type: 'string',
        },
      ],
    },
    {
      name: 'image',
      title: 'Background image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Link to project',
      name: 'imageUrl',
      type: 'object',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'url',
        },
        {
          title: 'Español',
          name: 'es',
          type: 'url',
        },
      ],
    },
  ],
};
