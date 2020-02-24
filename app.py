from flask import Flask, render_template, request
import os

def map_xml2json(simname):
    return "get " + simname

app = Flask(__name__, static_url_path='', static_folder='.')

@app.route('/')
def index():
    simulation_path = "./simulations"
    simulations = os.listdir(simulation_path)
    return render_template('./index.html', simulations=simulations)

@app.route('/simulation', methods=['POST'])
def simulation():
    return request.form['simname']
    return map_xml2json(request.form['simname'])

app.run(host='0.0.0.0', port=8080, debug=True)



