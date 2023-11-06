export default defineNuxtRouteMiddleware(async (to,from)=>{
  const token = useCookie('token')
  const runtime = useRuntimeConfig()
  const {data} = await useFetch(runtime.public.API_URL + "token/"+ token.value,{
    method: 'get'
  })

  const check = String(toRaw(data.value))
  if(check.slice(0,6) === "Error:" || !token.value){
    return navigateTo("/")
  }
})