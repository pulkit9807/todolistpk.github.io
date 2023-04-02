const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", addItem);
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addItem();
  }
});

function addItem() {
  const value = input.value;
  if (value) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${value}</span><button>Delete</button>`;
    list.appendChild(li);
    input.value = "";
    const deleteBtn = li.querySelector("button");
    deleteBtn.addEventListener("click", deleteItem);
  }
}

function deleteItem() {
  const li = this.parentNode;
  li.remove();
}
