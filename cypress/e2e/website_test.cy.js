describe('website test', () => {
    beforeEach(() => {
        cy.visit('https://osu-resume.com.ng')
    })

    context('navigation section', () => {
        it('The navigation links should exist, be clickable and be visible', () => {
            cy.getByData('home').should('exist').click().then(() => {
                cy.contains('Godbless Lucky Osu...').should('be.visible');
              });
            cy.getByData('about').should('exist').click().then(() => {
                cy.contains('About Me').should('be.visible');
              });
            cy.getByData('skills').should('exist').click().then(() => {
                cy.contains('My Skillset').should('be.visible');
            });
            cy.getByData('projects').should('exist').click().then(() => {
                cy.contains('Projects').should('be.visible');
            });
            cy.getByData('education').should('exist').click().then(() => {
                cy.contains('Education & Certifications').should('be.visible');
            });
            cy.getByData('contact').should('exist').click().then(() => {
                cy.contains('Get in touch').should('be.visible');
            });
        })
    })

    context('Blog link', () => {
        it('The BLOG navbar should be visible, have the current href and be clickeable', () => {
            cy.getByData('blog-link')
                .should('be.visible')
                .should('have.attr', 'href', 'https://dev.to/osugodbless')
                .click()
        })
    })

    context('Social icons', () => {
        it('LinkedIn icon in the home section should be visible, have the current href and be clickeable', () => {
            cy.getByData('home-section-linkedin-icon')
                .should('be.visible')
                .should('have.attr', 'href', 'https://linkedin.com/in/osugodbless/')
                .click()
        })

        it('GitHub icon in the home section should be visible, have the current href and be clickeable', () => {
            cy.getByData('home-section-github-icon')
                .should('be.visible')
                .should('have.attr', 'href', 'https://github.com/osugodbless')
                .click()
        })

        it('LinkedIn icon in the footer section should be visible, have the current href and be clickeable', () => {
            cy.getByData('footer-section-linkedin-icon')
                .should('be.visible')
                .should('have.attr', 'href', 'https://linkedin.com/in/osugodbless/')
                .click()
        })

        it('GitHub icon in the footer section should be visible, have the current href and be clickeable', () => {
            cy.getByData('footer-section-github-icon')
                .should('be.visible')
                .should('have.attr', 'href', 'https://github.com/osugodbless')
                .click()
        })
    })

    context('Resume button', () => {
        it('The resume link should have the current href and be clickeable', () => {
            cy.getByData('resume-link')
                .should('have.attr', 'href', 'https://drive.google.com/file/d/1CqwFwkbd555jWt4MeoLAL58-9ijfEEu5/view?usp=sharing')
        })

        it('The resume button should be visible, contain the correct title, and be clickeable', () => {
            cy.getByData('resume-button')
                .should('be.visible').contains('View Resume')
                .click()
        })
    })

    context('Projects', () => {
        it('Cloud resume challenge project should be visible, have the correct href and be clickeable', () => {
            cy.getByData('project-one')
                .should('be.visible')
                .should('have.attr', 'href', 'https://github.com/osugodbless/cloud-resume-challenge.git')
                .click()
        })

        it('TripPlanner App project should be visible, have the correct href and be clickeable', () => {
            cy.getByData('project-two')
                .should('be.visible')
                .should('have.attr', 'href', 'https://youtu.be/E6wFN9t78Yg')
                .click()
        })
    })

    context('Certifications', () => {
        it('AWS SAA certification be visible, have the correct href and be clickeable', () => {
            cy.getByData('cloud-saa')
                .should('be.visible')
                .should('have.attr', 'href', 'https://aws.amazon.com/verification')
                .click()
        })

        it('AWS practitioner certification should be visible, have the correct href and be clickeable', () => {
            cy.getByData('cloud-practitioner')
                .should('be.visible')
                .should('have.attr', 'href', 'https://aws.amazon.com/verification')
                .click()
        })
    })

})