
function handleSubmit(){
    $('#dog_form').submit(function(){
        event.preventDefault();
        let dog_num = $('#dog_number').val();
        console.log($('#dog_number').val());
        fetch(`https://dog.ceo/api/breeds/image/random/${dog_num}`)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
        
    });
}

function displayImages(responseJson){
    let message = responseJson.message;
    let emptyArray = [];
    console.log(message)
    console.log(message[1]);
    console.log(emptyArray);
    for (let i =0; i< message.length;i++){
        emptyArray.push(`<img src='${message[i]}'>`);
        $('#landing').html(emptyArray);

    }
}













function loadscript(){
    handleSubmit();
}




$(loadscript);