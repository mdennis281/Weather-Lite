
f=open('in.txt')
x = f.read()
f.close()
x=x.replace('\\','\\\\')
x=x.replace('\n','\\n')
f=open('out.txt','w')
f.write('console.log("'+x+'");')
f.close()
x=x.replace('\\n','\n')
print(x)