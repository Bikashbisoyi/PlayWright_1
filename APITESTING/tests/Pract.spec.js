import {test, expect} from '@playwright/test'

test('Practice of API', async({request})=>{
    const Response = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data:{
            title: "Playwright",
            body: "Playwright is a Node.js library to automate Chromium, FIrefox and webkit with a single API.",
            userId: 1
        },
    })
    await expect(Response.status()).toBe(201)
    console.log("Response status :", await Response.status())
    console.log("Response body:", await Response.json())
    console.log("Response headers:", await Response.headers())
})

    test("View profile", async({request})=> {
        const Response = await request.get('https://jsonplaceholder.typicode.com/posts',)
        console.log("Status code:", await Response.status())
        const body = await Response.json()
        console.log(body)
        console.log("Response body:", await Response.json())
})