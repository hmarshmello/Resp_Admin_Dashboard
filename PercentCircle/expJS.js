let expValue = 54;
let successExpValue = (expValue/100)*225;
document.getElementById('expsvalue').innerHTML = `${expValue}%`;
document.getElementById('success-exp-value').setAttribute('stroke-dasharray', `${successExpValue}, 660`);