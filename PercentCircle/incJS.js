let incValue = 74;
let successIncValue = (incValue/100)*225;
document.getElementById('inc-value').innerHTML = `${incValue}%`;
document.getElementById('success-inc-value').setAttribute('stroke-dasharray', `${successIncValue}, 660`);