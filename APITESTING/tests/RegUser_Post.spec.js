import {test, expect} from '@playwright/test'

test('Registering User', async({request})=>{
    const response = await request.post('http://127.0.0.1:8000/api/auth/register', { data: {

        "email": "bisoyibikash08@gmail.com",
        "password": "bikash@143",
        "role": "user"
        }

    })
    const body = await response.json()
    console.log(body)
})