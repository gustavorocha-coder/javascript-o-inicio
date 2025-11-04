// Boas práticas
/*Boas práticas para JavaScript incluem usar nomes descritivos para variáveis e funções, preferir const e let em vez de var, manter funções pequenas e focadas, evitar poluir o escopo global, e escrever código claro e bem comentado. Além disso, é importante utilizar try...catch para tratamento de erros, evitar repetição de código, usar a comparação estrita (===) e testar o código regularmente.*/ 

// Case sensitive
/*o JavaScript é uma linguagem case-sensitive, o que significa que diferencia letras maiúsculas de minúsculas em nomes de variáveis, funções, propriedades e outras palavras-chave. Por exemplo, minhaVariavel e minhavariavel são consideradas diferentes pelo JavaScript. Essa sensibilidade deve ser respeitada em todo o código para evitar erros.*/

// Sintaxe básica e comentário
console.log("olá mundo")
/*A sintaxe básica do JavaScript inclui variáveis (declaradas com var, let ou const), tipos de dados como vetores e objetos, estruturas condicionais (if/else) e funções. Os comentários servem para explicar o código e não são executados pelo navegador, podendo ser de linha única (//) ou de múltiplas linhas (/* ... */

// Declaração de variáveis(var, let, const)
/*Em JavaScript, você pode declarar variáveis com as palavras-chave var, let e const. As variáveis let são as mais recomendadas atualmente, pois têm escopo de bloco, enquanto var tem escopo de função. const é usado para declarar constantes, valores que não podem ser reatribuídos. */
let nome = "gustavo"
console.log("olá tudo bem " + nome)
const idade = 26
console.log(idade)
console.warn("Atenção")
console.error("Erro")
console.info("Atenção")

// Console e Debug
/*Em JavaScript, o consoleobjeto `debug` é uma ferramenta poderosa para depurar e inspecionar a execução do código. Ele fornece vários métodos para exibir informações no console do desenvolvedor do navegador ou em um terminal Node.js.*/



//Tipos de dados
/*JavaScript tem 8 tipos de dados: 6 primitivos (String, Number, BigInt, Boolean, Undefined, Null, Symbol) e os objetos, que incluem Arrays e Functions. Os tipos primitivos são imutáveis e representam um único valor, como texto (String), números (Number), valores lógicos (Boolean), e valores indefinidos (Undefined). */
//string
let cidade ="americana"

//number
let salario = 2000

//bool
let = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição
/*Em JavaScript, operadores de atribuição são usados para atribuir valores a variáveis. O operador básico é o sinal de igual (=), mas também existem operadores combinados que realizam uma operação e atribuem o resultado na mesma etapa. Exemplos incluem +=, -=, *=, /=, %= (que combinam atribuição com operações aritméticas) e os operadores lógicos &&= , ||= e ??=. */

//     Operadores aritméticos
/*Os operadores aritméticos em JavaScript realizam operações matemáticas em valores numéricos, incluindo adição (\(+\)), subtração (\(-\)), multiplicação (\(*\)), divisão (\(/\)), módulo (resto da divisão, \(\%\) ), exponenciação (\(**\)), incremento (\(++\)) e decremento (\(--\)). Eles permitem realizar cálculos como soma, subtração, multiplicação e divisão, além de obter o resto de uma divisão e manipular valores numericamente. */

//     Operadores relacionais
/*Os operadores relacionais em JavaScript são usados para comparar valores e retornar um valor booleano (true ou false). Os principais operadores são: maior que (\(>\)) , menor que (\(<\)) , maior ou igual a (\(\ge \)) , menor ou igual a (\(\le \)) , igual a (\(==\) ou \(===\)) e diferente de (\(!=\) ou \(!==\)). Eles são frequentemente usados em estruturas condicionais para tomar decisões em um código. */

//     Operadores lógicos
/*Os operadores lógicos em JavaScript são && (AND), || (OR) e ! (NOT), usados para combinar ou inverter valores booleanos (true ou false) em expressões. O && retorna true somente se ambos os operandos forem true, o || retorna true se pelo menos um dos operandos for true, e o ! inverte o valor booleano de um único operando. */

// Estrutura
//     Estrutura de controle/decisão
/*As estruturas de controle de decisão no JavaScript permitem que o código tome caminhos diferentes com base em condições. As principais são if, else if e else, usadas para avaliar uma condição e executar blocos de código diferentes se a condição for verdadeira ou falsa. A estrutura switch também é usada para comparar um único valor com várias opções possíveis de maneira mais organizada. */

//     Laços de repetição
/*Em JavaScript, laços de repetição são usados para executar um bloco de código várias vezes enquanto uma condição for verdadeira. Os tipos mais comuns são for, while e do...while. O loop for é ideal para quando o número de iterações é conhecido, o while é usado para repetições condicionais no início, e o do...while é usado quando o bloco de código deve ser executado pelo menos uma vez antes de verificar a condição. */

// Arrays --> vetor
/*Em JavaScript, "array" e "vetor" se referem à mesma estrutura de dados: uma coleção de valores (que podem ser de tipos diferentes, como números, strings ou objetos) armazenados em uma única variável e acessados por um índice numérico que começa em \(0\). Arrays são criados usando colchetes [] e possuem vários métodos embutidos para manipulação, como push() para adicionar elementos e length para verificar a quantidade de itens. */

// Funções personalizadas
 /*Uma função personalizada em JavaScript é um bloco de código que realiza uma tarefa específica e pode ser reutilizada. Elas são criadas usando a palavra-chave function seguida por um nome, parênteses para parâmetros e chaves que contêm o código a ser executado, ou através de arrow functions (=>). Para usar a função, você a chama pelo nome seguida por parênteses. */
