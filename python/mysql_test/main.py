import mysql.connector as mysql
def mysql_con(host,user,password,database):
    connection = mysql.connect(
        host = host,
        user= user,
        password = password,
        database=database
    )
    return connection

connection = mysql_con('localhost', 'root', '', 'test')

query = '''
CREATE TABLE clientes(
    id  INT PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(15),
    email VARCHAR(100)
    )
'''

query2 = '''
    INSERT INTO clientes VALUES
    (1001 , 'Nathan', '229898690', 'nathan@.com'),
    (1002 , 'Esther', '217658233', 'esther@.com'),
    (1003 , 'José', '227678578', 'jose@.com'),
    (1004 , 'Eva', '227568756', 'eva@.com'),
    (1005 , 'Sansão', '22756656', 'sansao@.com');
'''

query2_1 = '''
    INSERT INTO clientes VALUES
    (1001, 'Nathan', '262958595', 'nathan@.com')
'''

query3='''
    SELECT * FROM clientes;
'''
query4='''
    DELETE FROM clientes WHERE id = 1001
'''
query5='''
    UPDATE clientes SET telefone = '7777777' WHERE id = 1005
'''
cursor = connection.cursor()
cursor.execute(query3)
#
# connection.commit()     #========>>> apos inserir sempre connection.commit()
result = cursor.fetchall()
for r in result:
    print(r)
cursor.close()