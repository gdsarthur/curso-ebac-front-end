const form = document.getElementById("form-num")
const numeroA = document.getElementById("num-a")
const numeroB = document.getElementById("num-b")

form.addEventListener('submit', function(e) {
    e.preventDefault()
        if (numeroA.value > numeroB.value) {
            alert("Inválido! O número B precisa ser maior do que número A.")
        }
        else {
            alert("Tudo ok! O número B é maior do que o número A")
            numeroA.value = ""
            numeroB.value = ""
        }
})