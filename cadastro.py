import json
from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route('/clientes.html')
def home():
    return render_template('painel.html')

@app.route('/processar_dados', methods=['POST'])
def processar_dados():
    nome = request.form['nome']
    email = request.form['email']
    telefone = request.form['telefone']
    empresa = request.form['empresa']
    status = request.form['status']
    
    # abre o arquivo JSON para leitura
    with open('clientes.json', 'r') as f:
        data = json.load(f)
    
    # adiciona os dados a um dicionário
    novo_cliente = {'nome': nome, 'email': email, 'telefone': telefone, 'empresa': empresa, 'status': status}
    
    # adiciona o dicionário à lista de clientes
    data['clientes'].append(novo_cliente)
    
    # salva os dados no arquivo JSON
    with open('clientes.json', 'w') as f:
        json.dump(data, f, indent=4)
    
    return "Os dados foram processados com sucesso"

if __name__ == '__main__':
    # cria um arquivo JSON vazio para guardar os dados
    with open('clientes.json', 'w') as f:
        json.dump({'clientes': []}, f, indent=4)
    
    app.run(port=5500)
