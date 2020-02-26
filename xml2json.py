import os.path
import xml.dom.minidom
import json
import random
from flask import render_template

from utils import graham_scan, GetMaxRect

# 将一个 subroom 解析成一个 FuncArea 对象
# subroom 是一个 xml.dom.minidom.Element 类型
def parseSubroom(subroom):
    subroom_id = int(subroom.getAttribute('id'))
    polygons = subroom.getElementsByTagName('polygon')
    sub_funcareas = []
    for polygon in polygons:
        t_caption = polygon.getAttribute('caption')
        sub_funcarea = {}
        if(subroom_id):
            sub_funcarea['_id'] = subroom_id
        sub_funcarea['Wall'] = 'subroom'
        sub_funcarea['Open'] = True
        sub_funcarea['Outline'] = [[]]
        points = []
        vertexs = polygon.getElementsByTagName('vertex')
        for vertex in vertexs:
            points.append(int(vertex.getAttribute('px')))
            points.append(int(vertex.getAttribute('py')))
        sub_funcarea['Outline'][0].append(points)
        sub_funcareas.append(sub_funcarea)
    return sub_funcareas

# 求FuncAreas的外边界
def GetFloorOutline(FuncAreas):
    dots = []
    for FuncArea in FuncAreas:
        # print("funcarea :", FuncArea['Outline'][0][0])
        # print('aaaa:', FuncArea['Outline'][0][0])
        i = 0
        t_outline = FuncArea['Outline'][0][0]
        while i < len(t_outline):
            dots.append((int(t_outline[i]), int(t_outline[i+1])))
            i += 2
    # print('t0 ',len(dots))
    # print(dots)
    # result = graham_scan(dots)
    result = GetMaxRect(dots)
    # print('t1 ', len(result))
    return result

# 构建 Floor 对象
def CreateFloor(FuncAreas):
    Floor = {"_id":1, "Name":"F1", "High":5, "FuncAreas":[],
        "PubPoint":[]}
    # print(FuncAreas)
    for FuncArea in FuncAreas:
        Floor['FuncAreas'].append(FuncArea)
    Floor['Outline'] = [[GetFloorOutline(Floor['FuncAreas'])]]
    return Floor

# TODO: 构建 Building 对象
def CreateBuilding(Floors):
    building = {"Outline":[[[]]]}
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
            sub_funcareas = parseSubroom(subroom)
            FuncAreas += sub_funcareas

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
    
    


