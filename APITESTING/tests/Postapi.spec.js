import {test, expect} from '@playwright/test'

test ('Create user', async({request})=>{
    const ressponse = await request.post('https://petstore.swagger.io/v2/user',{ data :{
  "id": 13378106,
  "username": "test12",
  "firstName": "test123",
  "lastName": "test1234",
  "email": "test123@yomail.com",
  "password": "test@1234",
  "phone": "385571892",
  "userStatus": 1
}
 
    })
    expect(ressponse.status()).toBe(200)
    const body = await ressponse.json()
    console.log(body)
    // console.log(code)
    console.log(body.message)
    expect(body.message).toBe('13378106')
    expect(ressponse.headers()['content-type']).toContain('application/json')

})