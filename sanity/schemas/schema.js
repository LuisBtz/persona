// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import home from './home';
import about from './about';
import residents from './residents';
import contact from './contact';
import blockContent from './blockContent';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([home, about, residents, contact, blockContent]),
});
