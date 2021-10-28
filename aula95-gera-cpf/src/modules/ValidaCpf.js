export default class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    valida() {
        if(typeof this.cpfLimpo !== 'string') return false;
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo;

    };

    geraNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigito);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1);
        this.novoCpf = cpfSemDigito + digito1 + digito2;
    }

    static geraDigito(cpfSemDigito) {
        let total = 0;
        let recursivo = cpfSemDigito.length + 1;
        for(let stringNumerica of cpfSemDigito) {
            total += recursivo * Number(stringNumerica);
            recursivo --;
        }
        
        const digito = 11 - (total % 11);
        return digito <= 9 ? digito : '0';
    } 

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    };
}

