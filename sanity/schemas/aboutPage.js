
export default {
  //
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  icon: () => `📎`,
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
      },
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
