#O INPUT pausa o programa e armazena os dados fornecidos
#em uma variavel
message = input("Diga algo que mandarei de volta: \n")
#aqui colheremos a mensagem essa string e o texto do nosso prompt
print("================\n\t"
            +message+
     "\n================\n")
#aqui imprimiremos nossa mensagem
age = input("quantos anos você tem?")
age = int(age)
if age >= 18:
    print("Tem habilitação?")
else:
    print("pretende tirar?")

if age %2 == 0:
    print("idade par")
else:
    print("idade impar")


msg=' ... '
prompt = "say something \n"
while msg != "quit": 
    msg = input("digite : ") 
    print(str(msg))