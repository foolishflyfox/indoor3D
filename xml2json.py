import os.path
import xml.dom.minidom
import json
import random
from flask import render_template

# TODO: 将一个 subroom 解析成一个 FuncArea 对象
# subroom 是一个 xml.dom.minidom.Element 类型
def parseSubroom(subroom):
    FuncArea = {'FuncArea': True}
    return FuncArea

# TODO: 构建 Floor 对象
def CreateFloor(FuncAreas):
    Floor = {"_id":1, "Name":"F1", "High":5, "FuncAreas":[],
        "PubPoint":[]}
    for FuncArea in FuncAreas:
        Floor['FuncAreas'].append(FuncArea)
    return Floor

# TODO: 构建 Building 对象
def CreateBuilding(Floors):
    building = {'building': True}
    return building

def CreateMapJsonFile(geoxml_path, geojson_path):
    result = {'data':{'Floors':[]}}
    Floors = result['data']['Floors']

    dom = xml.dom.minidom.parse(geoxml_path)
    geometry = dom.documentElement
    # 一个 map 只能有一个rooms
    rooms = geometry.getElementsByTagName('rooms')[0]
    room_list = rooms.getElementsByTagName('room')
    
    FuncAreas = []
    for room in room_list:
        subrooms = room.getElementsByTagName('subroom')
        for subroom in subrooms:
            FuncArea = parseSubroom(subroom)
            FuncAreas.append(FuncArea)

    Floor = CreateFloor(FuncAreas)
    Floors.append(Floor)
    result['data']['building'] = CreateBuilding(Floors)
    # print(json.dumps(result, indent=2))
    with open(geojson_path, 'w') as output:
        json.dump(result, output, indent=2)
    

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
    
    


