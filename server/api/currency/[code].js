export default defineEventHandler(async(event)=>{

  // The code is the parameter in the URL
  const {code} = event.context.params
  const {currencyApiKey} = useRuntimeConfig()

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyApiKey}`
  // Fetch the currency data from the API
  const {data} = await $fetch(uri)

  // Return the data
  return data
})