
    // Initialize product list
    const productList = [];
  
    // Get HTML elements
    const form = document.getElementById("product-form");
    const nameInput = document.getElementById("product-name");
    const descriptionInput = document.getElementById("product-description");
    const valueInput = document.getElementById("product-value");
    const availableYesRadio = document.getElementById("available-yes");
    const availableNoRadio = document.getElementById("available-no");
    const productsTable = document.getElementById("products-table");
    const productsTableBody = productsTable.getElementsByTagName("tbody")[0];
    const registerProductButton = document.getElementById("register-product-button");
    const newProductButton = document.getElementById("new-product-button");
    const valueprod = document.getElementById("valueprod")
  
    // Add event listener to register product button
    registerProductButton.addEventListener("click", () => {
      const product = {
        name: nameInput.value,
        description: descriptionInput.value,
        value: parseFloat(valueInput.value),
        available: availableYesRadio.checked
      };
  
      productList.push(product);

      productList.sort((a,b)=> a.value - b.value)
      
      // Display product list
      displayProductList();
  
      // Clear form fields
      nameInput.value = "";
      descriptionInput.value = "";
      valueInput.value = "";
      availableYesRadio.checked = true;
    });
  
    // Display product list
    function displayProductList() {
      productsTableBody.innerHTML = "";
      for (const product of productList) {
        const row = productsTableBody.insertRow();
        const nameCell = row.insertCell();
        const valueCell = row.insertCell();
        nameCell.textContent = product.name;
        valueCell.textContent = product.value.toFixed(2);
      }
    }
  
    // Add event listener to new product button
    newProductButton.addEventListener("click", () => {
      form.reset();
      nameInput.focus();
    });
