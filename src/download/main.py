import math
from turtle import *

def heart(x):
    return 15 * math.sin(x) ** 3

def heart1(x):
    return 12 * math.cos(x) - 5 * math.cos(2 * x) - 2 * math.cos(3 * x) - math.cos(4 * x)

speed(0)  
bgcolor('black')

# Adicionar texto "Feliz Dia dos Namorados"
penup()
goto(0, 50) 
color('white')
write("Feliz Dia dos Namorados", font=('Arial', 24, 'bold'), align='center')

# Adicionar texto "Minha Gostosa❤️"
goto(0, -10)
write("Minha Gostosa❤️", font=('Arial', 24, 'bold'), align='center')
goto(0, -50)
color("red")
write("Eu te amo",font=('Arial', 24, 'bold'), align='center')
# Desenhar o coração
penup()
goto(heart(0) * 20, heart1(0) * 20)  # Mover para a posição inicial do coração sem desenhar
pendown()
color('red')
for i in range(6000):
    goto(heart(i) * 20, heart1(i) * 20)
    dot(2, 'red')  # Desenha um ponto no caminho para criar um coração cheio

hideturtle()  # Esconde o cursor da tartaruga
done()
