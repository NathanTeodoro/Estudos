carros = ["audi", "subaru", "toyota", "bmw","maserati","mclaren"]
for carro in carros: 
    if carro == "bmw":print(carro.upper())
    else: print(carro.title())
#acima verificamos e se carro = bmw printa-lo em maiusculo
#caso nao printar somente a primeira letra
print(carros[3]=="bmw")# == se os valores dos 2 lados forem iguais devolve verdadeiro
#um sinal de igual e uma declaração dois sinais uma comparação
print(carros[2]=="SUBARU")
#direrencia-se letras maiusculas e minusculas
if carros[0].upper() == "AUDI":
    print("True")

if carros[5]!="lamborguini":
    print("where is lamborguini?")
    carros.append("lamborguini")
    print(carros[6])

if carros[0]=="audi" and carros[1]=="subaru":
    print("Começo de lista ok!")
#parenteses melhoram a legibilidade do codgo mas não são obrigatorios
if (carros[6]=="lamborguini") and (carros[5]=="mclaren"):
    print("Final de lista ok!")
#comparador and compara duas sentenças o resultado so sai verdadeiro ou falso se as duas forem verdadeiras ou falsas
idade_1 = 22
idade_2 = 27
idade_1 >= 21 or idade_2 >= 25 
print(idade_1 <= 21 or idade_2 >= 25 )
#nesse caso a cima uma declaração apenas precisa ser verdadeira para se retornar true ou false
pizza=["massa", "mussarela", "molho tomate", "oregano", "frango"]
print("peperoni" in pizza)
#para verificarmos se um item esta em uma lista usamos in
# item in lista  ==> true , false
requeijão="requeijão"
if requeijão not in pizza:
    print("falta requeijão")
#operador not usamos para verificar se um item ou estado não esta presente
#nesse caso faltou requejão em nossa pizza

