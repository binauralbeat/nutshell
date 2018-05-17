const fragment = document.createDocumentFragment()
const taskSection = document.querySelector(".taskSection")
const taskCreationField = document.querySelector(".taskfields")

//event listener attached to add task button and calls upon taskInput variable to populate form to create new task
$(".taskCreationButton").on("click", function () {
    $(".taskCreationButton").hide()
    $(".taskSection").append(taskInput())
})
//function to create input fields to create a new task
const taskInput = function () {
    const taskDiv = document.createElement("div")
    taskDiv.classList = "taskfield"
    taskSection.appendChild(taskDiv)
    const inputName = document.createElement("input")
    inputName.type = "text"
    inputName.placeholder = "Task Name Here"
    inputName.classList = "inputNameField"
    taskDiv.appendChild(inputName)
    const completionDate = document.createElement("input")
    completionDate.type = "date"
    completionDate.placeholder = "Date to Complete"
    completionDate.classList = "dateComplete"
    taskDiv.appendChild(completionDate)
    const submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    submitButton.classList = "submitButton"
    taskDiv.appendChild(submitButton)
    //event listener attached to submit button and when submit button is pressed clears form and shows add task button
    $(".submitButton").on("click", function () {
        let input = $(".inputNameField").val()
        let inputDate = $(".dateComplete").val()
        console.log(input)
        $.ajax({
            url: "http://localhost:8088/tasks",
            method: "POST",
            data: {
                taskID: "",
                taskName: (input),
                completionDate: (inputDate),
                status: "",
                userID: ""
            }
        })
            .then(newFood => console.log(newFood))
        $(".taskfield").empty()
        $(".taskCreationButton").show()
    })
}

/*$(".submitButton").on("click", function () {
    $(".taskfield").empty()
    $(".taskCreationButton").show()})
*/