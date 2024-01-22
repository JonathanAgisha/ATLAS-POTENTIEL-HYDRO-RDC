ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PuissancePotentielleMW_1 = new ol.format.GeoJSON();
var features_PuissancePotentielleMW_1 = format_PuissancePotentielleMW_1.readFeatures(json_PuissancePotentielleMW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuissancePotentielleMW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuissancePotentielleMW_1.addFeatures(features_PuissancePotentielleMW_1);
var lyr_PuissancePotentielleMW_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuissancePotentielleMW_1, 
                style: style_PuissancePotentielleMW_1,
                interactive: true,
    title: 'Puissance Potentielle[MW]<br />\
    <img src="styles/legend/PuissancePotentielleMW_1_0.png" /> 0 - 0.5<br />\
    <img src="styles/legend/PuissancePotentielleMW_1_1.png" /> 0.5 - 10<br />\
    <img src="styles/legend/PuissancePotentielleMW_1_2.png" /> 10 - 37326<br />'
        });
var format_RDC_2 = new ol.format.GeoJSON();
var features_RDC_2 = format_RDC_2.readFeatures(json_RDC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RDC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RDC_2.addFeatures(features_RDC_2);
var lyr_RDC_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RDC_2, 
                style: style_RDC_2,
                interactive: true,
                title: '<img src="styles/legend/RDC_2.png" /> RDC'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PuissancePotentielleMW_1.setVisible(true);lyr_RDC_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PuissancePotentielleMW_1,lyr_RDC_2];
lyr_PuissancePotentielleMW_1.set('fieldAliases', {'#': '#', 'Code Atlas': 'Code Atlas', 'Nom du site': 'Nom du site', 'Nom de la rivi�re': 'Nom de la Rivière', 'Longitude (WGS84)': 'Longitude (WGS84)', 'Latitude (WGS84)': 'Latitude (WGS84)', 'Province': 'Province', 'Territoire': 'Territoire', 'Superficie du bassin versant [km�]': 'Superficie du Bassin Versant [km²]', 'Chute brute am�nag�e [m]': 'Chute Brute Aménagée [m]', 'D�bit d\'�quipement [m�/s]': 'Débit d\'Equipement [m3/s]', 'Puissance potentielle [MW]': 'Puissance Potentielle [MW]', });
lyr_RDC_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'ADM0ALT1FR': 'ADM0ALT1FR', 'ADM0ALT2FR': 'ADM0ALT2FR', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_PuissancePotentielleMW_1.set('fieldImages', {'#': 'Hidden', 'Code Atlas': 'TextEdit', 'Nom du site': 'TextEdit', 'Nom de la rivi�re': 'TextEdit', 'Longitude (WGS84)': 'TextEdit', 'Latitude (WGS84)': 'TextEdit', 'Province': 'TextEdit', 'Territoire': 'TextEdit', 'Superficie du bassin versant [km�]': 'Range', 'Chute brute am�nag�e [m]': 'TextEdit', 'D�bit d\'�quipement [m�/s]': 'TextEdit', 'Puissance potentielle [MW]': 'TextEdit', });
lyr_RDC_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM0_FR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM0_REF': 'TextEdit', 'ADM0ALT1FR': 'TextEdit', 'ADM0ALT2FR': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_PuissancePotentielleMW_1.set('fieldLabels', {'Code Atlas': 'inline label', 'Nom du site': 'inline label', 'Nom de la rivi�re': 'inline label', 'Longitude (WGS84)': 'inline label', 'Latitude (WGS84)': 'inline label', 'Province': 'inline label', 'Territoire': 'inline label', 'Superficie du bassin versant [km�]': 'inline label', 'Chute brute am�nag�e [m]': 'inline label', 'D�bit d\'�quipement [m�/s]': 'inline label', 'Puissance potentielle [MW]': 'inline label', });
lyr_RDC_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM0_FR': 'no label', 'ADM0_PCODE': 'no label', 'ADM0_REF': 'no label', 'ADM0ALT1FR': 'no label', 'ADM0ALT2FR': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_RDC_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});