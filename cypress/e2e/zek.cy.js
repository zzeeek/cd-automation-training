describe("get users", () => {
    let token = "Bearer 25f4f0ee15da0f305918013799596b3b70b9a6cbd4833e3ea7efeef5aef8a487"

    it("get user", ()=>{
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/"
        }).then((res) => {
            cy.log("response:", res)
            expect(res.status).to.equal(200)
        })
    })

    it("post user", ()=> {

        let name = "testZek"
        let email = "testEmail@gmail.com"

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users/",
            body: {
                "name": name,
                "email": email,
                "gender": "male",
                "status": "active",  
            },
            headers: {
                Authorization: token 
            } 
        }).then((res) => {
            cy.log("response:", res)
            expect(res.status).to.equal(201)
            expect(res.body.name).to.eq(name)
            expect(res.body.email).to.eq(email)
        })
    })

})