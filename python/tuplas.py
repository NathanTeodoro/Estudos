dimensao=(200,50) #isso e uma tupla
print(dimensao[0])   # valores de tuplas não podem ser alterados
print(dimensao[1])   # durante a execução do programa
print(dimensao[2])   # so podem ser declarados uma vez na inicializção
#dimension[0]+250 =>ERROR  # da vaiavel
print("dimensao original: ")
for i in dimensao:print(i)
print("dimensao modificada: ")
dimensao=(400,200)   #aqui declaramos outra tupla com o mesmo nome
for i in dimensao:print(i)