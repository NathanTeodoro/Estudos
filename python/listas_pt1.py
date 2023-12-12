my_list=[1,2,3,4,5,6,7]
my_list2=[1,2,3,'four','five','six', 7]
print(len(my_list))
print(my_list[1])
print(my_list2[3])
print(my_list2[3:])#terceiro ao ultimos itens da lista
print(my_list2[:3])#do inicio ao terceiro indice 
print(my_list[2:4])#imprime de certo indice a certo indice
print(my_list+[8,9])#não altera a original
print(my_list*2)#lista impressa 2 vezes 
my_list2.remove('four') #remove item da lista
print(my_list2)
motos=['honda', 'yamaha', 'suzuki', 'bajaj', 'houjue' , 'ducati']
motos.append('bmw') # add item na lista 
print("Boas opções primeira moto! : \n")
for moto in motos[:3]:print(moto.title())
print("\n")
caro=['ducati', 'bmw']
print(motos) 
#print("\n"+caro+" é cara POR ENQUANTO")
motos.insert(0,'harley davidson')
print(motos)
popped_motos=motos.pop()
print(motos)
print("\n"+popped_motos)
carros=['toyota','honda','hyundai','chevrolet','fiat']
carros.sort()#altera a lista permanentemente em ordem alfabetica
print(carros)
carros.sort(reverse=True) #reverte a ordem da lista
print(carros)
print(sorted(carros))#ordem alfabetica
carros.reverse()#inverte a ordem tambem
print(carros)
print(len(carros))#tamanho das listas
for carro in carros: print(carro) #laço for nesse caro imprimindo as itens de uma lista
for carro in carros: print(carro.title()+", e uma boa marca!"),print("Motores de primeira! "+carro.title()+".\n"), print("Carros populares, de luxo e esportivos!"+"\n")#erro de identação a mensagem e escrita no local errado
pizzas=["frango catupiry", "marguerita", "alho tostado"]
for pizza in pizzas:print(pizza+"\n")
for value in range(1,5):print(value)#range funciona inprimindo uma sequencia de numeros definidos
print("\n")
for value in range(1,6):print(value)#range aqui imprime o 5
numeros=list(range(1,6))#aqui colocamos range em uma lista
print(numeros)
par=list(range(0,11,2))#AQUI imprimimos numeros pares começando com zero terminando em 10(11-1) contando de 2 em 2
print(par)

quadrados=[]
for value in range(1,11): quadrados.append(value**2) #para cadar value(temp var) no range 1 - 10 , quadrados.addNovoValue(valor**ao quadrado)
print(quadrados)
digitos=[1,2,3,4,5,6,7,8,9,10]
print(digitos[1]**2)#cubo valor especifico do array
print(min(digitos))# minnimo    
print(max(digitos))# maximo 
print(sum(digitos))# soma

cube=[value**3 for value in range(1,11)]
print(cube)
minhascomidas=["ovo", "cuscus","hamburguer"]
comidasmozao=minhascomidas[:]
print("\n",minhascomidas,"\n",comidasmozao,"\n")
minhascomidas.append("beterraba")
comidasmozao.append("aveia")
print("\n",minhascomidas,"\n",comidasmozao,"\n")
#minhascomidas=comidasmozao /Dessa forma definimos uma lista aponta para outra
#print(minhascomidas)       /uma lista recebe valor de outra
#                           /não temos 2 listas independetes
