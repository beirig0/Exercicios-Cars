

let cars = ([
    {
        Marca: 'Jeep',
        Cor: 'Branco',
        Km: 90.000,
        Ano: 2019,
        Alug: true,
    },

    {
        Marca: 'Volvo',
        Cor: 'Preto',
        Km: 130.000,
        Ano: 2006,
        Alug: false,
    },

    {
        Marca: 'Peugeot',
        Cor: 'Prata',
        Km: 30.000,
        Ano: 2015,
        Alug: true,
    },

    {
        Marca: 'Chevrolet',
        Cor: 'Branco',
        Km: 90.000,
        Ano: 2019,
        Alug: true,
    },

    {
        Marca: 'Fiat',
        Cor: 'Azul',
        Km: 0,
        Ano: 2022,
        Alug: true,
    },

    {
        Marca: 'Renault',
        Cor: 'Preto',
        Km: 90.000,
        Ano: 2010,
        Alug: true,
    },

    {
        Marca: 'Fiat',
        Cor: 'Azul',
        Km: 0,
        Ano: 2022,
        Alug: true,
    },

    {
        Marca: 'Volkswagen',
        Cor: 'Prata',
        Km: 230.000,
        Ano: 2006,
        Alug: true,
    },

    {
        Marca: 'Hyundai',
        Cor: 'Branco',
        Km: 0,
        Ano: 2023,
        Alug: false,
    },

    {
        Marca: 'BMW',
        Cor: 'Preto',
        Km: 30.000,
        Ano: 2018,
        Alug: true,
    }]);

console.log("Lista de carros : \n", cars)
JSON.stringify(cars[4])
JSON.stringify(cars[6])

if (JSON.stringify(cars[4]) === JSON.stringify(cars[6])) {
    delete cars[4]
    console.log("Lista Atualizada! \n", cars);
} else {
    console.log("Não tem nehum carro repetido");
}


if (cars[8] == true) {
    console.log("O carro ", cars[8], "pode ser alugado")

} else {
    console.log("O carro ", cars[8], "NAO pode ser alugado")
};


if (cars[7] == true) {
    console.log("O carro ", cars[7], "NAO pode ser alugado")
} else {
    console.log("O carro ", cars[7], "Pode ser alugado")
};
