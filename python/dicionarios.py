alien_0={"color":"Green","points":5}
print(alien_0["color"])
print(alien_0["points"])
#em python um dicionario e apresentado entre {} os valores
#armazenados podem ser de qualquer tipo podendo ser ate outro
#dicionario apresentados assim:
#nome do dicionario={"valor":"valor associado"}
#suponhamos que nosso jogador golpeie o alien declarado a cima
novos_pontos=alien_0["points"]
print("você ganhou "+str(novos_pontos)+" pontos")
alien_0['xposition'] = 0
alien_0['yposition'] = 25
print(alien_0)
#como descrito acima podemos adicionar novos valores
#nome_dicionario['chave']=valor
alien_1={}
alien_1["color"] = "red"
alien_1['points'] = 10
#acima criamos um dicionario vazio
#em seguida adicionamos os valores
print("the alien is "+alien_0['color'])

alien_0['color'] = 'Yellow'
print("the alien now is "+alien_0['color']+'.')

alien_0['speed'] = 'medium'
print("Original x-position:" + str(alien_0['xposition']))

if alien_0['speed'] == 'slow': x_increment = 1 
elif alien_0['speed'] == 'medium' : x_increment = 2 
else : x_increment = 3
#se não for devagar nem media a velocidade sera rapida

alien_0['xposition'] = alien_0['xposition'] + x_increment
#a posição x era = 0 agora ficará 2
print("new position is " + str(alien_0['xposition']))

#podemos remover valores dos dicionarios 
del alien_0['points']
print(alien_0)
#apenas a chave com valor selecionado são excluidos
alien_0['points']=5

favorite_languages = {
    'Nathan' : 'python' ' javascript' , 'Esther' : 'R' , 'Betânia' : 'C' , 'Rosinêa' : 'C#' , 'Maria Heloisa' : 'Javascript' ,
}

print("Nathan favorite language is " + 
      favorite_languages['Nathan'].title()+".")
#aprenda indentação e a faça de forma limpa


#percorrendo dicionarios com laços
user_0 = {
    'username' : 'Nathan' , 'last' : 'teodoro'
}

for key , value in user_0.items(): 
    print("\nkey " + key)
    print("value: " + value+"\n")

#PARA cada chave / valor, no dicionarios de itens ele 
#imprimirá o nome da chave e dados armazenados no valor

for name , language in favorite_languages.items(): 
    print(name.title()+ " linguagem favorita e " +
           language.title()+". \n")

#para cada nome e linguagem no dicionario imprimirá 
#nome e a linguagem

for name in favorite_languages.keys() : 
    print(name.title())
#o metodo keys pode deixar o codigo mais legivel

friends = ["Betânia" , "Maria Heloisa"]
for name in favorite_languages.keys():
    print(name.title())
for name in friends:
    print("Hi "+name.title()+", I see your favorite language is "
           +favorite_languages[name].title() + "!")
#pra nome em linguagens favoritas(chave):printe nome em titulo
#para nome em amigos
#printe str + nome titulo + str + linguagem favorita[indice nome]...
#se mudassemos linguagem favorita["Nathan"] imprimiria Python a invés de c e javascript
print('\n nomes: \n')
for name in sorted(favorite_languages.keys()):
    print(name.title())
#aqui para cada nome nas chaves do dicionario printamos nome e a chave

print('\n linguagens: \n')
for languages in favorite_languages.values():
    print(languages.title())
#acima temos um laço percorrendo o dicionario printando o valor de cada chave
#se tivessemos itens repetidos no dicionario poderiamos usar set()
#com set() so imprimiriamos os n repetidos
#set(favorite_languages.values())
alien_2 = {'color': 'green', 'points':15}

aliens = [alien_0, alien_1, alien_2]
for a in aliens:print(a)

#aqui imprmimos 3 aliens diferentes

#abaixo criaremos 30 aliens
for alien_n in range(30):
    new_alien = {'color':'green', 'points':5, 'speed':'slow'}
    aliens.append(new_alien)
#basicamente cria 3 aliens e armazena eles no array aliens

print("\n ..::.. \n")

for alien in aliens[:5]:
    print(alien)
#printamos os 5 primeiros aliens para vermos os novos aliens
#criados
print("total de aliens :" +str(len(aliens)))
#todos os aliens tem a mesma caracteristica mas o python
#considera cada um como um obj diferente e nos permite
#modificá-lo
for alien in aliens[0:3]:
    if alien['color'] == 'green' : 
     alien['color'] = 'yellow'
     alien['speed'] = 'mediun'
     alien['points'] = 10

print("-----------------------")

for alien in aliens[4:9]:
    if alien['color'] == 'green':
        alien['color'] = 'red'
        alien['speed'] = 'fast'
        alien['points'] = 15
    
for alien in aliens[0:10]:
    print(alien)

users = {
    "aeinstein":{
        'first':'albert', 'last' : 'einstein', 'location' : 'princeton'
    }, 
    "mcurrie":{
        'first' : 'marie' , 'last' : 'curie' , 'location' : 'paris'
    }
}
 
for username, user_info in users.items():
    print('\n Username:' + username) 
    fullname = user_info['first']+' '+user_info['last']
    location = user_info['location']
    print('fullname: ' + fullname.title())
    print('\nLocation :' + location.title())
#--------------------------
#pyhton associou usuarios = 1° chave do dicionario
#e tambem associou info usuarios a o dicionario subsequente
#nome sobrenome e localização
#--------------------------
#para usuarios em users e informação_de usuarios em users
#printamos
#atribuimos duas chaves a uma variavel nomecompleto
#atribuimos uma  chaves a uma variavel localização
#printamos o nome inteiro e a localização
