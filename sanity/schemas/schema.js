// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

// GraphQl implementation


import localeString from './locale/localeString';
import localeLink from './locale/localeLink';
import localeBody from './locale/localeBody';
import inlineimage from './imageBlock';

import homePage from './homePage';
import aboutPage from './aboutPage';
import residents from './residents';
import contactPage from './contactPage';
import blockContent from './blockContent';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([localeString, localeLink, localeBody, inlineimage, homePage, aboutPage, residents, contactPage, blockContent]),
});
