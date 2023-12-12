from selenium import webdriver
from selenium.webdriver.common.by import By
import sys
from PIL import Image
import uuid

driver = webdriver.Chrome()
driver.implicitly_wait(time_to_wait=120)
driver.maximize_window()
#driver.get('https://www.magazineluiza.com.br/busca/iphone/')

itens = [
'fones+de+ouvido',
'cabos+usb',
'video+game',
'video+game+xbox',
'video+game+playstation',
'video+game+nintendo',
'video+game+megadrive',
'Celular',
'Celular+iphone',
'Celular+Xiaomi',
'Celular+multilaser',
'Celular+positivo',
'Celular+motorola',
'Celular+lenovo',
'Celular+philco',
'Celular+Microsoft',
'Celular+nokia',
'Tablet',
'Roteadore',
'Notebook',
'Carregador',
'tv'
]
for i in itens:
        driver.implicitly_wait(time_to_wait=120)
        driver.get('https://www.magazineluiza.com.br/busca/'+str(i)+'/')
        id = uuid.uuid1()
        titulos = driver.find_elements(By.XPATH,'//h2[@data-testid="product-title"]')
        valores = driver.find_elements(By.XPATH,'//p[@data-testid="price-value"]')
        imagens = driver.find_elements(By.XPATH,'//img[@data-testid = "image"]')

        for titulo,valor,imagem in zip(titulos,valores ,imagens):
                produtos = { 'id' : id.hex,
                        'titulo' : titulo.text,
                        'valor' : valor.text,
                        'img' : titulo.text+".png"}
                
                sys.stdout = open('produtos.txt','a').write(str(produtos))
                imagem.screenshot('/home/teodoros/Documentos/programing/python/crawler/imagens/'
                                +str(titulo.text)+'.png')


#def p():
#    for imagem, titulo in zip(, titulos):
#         imagem.screenshot('/home/teodoros/Documentos/programing/python/crawler/imagens/'
#                           +str(titulo.text)+'.png')
#p()
#tag[@atributo = 'valor']
#//img[@data-testid = "image"]
#//h2[data-testid = "product-title"]
#//p[@data-testid = "price-value"]