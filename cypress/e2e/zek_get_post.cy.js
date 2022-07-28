// describe("Get and Post", () => {
//     let accessToken = "Bearer 25f4f0ee15da0f305918013799596b3b70b9a6cbd4833e3ea7efeef5aef8a487";

//     it ("get users", () => {
//         cy.request({
//             method: "GET",
//             url: "https://gorest.co.in/public/v2/users/6"
//         }).then((response) => {
//             cy.log("response", response);
//             expect(response.status).to.equal(200);
//         })
//     })

//     it("Post Users", () => {
//         cy.request({
//             method: "POST",
//             url: "https://gorest.co.in/public/v2/users",
//             body: {
//                 "name": "123",
//                 "email": "123@gmail.com",
//                 "gender": "Male",
//                 "status": "active",            
//             },
//             headers: {
//                 Authorization: accessToken
//             },
//         }).then((response) => {
//             const body = response.body.id;
//             cy.log("response", response);
//             expect(response.status).to.equal(201);
//             expect(response.body.name).to.equal("123");
//         })
//     })
// }) 


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


})
