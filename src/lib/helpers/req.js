import f from '$lib/helpers/scripts'
import { DIRECTUS_URL } from './Env'

const getAllArticlesTitle = async () => {
    const res = await fetch(`${f.getMyEnvVar(DIRECTUS_URL)}/graphql`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
            query {
                Article {
                    id
                    title
                    }
                }`
        })
    })

    const { data } = await res.json()
    return data.Article
}

const test = () => {console.log('TEST')}

const reqServices = {
    test,
    getAllArticlesTitle 
}

export default reqServices;