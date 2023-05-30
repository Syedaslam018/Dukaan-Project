let myForm = document.getElementById('myForm');
let ul = document.getElementById('items');

//eventListners
myForm.addEventListener('submit',onSubmit);


//input values
let itemName = document.getElementById('itemname');
let itemDesc = document.getElementById('desc');
let itemPrice = document.getElementById('price');
let itemQuant = document.getElementById('quant');



let myObj = {
    iname: itemName.value,
    idesc: itemDesc.value,
    iprice: itemPrice.value,
    iquant: itemQuant.value
}


//event function
function onSubmit(e){
    e.preventDefault();
    
    myObj.iname = itemName.value;
    myObj.idesc = itemDesc.value;
    myObj.iprice = itemPrice.value;
    myObj.iquant = itemQuant.value;
    console.log(myObj)

    //adding to crud
    axios.post('https://crudcrud.com/api/4bb9d1a15df74a26afce16286c35e011/dukaan', myObj)
    .then(response => {
        displayData(response.data)
    }).catch(err => {
        console.log(err)
    })
    //clearing the form
    myForm.reset()
}

// function to display data from crud
function displayData(obj){
    let li = document.createElement('li');
    li.innerHTML = obj.iname + ' - ' + obj.idesc + ' - ' + obj.iprice + ' - ' + obj.iquant;


    let but1 = document.createElement('input');
    but1.type = 'button';
    but1.value = 'Buy1';
    but1.className = 'btn';
    but1.id = 'buy1';
    li.appendChild(but1);

    but1.onclick = async function() {
        // console.log(`https://crudcrud.com/api/fd7cfaae0cbc4ac79bee165522bc2512/dukaan/${obj._id}`)
                axios.put(`https://crudcrud.com/api/4bb9d1a15df74a26afce16286c35e011/dukaan/${obj._id}`, {
                  iname: obj.iname,
                  idesc: obj.idesc,
                  iprice: obj.iprice,
                  iquant: obj.iquant-1
            }).then(response => {
                location.reload();
            }).catch(err => {
                console.log(err)
            })
              
              
    
    //     .then((response) => {
    //         console.log(response);
    //         location.reload()
    // })
}
        //console.log(response)
    // }).catch(err => {
    //     console.log(err)

    let but2 = document.createElement('input');
    but2.type = 'button';
    but2.value = 'Buy2';
    but2.className = 'btn';
    but2.id = 'buy2';
    li.appendChild(but2);

    but2.onclick = async function() {
        // console.log(`https://crudcrud.com/api/fd7cfaae0cbc4ac79bee165522bc2512/dukaan/${obj._id}`);
        axios.put(`https://crudcrud.com/api/4bb9d1a15df74a26afce16286c35e011/dukaan/${obj._id}`, {
            iname: obj.iname,
            idesc: obj.idesc,
            iprice: obj.iprice,
            iquant: obj.iquant-2
        }).then(response => {
            location.reload();
        }).catch(async err => {
            console.log(err)
            //location.reload();
        })
        //window.location.reload()
    }



    let but3 = document.createElement('input');
    but3.type = 'button';
    but3.value = 'Buy3';
    but3.className = 'btn';
    but3.id = 'buy1';
    li.appendChild(but3);


    but3.onclick = async  function() {
        // console.log(`https://crudcrud.com/api/fd7cfaae0cbc4ac79bee165522bc2512/dukaan/${obj._id}`);
        axios.put(`https://crudcrud.com/api/4bb9d1a15df74a26afce16286c35e011/dukaan/${obj._id}`, {
            iname: obj.iname,
            idesc: obj.idesc,
            iprice: obj.iprice,
            iquant: obj.iquant-3
        }).then(response => {
            location.reload();
        }).catch(err => {
            console.log(err)
        })
        //location.reload()
    }
    ul.appendChild(li);
    //location.reload();
}


window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/4bb9d1a15df74a26afce16286c35e011/dukaan")
    .then(response => {
        for(var i=0; i<response.data.length; i++){
            displayData(response.data[i]);
        }
    }).catch(err => {
        console.log(err);
    })
})