// Select elements
let totalButton = document.querySelector('.total');
let receiptButton = document.querySelector('.receipt');
let resetButton = document.querySelector('.reset');
let exitButton = document.querySelector('.exit');
let quantityInputs = document.querySelectorAll('.quantity input');
let checkboxes = document.querySelectorAll('.checkbox input');

// Initialize: Disable all checkboxes
checkboxes.forEach(checkbox => {
    checkbox.disabled = true;
});

// Enable checkboxes only if a valid quantity is entered
quantityInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        let quantity = parseInt(input.value);
        if (quantity > 0) {
            checkboxes[index].disabled = false; // Enable checkbox
        } else {
            checkboxes[index].disabled = true; // Disable checkbox
            checkboxes[index].checked = false; // Uncheck checkbox
        }
    });
});

// Total Button Functionality
totalButton.addEventListener('click', () => {
    let totalCost = 0;

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            let quantity = parseInt(quantityInputs[index].value);
            let price = parseInt(document.querySelectorAll('.itemPrice label:nth-child(2)')[index].innerText.replace('₹', ''));

            totalCost += quantity * price; // Calculate total cost
        }
    });

    if (totalCost > 0) {
        alert(`The total cost is ₹${totalCost}`);
    } else {
        alert('No items selected!');
    }

    reset();
});

// Receipt Button Functionality
receiptButton.addEventListener('click', () => {
    let receiptDetails = '<h2>Receipt</h2><hr>';
    let totalCost = 0;

    // Loop through selected items and build receipt content
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            let itemName = document.querySelectorAll('.itemName label')[index].innerText;
            let quantity = parseInt(quantityInputs[index].value);
            let price = parseInt(document.querySelectorAll('.itemPrice label:nth-child(2)')[index].innerText.replace('₹', ''));

            let cost = quantity * price;
            totalCost += cost;

            receiptDetails += `
                <p>
                    <strong>${itemName}</strong><br>
                    Qty: ${quantity}, Cost: ₹${cost}
                </p>
            `;
        }
    });

    if (totalCost > 0) {
        receiptDetails += `<hr><p><strong>Total Cost: ₹${totalCost}</strong></p>`;

        // Open a new window for the receipt
        let receiptWindow = window.open('', '', 'width=600,height=400');
        receiptWindow.document.write(`
            <html>
            <head>
                <title>Receipt</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h2 { text-align: center; }
                    p { margin: 10px 0; }
                    hr { border: 0; border-top: 1px solid #ccc; }
                </style>
            </head>
            <body>
                ${receiptDetails}
                <p style="text-align: center; margin-top: 20px;">
                    <button onclick="window.print()">Print Receipt</button>
                </p>
            </body>
            </html>
        `);
        receiptWindow.document.close();
    } else {
        alert('No items selected for the receipt!');
    }

    reset();
});

let reset = () => {
    quantityInputs.forEach(input => {
        input.value = 0; // Reset quantity
    });

    checkboxes.forEach(checkbox => {
        checkbox.checked = false; // Uncheck checkbox
        checkbox.disabled = true; // Disable checkbox
    });

    alert('All selections have been reset.');
};

// Reset Button Functionality
resetButton.addEventListener('click', () => {
    reset();
});

// Exit Button Functionality
exitButton.addEventListener('click', () => {
    let confirmation = confirm('Are you sure you want to exit?');
    if (confirmation) {
        window.close(); // Attempt to close the tab
    }
});
