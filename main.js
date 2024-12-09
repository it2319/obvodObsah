document.querySelector('[type="button"]').addEventListener('click', function () {
    const shape = document.querySelector('input[name="shape"]:checked')?.value;
    const a = parseFloat(document.getElementById('a').value) || 0;
    const b = parseFloat(document.getElementById('b').value) || 0;
    const c = parseFloat(document.getElementById('c').value) || 0;

    if (!shape) {
        alert("Vyberte geometrický tvar!");
        return;

}

const btnCalc = document.querySelector('[type=button]');
    if (shape === 'ctverec') {
        if (a <= 0 || isNaN(a)) {
            alert("Zadejte stranu a > 0");
            return;
        }
    }
    if (shape === 'obdelnik') {
        if (a <= 0 || isNaN(a) || b <= 0 || isNaN(b)) {
            alert("Zadejte strany a, b > 0");
            return;
        }
    }
    if (shape === 'trojuhelnik') {
        if (a <= 0 || isNaN(a) || b <= 0 || isNaN(b) || c <= 0 || isNaN(c)) {
            alert("Zadejte strany a, b, c > 0");
            return;
        }
        if (a + b <= c || a + c <= b || b + c <= a) {
            alert("Zadané strany nejsou schodné pro trojúhelník!");
            return;
        }
    }
    const VYPOCET = {
    obvod: function(){
        if (shape === 'ctverec') {
            return 4 * a;
        }
        else if (shape === 'obdelnik') {
            return 2 * a + 2 * b;
        }
        else {
            return a + b + c;
        }
    },
    obsah: function(){
        if (shape === 'ctverec') {
            return a * a;
        }
        else if (shape === 'obdelnik') {
            return a * b;
        }
        else {
            return (a * b) / 2;
        }
    }
};
const output = document.getElementById('vystup');
output.innerHTML = `Obvod ${shape}: ${VYPOCET.obvod()} cm a obsah ${shape}: ${VYPOCET.obsah()} cm<sup>2</sup>.`;
});