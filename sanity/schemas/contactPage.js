
export default {
  //
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  icon: () => `☎️`,
  fields: [
    {
      name: 'name',
      title: 'Page Name',
      type: 'localeString',
      description: 'The name of this page',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.en',
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
      name: 'body',
      title: 'Body',
      type: 'localeBody',
    },
  ],
  preview: {
    select: {
      title: 'name.es',
    }
  }
}
