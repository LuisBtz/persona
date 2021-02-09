export default {
    // 
    name: 'home',
    title: 'Home',
    type: 'document',
    icon : () => `🏠`,
    fields: [
        {
            name: 'name',
            title: 'Page Name',
            type: 'string',
            description: 'The name of this page'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'Text in middle of the page'
        },
        {
            name: 'image',
            title: 'Background image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            title: 'Link to project',
            name: 'imageUrl',
            type: 'url'
          }
    ]
};