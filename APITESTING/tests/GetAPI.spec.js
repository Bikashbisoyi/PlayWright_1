import {test, expect} from '@playwright/test'

test('Get user', async({request})=>{
    const responce = await request.get("https://petstore.swagger.io/v2/user/test12", { headers:{
        Authorization: 'Bearer'
    }
    })
    expect(responce.status()).toBe(200)
    const body = await responce.json()
    console.log(body)
    expect(body.id).toBe(12)
    expect(body).toHaveProperty('id')
    expect(body.email).toBe('test123@yomail.com')
    console.log(responce.headers()['content-type']).toBe('application/json')

})