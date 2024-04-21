import datetime as datetime


print(datetime.time(21))
date1 = datetime.time(21).hour
date = datetime.datetime.now().hour
print(date)
data = '1'
if date == date1:
    print("e igual${date}")
else:
    print('não e igual {}'.format(data))