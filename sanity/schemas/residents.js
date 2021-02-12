export default {
    // 
    name: 'residents',
    title: 'Residents',
    type: 'document',
    icon : () => `📝`,
    fields: [
        {
            name: 'name',
            title: 'Residents name',
            type: 'string',
            description: 'The name of the resident'
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
            name: 'images',
            title: 'Images',
            type: 'array',
            description: 'Images in the top of the page',
            of: [{
                type: 'image'
            }]
        },
        {
            name: 'categories',
            title: 'Category',
            type: 'array',
            of: [
                {
                    type: 'reference', 
                    to: {type: 'categories'}
                }
            ],
        },
        {
            name: 'body',
            title: 'Page body',
            type: 'array',
            of: [{
                type: 'block'
            }]
        }
    ]
};

