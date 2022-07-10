export async function loadCats() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://catfact.ninja/fact')
  const data = await res.json()

  return data
}