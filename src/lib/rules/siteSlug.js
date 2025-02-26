export default async function siteSlug (node) {
  // const apiHost = 'http://localhost:1337'
  // const token = '0245442fa9acb324b6efb59cae08dfa793ccdbde5beec2665b26640614866d41b140ba604921322a382b73478d54212d1c5c234d3685a812afb036dc5aaabba6ac6943d5d127b451993763f8383b95fd3b2614d147d1d6ec268016c6745561e0e3bff34d141f713a0db73f0d864da63da4fc364e9dd2f5a4db8232ebe5cd7c9f'

  const apiHost = 'https://api.bluedot.so'
  const token = '4b3617b88e9b55f2ed7fbb2521f94789b2d89709471d4cf5945860804db1fb4b741921627a9546d8233fdc74948a997a955c0dd4a4950bbfafdb2acf4b34841cbbd4ca1ed2d9e102660f8e24fafbb1f968afc019a8657d393ba06fe8350d5ee8e4159175d58610c5e27864ea249fb3261f8580eb2e1a04ae7d0ed59a7bf0c7dd'

  const results = await fetch(`${apiHost}/api/users?filters[site_slug][$eq]=${node.value}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json())

  if (results.length > 0) {
    return false
  }
  return true
}
