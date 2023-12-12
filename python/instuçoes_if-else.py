idade = 17
if idade >= 18:print("Você pode votar!")
else:print("Você e muito novo para votar!")

print("\n")

idade2 = 3
if idade2 < 4 : print("sua entrada custará R$0")
elif idade2 > 18 : print("sua entrada custará R$10")
else: print("sua entrada custará R$5")

print("\n")

idade3 = 69
if idade3 >= 18 and idade3 < 65  : preco = 100
elif idade3 < 18 : preco = " 0! Vocẽ nao pode entrar"
elif idade3 >= 65 :preco = " 0! Sua entrada e grátis"
#podemos omitir o else!
print("Sua entrada custa R$"+str(preco)+".")

print("\n")

extra_pizza=["tomate seco","mussarela", "frango","alho","brocolis","manjericão","parmesão","provolone"]
if "mussarela" in extra_pizza : print("adicionaremos mussarela extra")
if "frango" in extra_pizza : print("adicionaremos frango extra")
print("Montaremos sua pizza!")
#No exemplo acima executamos 2 testes logicos que retornados em true executaremos os codigos seguintes

#Diferente da estrutura acima onde os testes são feitos porem uma decisão e tomada nesse exemplo os dois codigos sao executados 
print("\n")

for extra in extra_pizza: 
    if extra == "provolone" :print("não temos provolone.")
    else: print("Adicionaremos "+extra+".")
# acima verificamos se o extra e igual a parmesão se for diferente
# adicionaremos se for não
print('\n')
extra_disponiveis = ["champignon","azeitona","mussarela", "frango","brocolis","manjericão","parmesão", "provolone"]

for extra_disponivel in extra_disponiveis : 
    if extra_disponivel in extra_disponiveis:
        print("Adicionaremos "+extra_disponivel+".")

    if extra_disponivel not in extra_disponiveis:
        print("Desculpa não temos "+extra_disponivel+".")