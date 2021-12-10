// import { Directus } from '@directus/sdk';

// const directus = new Directus('http://localhost:8055/');

import * as cookie from 'cookie'

export const handle = async ({request, resolve}) => {
    const cookies = cookie.parse(request.headers.cookie || "")
    console.log('request handle', request)
    request.locals.directus = {directusAuth: false}
    if (cookies.directus_refresh_token) {
        // console.log('Hooks directus ok')
        request.locals.directus.directusAuth = true
    }

    // if (!cookies.directus_refresh_token) {
    //     console.log('Hooks directus no')
    // }

    const response = await resolve(request)

    return {
        ...response
    }
}
export const getSession = (request) => {
    const directus = request.locals.directus
    return {
        directus
    }
}