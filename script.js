var FullName= prompt('Please enter your full name: ')
var Username= prompt('Please enter your username: ')
var Gender = confirm('What is your gender?\n'+'Press OK if your Male\n'+'Cancel if Female' )
if(Gender == true){
    alert('You have set your gender to male.')
    document.getElementById("gender").innerHTML = "M"
}
else{
    alert('You have set your gender to female')
    document.getElementById("gender").innerHTML = "F"
}
var BriefDesc = prompt('Plese type a brief description of yourself: ')
do{
    var YearBorn = prompt('Please enter your birth year: ')
}while( YearBorn == NaN || YearBorn == null|| YearBorn == 0)
var CustPic = confirm('Would you like to add custom profile pics? ')
if(CustPic == true)
{
    var FileName = prompt('Enter a file name: ',"me.jpg")
    document.getElementById('ppic').src = FileName
}
else{
    alert("No image set.")
}
var Age = 2023-parseInt(YearBorn)

document.getElementById("fname").innerHTML = FullName
document.getElementById('username').innerHTML = Username
document.getElementById('year').innerHTML = YearBorn
document.getElementById('desc').innerHTML = BriefDesc
document.getElementById('age').innerHTML = Age