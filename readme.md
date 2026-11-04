If/else

Criei uma composição interativa em que o rato desenha formas que mudam consoante a posição do cursor e o clique.  Escolhi um contraste simples entre dois lados do ecrã: o lado esquerdo é quente e redondo, o lado direito é frio e mais geométrico.

O código tem duas funções principais. A função setup() corre uma só vez no início, em que cria a tela com o tamanho da janela (windowWidth e windowHeight), pintei o fundo o mais escuro possível e desativei o contorno das formas. 
E a função draw() repete-se continuamente, cerca de 60 vezes por segundo, e é aqui que estão as condições todas! No início do draw() fiz um retângulo escuro, quase que transparente, por cima de tudo, o que faz com que as formas desenhadas antes desapareçam aos poucos e crie um efeito de rasto.
 
 A primeira condição é um if / else com mouseX, o programa verifica se o rato está na metade esquerda do ecrã (mouseX < width / 2) e, se estiver, desenha círculos laranja; caso contrário (else), desenha quadrados azuis. 
A segunda é um if com mouseIsPressed, em que quando o botão do rato está a ser pressionado, aparece um círculo grande, branco e semitransparente à volta do cursor.

Para perceber algumas funções utilizei o site oficial do p5.js, e foi útil sobretudo para perceber como poderia usar e entender a diferença entre a ellipse() e rect(), tal como o Claude para questões mais específicas que o site não me conseguia esclarecer.

Matilde Brandão nº2024332, Matilde Brandão.