describe("Working with JSON objects", ()=>{

    it("Hands on baby", ()=>{
        const person = {
            "name" : "Fede",
            "age" : 38
        }

        const arrayOfPerson = [
            {
                "name" : "Mark",
                "age" : 29,
                "single" : true
            },
            {
                "name" : "Cassandra",
                "age" : "47",
                "single" : false
            }
        ]

        cy.log(person.age)
        cy.log(arrayOfPerson[1].single)
    })
})