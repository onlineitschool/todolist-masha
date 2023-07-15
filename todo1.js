
function add_item(){

    var todo_text = document.getElementById("new_item").value;
    console.log(todo_text);

    var item = document.createElement("li")
    item.innerHTML = todo_text
    document.getElementById("todo_items").appendChild(item)
    document.getElementById("new_item").value = ""

    item.ondblclick = function(param1){
        //debugger;
        console.log("dbl click")

            var done_item = document.createElement("li")
            document.getElementById("done_items").appendChild(done_item )
            done_item.innerHTML = param1.target.innerHTML
            param1.target.remove()

            done_item.ondblclick = function(param2){
                param2.target.remove()
            }
    }
}