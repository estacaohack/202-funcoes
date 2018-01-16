//declaração
function fazerMilkshake(sabor, tamanho='grande'){
	console.log(`Fazendo milkshake ${tamanho} de ${sabor}...`);

	let milkshake =  {
		tipo: `${sabor} ${tamanho}`,
		marca: 'Bobs',
		cheio: true
	};

	return milkshake;
}

//execução
let produto = fazerMilkshake('chocolate', 'médio');

console.log(`Eu tenho um milkshake ${produto.tipo} do ${produto.marca} na mão`);
// fazerMilkshake('morango');
