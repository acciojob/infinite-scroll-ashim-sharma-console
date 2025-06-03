//your code here!

const infiList = document.getElementById("infi-list");
let itemCount = 0;

// Function to add list items
function addListItems(count = 2) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    infiList.appendChild(li);
  }
}

// Add initial 10 items
addListItems(10);

// Scroll event listener
infiList.addEventListener("scroll", () => {
  // Check if scrolled to bottom
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    addListItems(2);
  }
});
