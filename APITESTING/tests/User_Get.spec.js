import {test, expect} from '@playwright/test'

test('Registering User', async({request})=>{
    const response = await request.get('http://127.0.0.1:8000/api/users/me', { headers:{
        Authorization : 'OAuth2'
        }
})
    const body = await response.json()
    console.log(body)
})