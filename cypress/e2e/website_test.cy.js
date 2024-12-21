describe('website test', () => {
    beforeEach(() => {
        cy.visit('https://d1wgptoysuf2z7.cloudfront.net/')
    })

    context('navigation tests', () => {
        it('The navigation links should exist, be clickable and be visible', () => {
            cy.getByData('home').should('exist').click().then(() => {
                cy.contains('Godbless Lucky Osu').should('be.visible');
              });
            cy.getByData('about').should('exist').click().then(() => {
                cy.contains('Learn more about me').should('be.visible');
              });
            cy.getByData('resume').should('exist').click().then(() => {
                cy.contains('Check My Resume').should('be.visible');
            });
            cy.getByData('certifications').should('exist').click().then(() => {
                cy.contains('My Certifications').should('be.visible');
            });
            cy.getByData('portfolio').should('exist').click().then(() => {
                cy.contains('My Works').should('be.visible');
            });
            cy.getByData('blog').should('exist').click().then(() => {
                cy.contains('My Blogs').should('be.visible');
            });
            cy.getByData('contact').should('exist').click().then(() => {
                cy.contains('Get in touch').should('exist');
            });
            cy.getByData('mobile-nav-toggle').should('not.be.visible');
        })

        it('Desktop navigation should collapse on smaller screens', () => {
            cy.viewport(980, 760)
            cy.getByData('home').should('not.be.visible');
            cy.getByData('about').should('not.be.visible');
            cy.getByData('resume').should('not.be.visible');
            cy.getByData('certifications').should('not.be.visible');
            cy.getByData('portfolio').should('not.be.visible');
            cy.getByData('blog').should('not.be.visible');
            cy.getByData('contact').should('not.be.visible'); 
        })

        it('should display mobile navigation on smaller screens', () => {
            cy.viewport(980, 760)
            cy.getByData('mobile-nav-toggle').should('be.visible').click();
            cy.getByData('navbar-ul').should('be.visible').within(() => {
                cy.contains('Home');
                cy.contains('About');
                cy.contains('Resume');
                cy.contains('Certifications');
                cy.contains('Projects/Portfolio');
                cy.contains('Blog');
                cy.contains('Contact');
            });
        })
    })

    context('Test for social icons', () => {
        it('GitHub icon should be visible, and have the correct href', () => {
            cy.getByData('github-icon')
                .should('be.visible')
                .should('have.attr', 'href', 'https://github.com/osugodbless')
        })

        it('LinkedIn icon should be visible, and have the correct href', () => {
            cy.getByData('linkedin-icon')
                .should('be.visible')
                .should('have.attr', 'href', 'https://linkedin.com/in/osugodbless/')
        })

        it('Dev.to icon should be visible, and have the correct href', () => {
            cy.getByData('devto-icon')
                .should('be.visible')
                .should('have.attr', 'href', 'https://dev.to/osugodbless')
        })

        it('Twitter (X) icon should be visible, and have the correct href', () => {
            cy.getByData('x-icon')
                .should('be.visible')
                .should('have.attr', 'href', 'https://x.com/osugodbless')
        })
    })

    context('Certifications links test', () => {
        it('navigate to the certifications section and make sure all certifications exist with their correct validation links', () => {
            cy.getByData('certifications').should('exist').click().then(() => {
                cy.getByData('certification-1').should('be.visible').should('have.attr', 'href', 'https://www.credly.com/badges/687dd48d-eeb7-4cf6-a468-6c572dc8776e/public_url').click();
                cy.getByData('certification-2').should('be.visible').should('have.attr', 'href', 'https://www.credly.com/badges/b6ab4882-fa67-40fb-8a8d-62f804b7c27b/public_url').click();
                cy.getByData('certification-3').should('be.visible').should('have.attr', 'href', 'https://drive.google.com/file/d/1C3TdJVuCT4DKgkB_sULk-nAnJGsxS34L/view?usp=sharing').click();
                cy.getByData('certification-4').should('be.visible').should('have.attr', 'href', 'https://www.credly.com/badges/a35a3466-541d-4494-bb77-f08e56d771da/public_url').click();
            });
                
        })  
    })

    context('Portfolio links test', () => {
        it('navigate to the projects/portfolio section and make sure project-1 exist and the link to view its details is clickable', () => {
            cy.getByData('portfolio').should('exist').click().then(() => {
                cy.getByData('project-1').should('exist').should('have.attr', 'href', 'portfolio-details/portfolio-details-1.html').click().then(() => {
                    cy.contains('Cloud Resume Challenge Project').should('exist');
                });
            });
                
        })
        
        it('navigate to the projects/portfolio section and make sure project-2 exist and the link to view its details is clickable', () => {
            cy.getByData('portfolio').should('exist').click().then(() => {
                cy.getByData('project-2').should('exist').should('have.attr', 'href', 'portfolio-details/portfolio-details-2.html').click().then(() => {
                    cy.contains('TripPlanner App Design').should('exist');
                });
            });
                
        })  
    })

    context('Blog links test', () => {
        it('navigate to the blog section and make sure all blog posts exist with their correct links', () => {
            cy.getByData('blog').should('exist').click().then(() => {
                cy.getByData('blog-1').should('be.visible').should('have.attr', 'href', 'https://dev.to/osugodbless/conquering-the-cloud-resume-challenge-my-journey-1lbe').click({multiple: true});
                cy.getByData('blog-2').should('be.visible').should('have.attr', 'href', 'https://dev.to/osugodbless/deploy-a-static-website-using-amazon-s3-detailed-3hok').click({multiple: true});
            });
                
        })  
    })


})