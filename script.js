let expenses = [];

let outputTable = document.getElementById('expenseTable');
let expenseAdder = document.getElementById('addExpense');

expenseAdder.addEventListener('click', function(event) {
    event.preventDefault();
    let input = document.querySelectorAll('.inpEle');

    let emptyInput = false;
    let title, amount, desc;
    input.forEach(input => {
        switch(input.id) {
            case 'title':
                title = input.value;
                break;
            case 'amount':
                amount = input.value;
                break;
            case 'desc':
                desc = input.value;
                break;
        }

        if (input.value === '') {
            emptyInput = true;
        }

        input.value = '';
    });

    if (emptyInput) {
        alert('Empty input not allowed');
        return;
    }

    let curExpense = {
        Title: title,
        Amount: amount,
        Desc: desc
    };

    expenses.push(curExpense);
    Print(expenses);
});

function Print(expenseList) {
    if (expenseList.length == 0) {
        return;
    }

    let totalExpense = 0;
    let insertable = '';
    for (let expense of expenseList) {
        totalExpense += parseFloat(expense.Amount);
        insertable += 
        `
            <tr>
                <td>${expense.Title}</td>
                <td>${expense.Desc}</td>
                <td>${expense.Amount}</td>
            </tr>
        `;
    }

    let tableStructure = 
    `
        <table class="styled-table">
            <thead>
                <tr>
                    <td>Expense</td>
                    <td>Description</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody id="expenseTable">
                ${insertable}
                <tr>
                    <td></td>
                    <td style='background-color: #fb9999'>Total</td>
                    <td style='background-color: #fb9999'>${totalExpense}</td>
                </tr>
            </tbody>
        </table>
    `;

    outputTable.innerHTML = tableStructure;    
}