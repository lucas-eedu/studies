function soma(a, b = 40) {
   console.log(a + b);
}

soma(10, 20); // 30
soma(10); // 50

// Obs: os parâmetros opcionais devem vir por último
// correto: function soma(a, b = 40)
// errado: function soma(a = 40, b)