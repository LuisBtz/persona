export default {
    // 
    name: 'categories',
    title: 'Categories',
    type: 'document',
    icon : () => `🖊️`,
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'The name of the category'
        }
    ]
};