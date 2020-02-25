/**
 * Created by gaimeng on 2015/11/3.
 * Some themes for test
 */

//----------------------------theme--------------------------------------

var default2dTheme = {
    name: "test", //theme's name
    background: "#F2F2F2", //background color

    //building's style
    building: {
        color: "#000000",
        opacity: 0.1,
        transparent: true,
        depthTest: false
    },

    //floor's style
    floor: {
        color: "#E0E0E0",
        opacity: 1,
        transparent: false
    },

    //selected room's style
    selected: "#ffff55",

    //rooms' style
    room: function (type, category) {
        var roomStyle;
        if(!category) {
            switch (type) {

                case 100: //hollow. u needn't change this color. because i will make a hole on the model in the final version.
                    return {
                        color: "#F2F2F2",
                        opacity: 0.8,
                        transparent: true
                    }
                case 300: //closed area
                    return {
                        color: "#AAAAAA",
                        opacity: 0.7,
                        transparent: true
                    };
                case 400: //empty shop
                    return {
                        color: "#D3D3D3",
                        opacity: 0.7,
                        transparent: true
                    };
                default :
                    break;
            }
        }

        switch(category) {
            case 101: //food
                roomStyle = {
                    color: "#1f77b4",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 102: //retail
                roomStyle = {
                    color: "#aec7e8",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 103: //toiletry
                roomStyle = {
                    color: "#ffbb78",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 104: //parent-child
                roomStyle = {
                    color: "#98df8a",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 105: //life services
                roomStyle = {
                    color: "#bcbd22",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 106: //education
                return {
                    color: "#2ca02c",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 107: //life style
                roomStyle = {
                    color: "#dbdb8d",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 108: //entertainment
                roomStyle = {
                    color: "#EE8A31",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 109: //others
                roomStyle = {
                    color: "#8c564b",
                    opacity: 0.7,
                    transparent: true
                };
            default :
                roomStyle = {
                    color: "#c49c94",
                    opacity: 0.7,
                    transparent: true
                };
                break;
        }
        return roomStyle;
    },

    //room wires' style
    strokeStyle: {
        color: "#666666",
        opacity: 0.5,
        transparent: true,
        linewidth: 1
    },

    fontStyle:{
        opacity: 1,
        textAlign: "center",
        textBaseline: "middle",
        color: "#333333",
        fontsize: 13,
        fontface: "'Lantinghei SC', 'Microsoft YaHei', 'Hiragino Sans GB', 'Helvetica Neue', Helvetica, STHeiTi, Arial, sans-serif  "
    },

    pubPointImg: {

        "11001": System.imgPath+"/toilet.png",
        "11002": System.imgPath+"/ATM.png",
        "21001": System.imgPath+"/stair.png",
        "22006": System.imgPath+"/entry.png",
        "21002": System.imgPath+"/escalator.png",
        "21003": System.imgPath+"/lift.png"
    }
}
var default3dTheme = {
    name: "test", //theme's name
    background: "#F2F2F2", //background color

    //building's style
    building: {
        color: "#000000",
        opacity: 0.1,
        transparent: true,
        depthTest: false
    },

    //floor's style
    floor: {
        color: "#E0E0E0",
        opacity: 1,
        transparent: false
    },

    //selected room's style
    selected: "#ffff55",

    // walls' style
    subroom_id: 0,
    wall: function(walltype){
        subroom_colors = [
            0xfffac8, 0xf2e282, 0xe7b24c,
            0xe1903e, 0xff724e];
        var wallstyle = { 
            color: 0x00bfff, 
            side:THREE.DoubleSide, 
            transparent: true, 
            opacity:0.7
        }; 
        switch(walltype){
            case 'room':
                wallstyle.color = 0x4bb5d9;
                break;
            case 'subroom':
                opacity = 0.45;
                wallstyle.color = subroom_colors[(this.subroom_id++)%subroom_colors.length];
                break;
        }
        return wallstyle;
    },

    // walls' wireframe style
    wallline: function(walltype){
        var walllinestyle = {
            color: 0x101010,
            opacity: 0.9,
            transparent: true,
            linewidth: 2
        }
        switch(walltype){
            case 'room':
                break;
            case 'subroom':
                break;
        }
        return walllinestyle;
    },

    //rooms' style
    room: function (type, category) {
        var roomStyle;
        if(!category) {
            switch (type) {

                case 100: //hollow. u needn't change this color. because i will make a hole on the model in the final version.
                    return {
                        color: "#F2F2F2",
                        opacity: 0.8,
                        transparent: true
                    }
                case 300: //closed area
                    return {
                        color: "#AAAAAA",
                        opacity: 0.7,
                        transparent: true
                    };
                case 400: //empty shop
                    return {
                        color: "#D3D3D3",
                        opacity: 0.7,
                        transparent: true
                    };
                default :
                    break;
            }
        }

        switch(category) {
            case 101: //food
                roomStyle = {
                    color: "#1f77b4",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 102: //retail
                roomStyle = {
                    color: "#aec7e8",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 103: //toiletry
                roomStyle = {
                    color: "#ffbb78",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 104: //parent-child
                roomStyle = {
                    color: "#98df8a",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 105: //life services
                roomStyle = {
                    color: "#bcbd22",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 106: //education
                roomStyle = {
                    color: "#2ca02c",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 107: //life style
                roomStyle = {
                    color: "#dbdb8d",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 108: //entertainment
                roomStyle = {
                    color: "#EE8A31",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 109: //others
                roomStyle = {
                    color: "#8c564b",
                    opacity: 0.7,
                    transparent: true
                };
            default :
                roomStyle = {
                    color: "#c49c94",
                    opacity: 0.7,
                    transparent: true
                };
                break;
        }
        return roomStyle;
    },

    //room wires' style
    strokeStyle: {
        color: "#5C4433",
        opacity: 0.5,
        transparent: true,
        linewidth: 2
    },

    fontStyle:{
        color: "#231815",
        fontsize: 40,
        fontface: "Helvetica, MicrosoftYaHei "
    },

    pubPointImg: {

        "11001": System.imgPath+"/toilet.png",
        "11002": System.imgPath+"/ATM.png",
        "21001": System.imgPath+"/stair.png",
        "22006": System.imgPath+"/entry.png",
        "21002": System.imgPath+"/escalator.png",
        "21003": System.imgPath+"/lift.png"
    }
}


var testTheme = {

    name: "picGenTheme", //theme's name
    background: "#F2F2F2", //background color

    //building's style
    building: {
        color: "#000000",
        opacity: 0.1,
        transparent: true,
        depthTest: false
    },

    //floor's style
    floor: {
        color: "#E0E0E0",
        opacity: 1,
        transparent: false
    },

    //selected room's style
    selected: "#fffdb0",

    //rooms' style
    room: function (type, category) {
        var roomStyle;
        if(category == undefined) {
            switch (type) {

                case "100": //hollow. u needn't change this color. because i will make a hole on the model in the final version.
                    return {
                        color: "#F2F2F2",
                        opacity: 0.8,
                        transparent: true
                    }
                case "300": //closed area
                    return {
                        color: "#D3D3D3",
                        opacity: 0.7,
                        transparent: true
                    };
                case "400": //empty shop
                    return {
                        color: "#D3D3D3",
                        opacity: 0.7,
                        transparent: true
                    };
                default :
                    break;
            }
        }

        switch(category) {
            case 101: //food
                roomStyle = {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 102: //retail
                roomStyle = {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 103: //toiletry
                roomStyle = {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 104: //parent-child
                roomStyle = {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 105: //life services
                roomStyle = {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 106: //education
                return {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 107: //life style
                roomStyle = {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 108: //entertainment
                roomStyle = {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
                break;
            case 109: //others
                roomStyle = {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
            default :
                roomStyle = {
                    color: "#D3D3D3",
                    opacity: 0.7,
                    transparent: true
                };
                break;
        }
        return roomStyle;
    },

    //room wires' style
    strokeStyle: {
        color: "#5C4433",
        opacity: 0.5,
        transparent: true,
        linewidth: 1
    },

    fontStyle:{
        color: "#231815",
        fontsize: 0,
        fontface: "Helvetica, MicrosoftYaHei "
    },

    pubPointImg: {

        "11001": System.imgPath+"/toilet.png",
        "11002": System.imgPath+"/ATM.png",
        "21001": System.imgPath+"/stair.png",
        "22006": System.imgPath+"/entry.png",
        "21002": System.imgPath+"/escalator.png",
        "21003": System.imgPath+"/lift.png"
    }

}