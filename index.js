let inputs = document.querySelectorAll('.width');
let radioButtons = document.querySelectorAll('.title');
let saleType = document.querySelectorAll('.sale-type');
let submit = document.querySelector('.submit');
let formValues = {};
let sales = '' ;

submit.addEventListener('click', (e) => {
    inputs.forEach(input => {
        inputValue = input.value;
        inputName = input.name
        formValues = {...formValues,[inputName]:inputValue}
        console.log('done')
    })

    radioButtons.forEach(button => {
        if(button.checked)   formValues = {...formValues,['title identification']:button.value}
    })

    saleType.forEach(button => {
        if(button.checked) {
            let sale = `${button.value}`
            if(!sales) {
                sales = sale
                return
            }else{
                sales += `,${sale}`
            }
            
            formValues = {...formValues,['saleType']:sales
        }
            // console.log(formValues)
        }
    })
    console.log(formValues)
    e.preventDefault()
})
