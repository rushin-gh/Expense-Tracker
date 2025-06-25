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
    console.log(expenses);
});