import path from 'path';

async function turnResidentIntoPages({ graphql, actions }) {
  // 1. Get templatew
  const residentTemplate = path.resolve('./src/templates/PastResident.js');
  // 2. Query Residents
  const { data } = await graphql(`
    query {
      residents: allSanityResidents {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);
  // 3. Loop
  data.residents.nodes.forEach((resident) => {
    actions.createPage({
      // URL
      path: `pastResidents/${resident.slug.current}`,
      component: residentTemplate,
      context: {
        slug: resident.slug.current,
        current: true,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dunamically
  // 1. Residents Current
  await turnResidentIntoPages(params);
  // 2. Residents Past
}
