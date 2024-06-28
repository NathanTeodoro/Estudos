from selenium import webdriver
from selenium.webdriver.common.by import By
import sys
from PIL import Image

driver = webdriver.Chrome()
driver.maximize_window()
driver.implicitly_wait(time_to_wait=20)
links=[
"https://querobolsa.com.br/escolas/spin-educacional-rio-das-ostras"
,"https://querobolsa.com.br/escolas/educandario-rio-das-ostras"
,"https://querobolsa.com.br/escolas/colegio-moderno-38e059a3-f0e3-4916-9eb5-6fe049a4b09b"
,"https://querobolsa.com.br/escolas/rh-positivo-centro-educacional"
,"https://querobolsa.com.br/escolas/centro-educacional-pintando-7"
,"https://querobolsa.com.br/escolas/centro-educacional-majoris"
,"https://querobolsa.com.br/escolas/centro-educacional-mourao-ferreira"
,"https://querobolsa.com.br/escolas/escola-fernandes-e-almeida-media-de-formacao-tecnica-e-profissional"
,"https://querobolsa.com.br/escolas/cero-educacional"
,"https://querobolsa.com.br/escolas/176141-escola-tecnica-status"
,"https://querobolsa.com.br/escolas/centro-educacional-trilhar"
,"https://querobolsa.com.br/escolas/60167-centro-educacional-mundo-encantado"
,"https://querobolsa.com.br/escolas/281517-colegio-conceito"
,"https://querobolsa.com.br/escolas/creche-escola-amor-de-mae"
,"https://querobolsa.com.br/escolas/centro-educacional-ostra-do-saber"
,"https://querobolsa.com.br/escolas/escola-espaco-montessori-niel"
,"https://querobolsa.com.br/escolas/centro-educacional-coracao-valente"
,"https://querobolsa.com.br/escolas/escola-crista-geracao-de-samuel"
,"https://querobolsa.com.br/escolas/escola-creche-arte-e-mimo-centro-educacional-soares-oliveira?grade="
,"https://querobolsa.com.br/escolas/centro-educacional-novo-alvorecer?grade="
,"https://querobolsa.com.br/escolas/centro-educacional-casulo?grade="
,"https://querobolsa.com.br/escolas/220686-centro-educacional-cristao?grade="
,"https://querobolsa.com.br/escolas/175790-escola-tecnica-jose-rodrigues-da-silva?grade="
,"https://querobolsa.com.br/escolas/centro-de-formacao-artistica-de-musica-danca-e-teatro?grade="
,"https://querobolsa.com.br/escolas/colegio-cnec-cenecista-rio-das-ostras?grade="
,"https://querobolsa.com.br/escolas/colegio-cpb-peixoto-centro-educacional-fantasia-bastos-peixoto?grade="
,"https://querobolsa.com.br/escolas/centro-integrado-de-ensino-educarte?grade="
,"https://querobolsa.com.br/escolas/cebasa?grade="
,"https://querobolsa.com.br/escolas/senac-rio-das-ostras?grade="
,"https://querobolsa.com.br/escolas/104145-centro-educacional-pequeno-aprendiz?grade="
,"https://querobolsa.com.br/escolas/nucleo-educacional-estrela-do-saber?grade="
,"https://querobolsa.com.br/escolas/centro-educacional-serra-e-mar?grade="
,"https://querobolsa.com.br/escolas/instituto-de-educacao-ebenezer?grade="
,"https://querobolsa.com.br/escolas/colegio-faed?grade="
,"https://querobolsa.com.br/escolas/colegio-pre-universitario-mosaico?grade="
,"https://querobolsa.com.br/escolas/escola-creche-espaco-baby?grade="
,"https://querobolsa.com.br/escolas/says-centro-de-ensino?grade="
,"https://querobolsa.com.br/escolas/instituto-nossa-senhora-da-gloria-rio-das-ostras-unidade-iv?grade="
,"https://querobolsa.com.br/escolas/centro-educacional-soares-oliveira?grade="
,"https://querobolsa.com.br/escolas/escola-creche-arte-e-mimo-centro-educacional-soares-oliveira?grade="
,"https://querobolsa.com.br/escolas/centro-educacional-novo-alvorecer?grade="
,"https://querobolsa.com.br/escolas/centro-educacional-casulo?grade="
,"https://querobolsa.com.br/escolas/220686-centro-educacional-cristao?grade="
,"https://querobolsa.com.br/escolas/175790-escola-tecnica-jose-rodrigues-da-silva?grade="
,"https://querobolsa.com.br/escolas/centro-de-formacao-artistica-de-musica-danca-e-teatro?grade="
,"https://querobolsa.com.br/escolas/colegio-cnec-cenecista-rio-das-ostras?grade="
,"https://querobolsa.com.br/escolas/colegio-cpb-peixoto-centro-educacional-fantasia-bastos-peixoto?grade="
,"https://querobolsa.com.br/escolas/centro-integrado-de-ensino-educarte?grade="
,"https://querobolsa.com.br/escolas/cebasa?grade="
,"https://querobolsa.com.br/escolas/senac-rio-das-ostras?grade="
,"https://querobolsa.com.br/escolas/104145-centro-educacional-pequeno-aprendiz?grade="
,"https://querobolsa.com.br/escolas/nucleo-educacional-estrela-do-saber?grade="
,"https://querobolsa.com.br/escolas/centro-educacional-serra-e-mar?grade="
,"https://querobolsa.com.br/escolas/instituto-de-educacao-ebenezer?grade="
,"https://querobolsa.com.br/escolas/colegio-faed?grade="
,"https://querobolsa.com.br/escolas/colegio-pre-universitario-mosaico?grade="
,"https://querobolsa.com.br/escolas/escola-creche-espaco-baby?grade="
,"https://querobolsa.com.br/escolas/says-centro-de-ensino?grade="
,"https://querobolsa.com.br/escolas/instituto-nossa-senhora-da-gloria-rio-das-ostras-unidade-iv?grade="
,"https://querobolsa.com.br/escolas/centro-educacional-soares-oliveira?grade="

]
for i in links:
    driver.get(i)
    numeros = driver.find_elements(By.XPATH,'//li[@class="school-location__address-item"]')
    for j in numeros:
            print(j.text)
driver.quit()
#def p:
#    f imagem, titulo in zip(, titulos):
#       imagem.screenshot('/home/teodoros/Documentos/programing/python/crawler/imagens/'
#                         +str(titulo.text)+'.png')
#p
#tag[@ributo = 'valor']
#//imgdata-testid = "image"]
#//h2[ta-testid = "product-title"]
#//p[@ta-testid = "price-value"]