export default {
  //
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  icon: () => `🏠`,
  fields: [
    {
      name: 'name',
      title: 'Page Name',
      type: 'localeString',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.es',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString',
      description: 'Text in middle of the page',
    },
    {
      name: 'backgroundImage',
      title: 'Background image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Link to project',
      name: 'imageUrl',
      type: 'localeLink',
    },
  ],
  preview: {
    select: {
      title: 'name.es',
      subtitle: 'releaseDate',
      media: 'backgroundImage'
    }
  }
};
