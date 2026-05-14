ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([603711.065514, 9129095.421057, 625681.829249, 9142022.039966]);
var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_BatasWilayahKediri_1 = new ol.format.GeoJSON();
var features_BatasWilayahKediri_1 = format_BatasWilayahKediri_1.readFeatures(json_BatasWilayahKediri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasWilayahKediri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahKediri_1.addFeatures(features_BatasWilayahKediri_1);
var lyr_BatasWilayahKediri_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahKediri_1, 
                style: style_BatasWilayahKediri_1,
                popuplayertitle: ' Batas Wilayah Kediri',
                interactive: false,
                title: '<img src="styles/legend/BatasWilayahKediri_1.png" />  Batas Wilayah Kediri'
            });
var format_JaringanJalanKediri_2 = new ol.format.GeoJSON();
var features_JaringanJalanKediri_2 = format_JaringanJalanKediri_2.readFeatures(json_JaringanJalanKediri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JaringanJalanKediri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanKediri_2.addFeatures(features_JaringanJalanKediri_2);
var lyr_JaringanJalanKediri_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanKediri_2, 
                style: style_JaringanJalanKediri_2,
                popuplayertitle: 'Jaringan Jalan Kediri',
                interactive: false,
                title: '<img src="styles/legend/JaringanJalanKediri_2.png" /> Jaringan Jalan Kediri'
            });
var format_JangkauanHalte800meter_3 = new ol.format.GeoJSON();
var features_JangkauanHalte800meter_3 = format_JangkauanHalte800meter_3.readFeatures(json_JangkauanHalte800meter_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JangkauanHalte800meter_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanHalte800meter_3.addFeatures(features_JangkauanHalte800meter_3);
var lyr_JangkauanHalte800meter_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JangkauanHalte800meter_3, 
                style: style_JangkauanHalte800meter_3,
                popuplayertitle: 'Jangkauan Halte 800 meter',
                interactive: true,
                title: '<img src="styles/legend/JangkauanHalte800meter_3.png" /> Jangkauan Halte 800 meter'
            });
var format_JangkauanHalte400meter_4 = new ol.format.GeoJSON();
var features_JangkauanHalte400meter_4 = format_JangkauanHalte400meter_4.readFeatures(json_JangkauanHalte400meter_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JangkauanHalte400meter_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanHalte400meter_4.addFeatures(features_JangkauanHalte400meter_4);
var lyr_JangkauanHalte400meter_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JangkauanHalte400meter_4, 
                style: style_JangkauanHalte400meter_4,
                popuplayertitle: 'Jangkauan Halte 400 meter',
                interactive: true,
                title: '<img src="styles/legend/JangkauanHalte400meter_4.png" /> Jangkauan Halte 400 meter'
            });
var format_TitikHalte_5 = new ol.format.GeoJSON();
var features_TitikHalte_5 = format_TitikHalte_5.readFeatures(json_TitikHalte_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TitikHalte_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikHalte_5.addFeatures(features_TitikHalte_5);
var lyr_TitikHalte_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikHalte_5, 
                style: style_TitikHalte_5,
                popuplayertitle: 'Titik Halte',
                interactive: true,
                title: '<img src="styles/legend/TitikHalte_5.png" /> Titik Halte'
            });

lyr_Positronnolabels_0.setVisible(true);lyr_BatasWilayahKediri_1.setVisible(true);lyr_JaringanJalanKediri_2.setVisible(true);lyr_JangkauanHalte800meter_3.setVisible(true);lyr_JangkauanHalte400meter_4.setVisible(true);lyr_TitikHalte_5.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_BatasWilayahKediri_1,lyr_JaringanJalanKediri_2,lyr_JangkauanHalte800meter_3,lyr_JangkauanHalte400meter_4,lyr_TitikHalte_5];
lyr_BatasWilayahKediri_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JaringanJalanKediri_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_JangkauanHalte800meter_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_JangkauanHalte400meter_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_TitikHalte_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', });
lyr_BatasWilayahKediri_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JaringanJalanKediri_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_JangkauanHalte800meter_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_JangkauanHalte400meter_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_TitikHalte_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_BatasWilayahKediri_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_JaringanJalanKediri_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_JangkauanHalte800meter_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'inline label - always visible', });
lyr_JangkauanHalte400meter_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'inline label - always visible', });
lyr_TitikHalte_5.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', });
lyr_TitikHalte_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});