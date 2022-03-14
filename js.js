const emailCollector = document.getElementById("emailCollection")

console.log(emailCollector)

emailCollector.addEventListener("submit", event => {
    event.preventDefault()
    
    let ourFormData = new FormData(event.target)


    let userFirstName = ourFormData.get("firstName")
    let userLastName = ourFormData.get("lastName")
    let userEmailAddress = ourFormData.get("emailAddress")
    let userSocialMediaHandles = ourFormData.get("socialMediaHandles")
    let userHear = ourFormData.get("howDidYouHear")
    let userGoals = ourFormData.get("yourFitnessGoals")
    let userCommitted = ourFormData.get("areYouCommitted")
    let userConcerns = ourFormData.get("additionalConcerns")
    
    console.log(userFirstName)
    console.log(userLastName)
    console.log(userEmailAddress)
    console.log(userSocialMediaHandles)
    console.log(userHear)
    console.log(userGoals)
    console.log(userCommitted)
    console.log(userConcerns)


    let confirmedMessageSent = 
        `<h1 class = "editedScreen">Thanks ${userFirstName},</h1>
        <h1>I will be getting in touch with you. </h1>
        

        
        
        `

    let = replaceText = document.getElementById("replaceAfterSubmit")


    replaceText.classList.add("submittedClass");
    replaceText.innerHTML = confirmedMessageSent

 

    
})

