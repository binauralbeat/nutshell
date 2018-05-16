const fragment = document.createDocumentFragment()
const taskSection = document.querySelector(".taskSection")
const taskCreationField = document.querySelector(".taskfields")

$(".taskCreationButton").on("click", function () {
    $(".taskCreationButton").hide()
    $(".taskSection").append(taskInput())
})
const taskInput = function () {
    const taskDiv = document.createElement("div")
    taskDiv.classList = "taskfield"
    taskSection.appendChild(taskDiv)
    const inputName = document.createElement("input")
    inputName.type = "text"
    inputName.placeholder = "Task Name Here"
    taskDiv.appendChild(inputName)
    const completionDate = document.createElement("input")
    completionDate.type = "date"
    completionDate.placeholder = "Date to Complete"
    taskDiv.appendChild(completionDate)
    const submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    submitButton.classList = "submitButton"
    taskDiv.appendChild(submitButton)
    //event listener attached to submit button and when submit button is pressed clears form and shows add task button
    $(".submitButton").on("click", function () {
        $(".taskfield").empty()
        $(".taskCreationButton").show()})
}

/*$(".submitButton").on("click", function () {
    $(".taskfield").empty()
    $(".taskCreationButton").show()})
*/