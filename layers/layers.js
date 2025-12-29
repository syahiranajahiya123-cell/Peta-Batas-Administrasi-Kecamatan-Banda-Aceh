var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BATAS_ADM_KEC_BANDAACEH_1 = new ol.format.GeoJSON();
var features_BATAS_ADM_KEC_BANDAACEH_1 = format_BATAS_ADM_KEC_BANDAACEH_1.readFeatures(json_BATAS_ADM_KEC_BANDAACEH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_ADM_KEC_BANDAACEH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADM_KEC_BANDAACEH_1.addFeatures(features_BATAS_ADM_KEC_BANDAACEH_1);
var lyr_BATAS_ADM_KEC_BANDAACEH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_ADM_KEC_BANDAACEH_1, 
                style: style_BATAS_ADM_KEC_BANDAACEH_1,
                popuplayertitle: 'BATAS_ADM_KEC_BANDAACEH',
                interactive: true,
    title: 'BATAS_ADM_KEC_BANDAACEH<br />\
    <img src="styles/legend/BATAS_ADM_KEC_BANDAACEH_1_0.png" /> Baiturrahman District<br />\
    <img src="styles/legend/BATAS_ADM_KEC_BANDAACEH_1_1.png" /> Banda Raya District<br />\
    <img src="styles/legend/BATAS_ADM_KEC_BANDAACEH_1_2.png" /> Jaya Baru District<br />\
    <img src="styles/legend/BATAS_ADM_KEC_BANDAACEH_1_3.png" /> Kuta Alam District<br />\
    <img src="styles/legend/BATAS_ADM_KEC_BANDAACEH_1_4.png" /> Kutaraja District<br />\
    <img src="styles/legend/BATAS_ADM_KEC_BANDAACEH_1_5.png" /> Lueng Bata District<br />\
    <img src="styles/legend/BATAS_ADM_KEC_BANDAACEH_1_6.png" /> Meuraxa District<br />\
    <img src="styles/legend/BATAS_ADM_KEC_BANDAACEH_1_7.png" /> Ulee Kareng District<br />\
    <img src="styles/legend/BATAS_ADM_KEC_BANDAACEH_1_8.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_BATAS_ADM_KEC_BANDAACEH_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BATAS_ADM_KEC_BANDAACEH_1];
lyr_BATAS_ADM_KEC_BANDAACEH_1.set('fieldAliases', {'KECAMATAN': 'Nama Kecamatan', 'BWP': 'BWP', 'Sifat_Ling': 'Sifat_Ling', });
lyr_BATAS_ADM_KEC_BANDAACEH_1.set('fieldImages', {'KECAMATAN': 'TextEdit', 'BWP': 'Hidden', 'Sifat_Ling': 'Hidden', });
lyr_BATAS_ADM_KEC_BANDAACEH_1.set('fieldLabels', {'KECAMATAN': 'inline label - always visible', });
lyr_BATAS_ADM_KEC_BANDAACEH_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});