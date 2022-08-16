let moreCoxinhas = prompt("Você deseja mais coxinhas? S para sim e N para não");

let valorTotal = 0;

while (moreCoxinhas.toUpperCase() !== "N") {
  valorTotal = valorTotal + 2.5;
  console.log(`As suas coxinhas já somam ${valorTotal}`);
  moreCoxinhas = prompt("Você deseja mais coxinhas? S para sim e N para não");
}

alert(`As suas coxinhas já somaram ${valorTotal}`);
