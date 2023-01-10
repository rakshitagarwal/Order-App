function saveToLocalStorage(event){
    event.preventDefault();
    const Amount = event.target.Amount.value;
    const Brief = event.target.Description.value;
    const List = event.target.Table.value;
    const Obj = {Amount, Brief, List};

    axios.post("https://crudcrud.com/api/03f4f8b937b241f5bbda27d7f4b7b6af/orderApp", Obj)
    .then(res => {
        showOrderOnScreen(res.data);
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}
window.addEventListener("DOMContentLoaded",() => {
    axios.get("https://crudcrud.com/api/03f4f8b937b241f5bbda27d7f4b7b6af/orderApp")
    .then(res => {
        console.log(res);
        for(var i=0; i < res.data.length; i++){
            showOrderOnScreen(res.data[i]);
        }
    })
    .catch(error => {
        console.log(error);
    })
})

function showOrderOnScreen(Order) {
    if(Order.List == 'Table1'){
        var parentNode = document.getElementById("Table1");
    } else if(Order.List == 'Table2'){
        var parentNode = document.getElementById("Table2");
    } else if(Order.List == 'Table3'){
        var parentNode = document.getElementById("Table3");
    } else{
        var parentNode = document.getElementById("onSubmit");
    }
    
    const childHTML = `<li id=${Order._id}>${Order.Amount} - ${Order.List} - ${Order.Brief}
                        <button onClick=deleteOrder('${Order._id}')>Delete Order</button>
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function deleteOrder(orderId) {
    axios.delete(`https://crudcrud.com/api/03f4f8b937b241f5bbda27d7f4b7b6af/orderApp/${orderId}`)
    .then(() => {
        removeOrderFromScreen(orderId);
    })
    .catch(error => console.log(error));
}

function removeOrderFromScreen(orderId){
    console.log(orderId);
    if(Order.List == 'Table1'){
        var parentNode = document.getElementById("Table1");
    } else if(Order.List == 'Table2'){
        var parentNode = document.getElementById("Table2");
    } else if(Order.List == 'Table3'){
        var parentNode = document.getElementById("Table3");
    } else{
        var parentNode = document.getElementById("onSubmit");
    }
    const childNodeToBeDeleted = document.getElementById(orderId);
    parentNode.removeChild(childNodeToBeDeleted);
}