const addBtn = document.querySelector("#add");
const removeCtn = document.querySelector(".list-items");
// const done = document.querySelectorAll(".item");
const all = document.getElementById("all");
const completed = document.getElementById("completed");
const progress = document.getElementById("progress");

addBtn.addEventListener("click", addList);

function addList(event){
    event.preventDefault();
    const listItems = document.querySelector(".list-items");
    const input = document.querySelector("input").value;
    const item = document.createElement("li");
    const done = document.createElement("span");
    const close = document.createElement("span");
    const text = document.createElement("p");
    item.classList.add("item");
    done.classList.add("done-icon");
    close.classList.add("close-icon");
    done.innerHTML = "&#10003;";
    close.innerHTML = "&#10008;";
    text.innerText = input;
    

    listItems.appendChild(item);
    item.appendChild(done);
    item.appendChild(text);
    item.appendChild(close);
    document.querySelector("input").value = "";
}

removeCtn.addEventListener('click', function(event) {
  if (event.target.classList.contains('done-icon')) {
    let text = event.target.nextElementSibling;
    let check = event.target;
    text.classList.toggle("done");
    check.classList.toggle("check");
  }
});

removeCtn.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === "p") {
    event.target.setAttribute("contenteditable", "true")
  }
});

removeCtn.addEventListener('click', function(event) {
    if (event.target.classList.contains('close-icon')) {
      let parentElement = event.target.parentElement;
      parentElement.remove();
    }
});


progress.addEventListener("click", function() {
  const listItems = document.querySelectorAll(".list-items .item");

  listItems.forEach(function(listItem) {
    const checkElement = listItem.querySelector(".check");

    if (checkElement) {
      listItem.style.display = "none";
    }
    else{
      listItem.style.display = "list-item";
    }
  });
});

completed.addEventListener("click", function() {
  const listItems = document.querySelectorAll(".list-items .item");

  listItems.forEach(function(listItem) {
    const checkElement = listItem.querySelector(".check");

    if (!checkElement) {
      listItem.style.display = "none";
    }
    else{
      listItem.style.display = "list-item";
    }
  });
});

all.addEventListener("click", function(){
  const listItems = document.querySelectorAll(".list-items .item");

  listItems.forEach(function(listItem) {
    
    listItem.style.display = "list-item";
  });
})

// removeCtn.addEventListener("click", function(event){
//   if (event.target.classList.contains('check')){
//     let parentElement = event.target.parentElement;

//   }
// })


// all.addEventListener("click", function(event) {
//   const items = document.getElementsByClassName("item");
//   items.array.forEach(element => {
//     element.style.display = "list-item";
//   });
// })