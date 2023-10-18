function openMenu(menu){
    cy.get("a[title='"+menu+"']").find("nb-icon[class='expand-state']").invoke("attr","ng-reflect-icon").then(attr =>{
        if(attr != "chevron-down-outline")
            cy.contains(menu).click();
    })
}

export class NavigationPage{

    goToformLayouts(){
        openMenu("Forms")
        cy.contains("Form Layouts").click();
    }

    goToToastr(){
        openMenu("Modal & Overlays")
        cy.contains("Toastr").click();
    }

    goToTooltip(){
        openMenu("Modal & Overlays")
        cy.contains("Tooltip").click()
    }

    goToSmartTable(){
        openMenu("Tables & Data")
        cy.contains("Smart Table").click();
    }

    goToDatePicker(){
        openMenu("Forms")
        cy.contains("Datepicker").click();
    }
}

export const navigationBar = new NavigationPage()