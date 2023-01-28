let SalesValue = 54;
let successSalesValue = (SalesValue/100)*225;
document.getElementById('value').innerHTML = `${SalesValue}%`;
document.getElementById('success-value').setAttribute('stroke-dasharray', `${successSalesValue}, 660`);