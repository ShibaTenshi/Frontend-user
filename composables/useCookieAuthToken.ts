export const useGetCookieAuthToken = async () => {
    const token = useCookie("token");

    const {data} = await useFetch("local")
}