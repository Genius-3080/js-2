
var Enput = document.querySelector('.inp')

function fnCheck(event){
    event.preventDefault()
    var exam = Enput.value
    if(exam % 3 == 0 && exam % 7 == 0  ){
        console.log("uchga va yettiga bolinadi");
    }
else if(exam % 3 == 0 ){
    console.log("uchga bolinadi");
}
else if(exam % 7 == 0 ){
    console.log("yettiga bolinadi");
}

else{
    console.log("bo'linmaydi");
}
exam.value = ''
}