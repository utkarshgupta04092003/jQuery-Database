$('#input-marks').css('width',$('#input-name').css('width'));
$('#input-roll-no').css('width',$('#input-name').css('width'));
var defaultRollNo = 100;

$('#btn').on('click',function(event){

    event.preventDefault();

    let name = $('#input-name').val();
    let marks = $('#input-marks').val();
    let rollno = $('#input-roll-no').val();

    if(!name || !marks || !rollno){
        alert('Please fill all fields');
        return;
    }
    if( rollno<1 || rollno > defaultRollNo ){
        alert(`Roll number must me between 1 to ${defaultRollNo}`);
        return;
    }
    if(marks<0 || marks>100){
        alert('Marks must be between 1 to 100');
        return;
    }

    $('#aside').append(
        `
        <div class="aside-box">
        Roll no - <span id="display-rollno" class="bg-green">${rollno}</span> , <span id="display-name" class="bg-green">${name}</span>has scored <span id="display-marks" class="bg-green">${marks}</span>marks
         </div>
    
    
        `
    )

})