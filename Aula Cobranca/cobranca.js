function retornarUsuarios()
{
	//simulando uma busca na base de dados
	let usuarios = 
	[
		{
			nome: "Angela",
			email: "angela@gmail.com",
			saldoDevedor: 0,
			faturaEmAberto: "true",
			diasDeAtraso: 5,
			tiposDeProdutos: [
			"contaPoupanca","contaCorrente","SeguroDeVida"]
			
		},
		{
			nome: "Ana Paula",
			email: "anapaula@gmail.com",
			saldoDevedor: -100,
			diasDeAtraso: " ",
			tiposDeProdutos: [
			"contaPoupanca","contaCorrente"]
		},
		{
			nome: "Carla",
			email: "carla@gmail.com",
			saldoDevedor: -200,
			diasDeAtraso: " ",
			tiposDeProdutos: [
			"contaPoupanca"]
			
		},
		{
			nome: "Irani",
			email: "irani@gmail.com",
			saldoDevedor: 0,
			diasDeAtraso: " ",
			tiposDeProdutos: [
			"SeguroDeVida"]
		}
	]
	
	return usuarios;
}


function enviarEmail(usuario)
{
	
	let msg = usuario.nome + "\n" +
				"Saldo Devedor: " + usuario.saldoDevedor + "\n" + "Fatura em Atraso: " + usuario.diasDeAtraso + " dias ";
	
	console.log(msg + 
	"\nEmail enviado com sucesso para: " 
	+ usuario.email);
}

	function enviarCobrancaTeste()
	{	
	 let usuarios = retornarUsuarios();
	 let tamanho = usuarios.length;	

	//Loop normal	
	for (let i = 0; i < tamanho ; i++)
	{
		 if (usuarios[i].saldoDevedor < 0)
		{			
			//envio de email
			enviarEmail(usuarios[i]);
		 }
	 }
	}
	

function enviarCobranca()
{	
	let usuarios = retornarUsuarios();
	let tamanho = usuarios.length;	
	
	//Loop normal	
	for (let i = 0; i < tamanho ; i++)
	{
		if (usuarios[i].faturaEmAberto == "true" || usuarios[i].saldoDevedor < 0 )
		{			
			//envio de email
			enviarEmail(usuarios[i]);
		}
	}
}


	
	
  /*  console.log("Loop inverso:")
	
	for (let i = tamanho -1; i >= 0 ; i--)
	{
		let msg = alunas[i] + "\n";

		console.log(msg)
	}
*/


/*usuarios[i]
i
usuarios
usuarios[i].produtos[j]
j
*/


