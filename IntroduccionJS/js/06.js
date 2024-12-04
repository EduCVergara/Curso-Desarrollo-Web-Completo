//Objeto Math

let resultado;

resultado = Math.PI;
resultado = Math.round(); //redondea hacia arriba si es .5+ y hacia abajo si es .4-
resultado = Math.ceil(2.1); //redondea hacia arriba siempre, el resultado aquí sería 3
resultado = Math.floor(2.9); //redondea hacia abajo siempre, el resultado aquí sería 2
resultado = Math.sqrt(144); //raíz cuadrada
resultado = Math.abs(-5);//sin importar es negativo o positivo, devuelve el opuesto
resultado = Math.min(3,5,2,6,13,5); //devuelve el valor mínimo de todos
resultado = Math.max(3,5,2,6,13,5); //devuelve el valor maximo de todos
resultado = Math.random(); //genera un valor aleatorio (siempre es 0.x)
//combinamos floor y random para obtener un valor normal y generar un número aleatorio sobre 0.x
resultado = Math.floor(Math.random() * 100); //el número por el cual se multiplica indica el máximo al que llegará


console.log(resultado);