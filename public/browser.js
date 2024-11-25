console.log("FrontEnd JS started workingi");

function itemTemplate(data) {
    return `<li 
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between ">
    <span class="item-text">
   "${item.plan}"
    </span>
    <div>
      <button data-id="<%=item._id%>" class="edit-me btn btn-secondary btn-sm mr-1">
        Change
      </button>
      <button data-id="${item._id}" class="btn btn-danger" style="border-radius: 20px">
        Delete
      </button>

    </div>

  </li>`;
}



let createField = document.getElementById("create-field");

document.getElementById("create-form")
    .addEventListener("sumbit", function (e) {
        e.preventDefault();
        //prevent not to go to another page = (default it will move to another page) 

        axios        //modern http request
            .post("/create-item", { plan: createField.value })
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