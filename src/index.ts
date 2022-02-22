/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
});
console.log ("desafio 02")
	
	const nome1: string = "ubuntu1 silva";
	const idade1: number = 33; 
	const peso1: number = 80;
	const altura1: number = 1.65; 
	const ehdev1: boolean = true; 

	const nome2: string = "ubuntu2 silva";
	const idade2: number = 33; 
	const peso2: number = 80;
	const altura2: number = 1.65; 
	const ehdev2: boolean = true; 

	const nome3: string = "ubuntu3 silva";
	const idade3: number = 33; 
	const peso3: number = 80;
	const altura3: number = 1.65; 
	const ehdev3: boolean = true; 

	function sum({ idade1, idade2, idade3 }: { idade1: number; idade2: number; idade3: any; }): any {
		idade1 = +idade1;
		idade2 = +idade2;
		idade3 = +idade3;
		return idade1 + idade2 + idade3;
	  }
	
 var arrayNomes = ["ubuntu1 silva", "ubuntu2 silva", "ubunto3 silva" ];
	  var resultado = arrayNomes.push("ubuntu1");
	  console.log(arrayNomes);
	  console.log(resultado);


 function calcularIMCdosubuntus (peso: number, altura: number) {
		altura = altura / 100;
		return (peso1 / (altura1 * altura1)) + (peso2/ (altura2 * altura2)) + (peso3/ altura3 * altura3) ;
	}


	function devSilva (): void {
		for(let chave in arrayNomes) { 
		console. log (chave, ["nome" + "silva"] );
		
	
		}
	}
