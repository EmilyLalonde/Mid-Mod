export const getData = () => {
  return fetch('http://localhost:3001/api/v1/purchases')
  .then(response => {
    if(!response.ok) {
      throw Error('Error Fetching Purchases')
    }
    return response.json()
 }).catch(error => {
   throw Error(error.message)
 })
}