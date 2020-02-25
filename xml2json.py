import os.path
import xml.dom.minidom
import json
import random
from flask import render_template


def CreateMapJsonFile(geoxml_path, geojson_path):
    result = {'data':{'Floors':[]}}
    floors = result['data']['Floors']
    dom = xml.dom.minidom.parse(geoxml_path)
    geometry = dom.documentElement
    rooms = geometry.getElementsByTagName('rooms')[0]
    room_list = rooms.getElementsByTagName('room')
    floor = {"_id":1, "Name":"F1", "High":5, "FuncAreas":[],
        "PubPoint":[]}
    FuncAreas = floor['FuncAreas']
    for room in room_list:
        subrooms = room.getElementsByTagName('subroom')
        for subroom in subrooms:
            FuncArea = {'Category': random.randint(101, 109)}
            FuncAreas.append(FuncArea)
            FuncArea['Outline'] = [[[]]]
            Outline = FuncArea['Outline'][0][0]

    floors.append(floor)
    print(json.dumps(result))
    

def map_xml2json(simname):
    simdir = f"./simulations/{simname}"
    inipath = f"{simdir}/ini.xml"
    dom = xml.dom.minidom.parse(inipath)
    root = dom.documentElement
    geometry = root.getElementsByTagName('geometry')[0]
    geoname_xml = geometry.firstChild.data
    geoname_json = os.path.splitext(geoname_xml)[0]+'.json'
    geoxml_path = f"{simdir}/{geoname_xml}"
    geojson_path = f"{simdir}/{geoname_json}"
    if(not os.path.isfile(geojson_path)):
        CreateMapJsonFile(geoxml_path, geojson_path)
    return render_template('./simulate.html', datafile=geojson_path)
    
    


