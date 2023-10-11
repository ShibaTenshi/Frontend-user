export default defineEventHandler(async (event)=>{
    const body = await readBody(event)

    if(body.username !== "Computer" && body.password !== "12345"){
        throw createError({
            statusCode: 400,
            statusMessage: 'Incorrect'
        })
    }

    return "Successful"
})