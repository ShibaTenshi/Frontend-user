export default defineNuxtRouteMiddleware(async (to,from)=>{
  const token = useCookie('token')
  const {data:tokenDatabase, error} = await useFetch("http://10.147.17.139:5041/token",{
    query: {token: token.value}
  })
  if(!token.value || error){
      return navigateTo('/login')
  }
})