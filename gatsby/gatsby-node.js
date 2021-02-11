import { LocalPizza } from '@material-ui/icons';
import path from 'path';

async function turnHomeIntoPages(params) {
  // 1. Get templatew
  const residentsTemplate = path.resolve(./src/templates/Residents.js);
  // 2. Query Residents
  const {data} = await graphql(`
  
  `);
  // 3. Loop
}

export async function createPages(params) {
  console.log('create pages !!');
  console.log('create pages !!');
  console.log('create pages !!');
  console.log('create pages !!');
}
