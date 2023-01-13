const chalk = require("chalk");
const path = require('path')
const fs = require('fs')
module.exports = {
  compras(name, value, isFirstPurchase, isCashPayment) {
    let valorTotal;
    let valorDesconto;
    let desconto;

    if (isFirstPurchase && isCashPayment) {
      if (value >= 1000) {
        desconto = 0.3;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      } else if (value >= 500 && value < 1000) {
        desconto = 0.25;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      } else {
        desconto = 0.2;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      }
    }

    if (isFirstPurchase && !isCashPayment) {
      if (value >= 1000) {
        desconto = 0.2;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      } else if (value >= 500 && value < 1000) {
        desconto = 0.15;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      } else {
        desconto = 0.1;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      }
    }

    if (!isFirstPurchase && isCashPayment) {
      if (value >= 1000) {
        desconto = 0.2;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      } else if (value >= 500 && value < 1000) {
        desconto = 0.15;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      } else {
        desconto = 0.1;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      }
    }

    if (!isFirstPurchase && !isCashPayment) {
      if (value >= 1000) {
        desconto = 0.1;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      } else if (value >= 500 && value < 1000) {
        desconto = 0.05;
        mostraDados(name, value, valorDesconto, valorTotal, desconto);
      } else {
        mostraDados(name, value, valorDesconto, valorTotal);
      }
    }
  },
};

function mostraDados(name, value, valorDesconto, valorTotal, desconto) {
  if (desconto) {
    valorDesconto = value * desconto;
    valorTotal = value - valorDesconto;
    console.log("Cliente " + name);
    console.log("Valor: "+value+"R$");
    console.log(
      `Desconto sera de ${
        desconto.toFixed(2).split(".")[1]
      }% - ${valorDesconto}R$ `
    );
    console.log(chalk.bgGreen("Valor total é " + valorTotal));
  } else {
    console.log("Cliente " + name+" Agradeçemos pela sua preferencia, voce ganhara um desconto para a proxima compra");
    console.log(chalk.bgBlue("Desconto para proxima compra "+Math.floor((Math.random() * 10 - 0) + 0)+"%"));
    console.log(chalk.bgRed(`Não há desconto para essa compra`));
    console.log(chalk.bgGreen("Valor total é " + value+"R$"));
  }
}
