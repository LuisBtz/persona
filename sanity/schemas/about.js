export default {
    // 
    name: 'about',
    title: 'About',
    type: 'document',
    icon : () => `📎`,
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
            title: 'Page content', 
            name: 'body',
            type: 'array', 
            of: [
                {
                    type: 'block',
                }
            ]
          }
    ]
};