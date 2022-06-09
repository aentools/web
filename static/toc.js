
(function() {
        // A função anônima define um escopo local
// Localiza o elemento contêiner TOC.
// Se não existe, cria um no início do documento.
var toc = document.getElementById("TOC");
if (!toc) {
toc = document.createElement("div");
toc.id = "TOC";
document.body.insertBefore(toc, document.body.firstChild);
}
// Localiza todos os elementos de cabeçalho de seção
var headings;
if (document.querySelectorAll)
// Podemos fazer isso do modo fácil?
headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
else
// Caso contrário, localiza os cabeçalhos da maneira difícil
headings = findHeadings(document.body, []);
// Percorre o corpo do documento recursivamente, procurando cabeçalhos
function findHeadings(root, sects) {
for(var c = root.firstChild; c != null; c = c.nextSibling) {
if (c.nodeType !== 1) continue;
if (c.tagName.length == 2 && c.tagName.charAt(0) == "H")
sects.push(c);
else
findHeadings(c, sects);
}
return sects;
}
// Inicializa um array que monitora números de seção.
var sectionNumbers = [0,0,0,0,0,0];
// Agora itera pelos elementos de cabeçalho de seção que encontramos.
for(var h = 0; h < headings.length; h++) {
var heading = headings[h];
// Pula o cabeçalho de seção se estiver dentro do contêiner de TOC.
if (heading.parentNode == toc) continue;
// Descobre de que nível é o cabeçalho.
var level = parseInt(heading.tagName.charAt(1));
if (isNaN(level) || level < 1 || level > 6) continue;
// Incrementa o número de seção para esse nível de cabeçalho
// e zera todos os números de nível de cabeçalho inferiores.
sectionNumbers[level-1]++;
for(var i = level; i < 6; i++) sectionNumbers[i] = 0;

// Agora combina os números de seção de todos os níveis de cabeçalho
// para produzir um número de seção como 2.3.1.
var sectionNumber = sectionNumbers.slice(0,level).join(".")
// Adiciona o número de seção no título do cabeçalho de seção.
// Colocamos o número em um <span> para que possa ser estilizado.
var span = document.createElement("span");
span.className = "TOCSectNum";
span.innerHTML = sectionNumber;
heading.insertBefore(span, heading.firstChild);
// Encerra o cabeçalho em uma âncora nomeada para que possamos nos vincular a ele.
var anchor = document.createElement("a");
anchor.name = "TOC"+sectionNumber;
heading.parentNode.insertBefore(anchor, heading);
anchor.appendChild(heading);

// Agora cria um link para essa seção.
var link = document.createElement("a");
link.href = "#TOC" + sectionNumber;
// Destino do link
link.innerHTML = heading.innerHTML;
// O texto do link é o mesmo do cabeçalho
// Coloca o link em um div que pode ser estilizado de acordo com o nível.
var entry = document.createElement("div");
entry.className = "TOCEntry TOCLevel" + level;
entry.appendChild(link);
// E adiciona o div no contêiner de TOC.
toc.appendChild(entry);
}
})();
