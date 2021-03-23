import { i18n } from './documentTranslations'
import { baseLanguage } from './languages'

export default {
  //
  name: 'about',
  title: 'About',
  type: 'document',
  icon: () => `📎`,
  i18n,
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
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
