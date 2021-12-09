

export const post = async (request) => {
    const { email } = await JSON.parse(request.body)
    console.log( 'in login js : ',{email})

    return {
        status: 200,
        body: {
            message: 'success'
        }
    }
}