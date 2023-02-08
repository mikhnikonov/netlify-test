import { createClient } from 'contentful';
const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
})

export async function getEntry() {
  const { fields } = await client.getEntry('3O122YOQ5Ftd6gMlldC4Bk')
  return fields;
}