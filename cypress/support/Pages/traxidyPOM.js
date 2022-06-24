class Traxidy {

    visit() {
        cy.visit("https://app-traxidy.thedemo.co/")
    }
    login(){
        cy.get('[type="text"]').type('cheemaumair912@gmail.com')
        cy.get('[type="password"]').type('Pelers12=')  
        cy.get('[type="submit"]').click()
    }
    newproject(){
      cy.get('#v-step-1').click()
    }
    newProjectinfo(){
        cy.wait(5000)
        cy.get('#project-name').type('test')
        cy.get('#project-company_name').type('testing')
        cy.get('#project-department').type('QA')
        cy.get('#project-cost_center').type('abl')
        cy.get('#project-original_budget').type('10000')
        cy.get('#project-scope_statement').type('qwerty')
        cy.get('[for="project-mode"]').type("On Hold")
        cy.get('[for="currency"]').type('USD')
        cy.get('[for="budget_status"]').type('Firm')
        cy.get('[for="work_week_type"]').type('5 Days / Week (Mon-Fri)')
        cy.get('#cp-next').click()
        cy.get('#project-sponsor_first_name').type('Ahmed')
        cy.get('#project-sponsor_last_name').type('Ahmed')
        cy.get('#project-sponsor_position').type('Abc')
        cy.get('#project-sponsor_company').type('WOW')
        cy.get('#project-sponsor_email').type('wowinfo@gmail.com')
        cy.get('#project-sponsor_phone').type('03339234567')
        cy.get('.mainbtn .v-btn__content').eq(5).click()
        cy.get('[name="date"]').eq(0).type('2022-01-12').type('{enter}')
        cy.get('[name="date"]').eq(1).type('2022-12-12').type('{enter}')
        cy.get('[name="date"]').eq(2).type('2022-12-12').type('{enter}')
        cy.get('[placeholder="Select for End Date"]').click({force:true})
        cy.get('.v-list-item__title').contains('Estimate').click()
        cy.get('#cp-saveProject').click()
    }
};
export default Traxidy