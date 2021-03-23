import { i18n } from './documentTranslations'

export default {
  //
  name: 'residents',
  title: 'Residents',
  type: 'document',
  icon: () => `📝`,
  i18n,
  fields: [
    {
      name: 'name',
      title: 'Residents name',
      type: 'string',
      description: 'The name of the resident',
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
      name: 'residentImage',
      title: 'Residents image',
      type: 'image',
      description: 'Image show in the list page',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shortText',
      title: 'Short Text',
      type: 'string',
      description: 'Short text below main image',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'Images in the top of the page',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      title: 'Is it a current resident?',
      name: 'current',
      type: 'string',
      options: {
        list: [
          { title: 'Past', value: 'past' },
          { title: 'Current', value: 'current' },
          { title: 'Upcoming', value: 'upcoming' },
        ], // <-- predefined values
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
