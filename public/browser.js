console.log("FrontEnd JS started workingi");
let createField = document.getElementById("create-field");

function itemTemplate(item) {

  return `<li 
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between ">
    <span class="item-text">
   ${item.reja}
    </span>
    <div>
      <button data-id="${item._id}" class="edit-item btn btn-secondary btn-sm mr-1">
        Change
      </button>
      <button data-id="${item._id}" class="delete-item btn btn-danger" style="border-radius: 20px">
        Delete
      </button>

    </div>

  </li>`;
}



document.getElementById("create-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();                       // traditional API ni toxtatadi
    //prevent not to go to another page = (default it will move to another page) 

    //Rest Api

    axios.post("/create-item", { reja: createField.value })
      .then((response) => {
        document.getElementById("item-list")
          .insertAdjacentHTML("beforeend", itemTemplate(response.data));

        createField.value = "";
        createField.focus();

      })
      .catch((err) => {
        console.log("Please try again!")

      });

  });

document.addEventListener("click", function (e) {
  console.log(e.target);
  //delete operator
  if (e.target.classList.contains("delete-item")) {

    if (confirm("Do you really want to delete?")) {
      axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => { });
      console.log("Please try again!")


    }
  }
  //edit operator
  if (e.target.classList.contains("edit-item")) {
    let userInput = prompt("Insert update", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          //DATABASE => FRONT END 
          console.log(response);
          e.target.parentElement.parentElement
          .querySelector(".item-text")
          .innerHTML= userInput;

        })
        .catch((err) => { 
          console.log("Please try again");
        });
    }
  }
});

//delete-all

document.getElementById("clean-all").addEventListener("click", function(){
axios.post("delete-all", {delete_all: true}).then (response =>{
alert(response.data.state);
document.location.reload();
})

});