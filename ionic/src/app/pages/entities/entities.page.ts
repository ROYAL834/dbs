import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as L from "leaflet";
import 'leaflet-draw';
@Component({
  selector: 'app-entities',
  templateUrl: 'entities.page.html',
  styleUrls: ['entities.page.scss'],
})
export class EntitiesPage {
  entities: Array<any> = [
    /* jhipster-needle-add-entity-page - JHipster will add entity pages here */
  ];
  map:any;

  constructor(public navController: NavController) {}

  openPage(page) {
    this.navController.navigateForward('/tabs/entities/' + page.route);
  }

  async ionViewWillEnter() {
    this.loadMap();
  }


  private loadMap(): void {
    this.map= L.map('map',{attributionControl: false}).setView([17, 78], 5);
  //   const mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
  //   const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

  //   const standard = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1});

  // //   const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  // // 	maxZoom: 19,
  // // 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // // });

  L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 21,
    tileSize: 512,
    zoomOffset: -1,
    subdomains:['mt0','mt1','mt2','mt3'],
  }).addTo(this.map);
  


  var drawnItems = new L.FeatureGroup();
    this.map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
    position: 'topright',
    
    // collapsed: flase,

    draw: {
				
      polygon: {
        showArea: true,
        metric: true,
        repeatMode: false,
        
      },
      // polyline: false,
      // rectangle: false,
      // circle: false,
      // circlemarker: false,
      // marker: false,
    },
    edit: {
      featureGroup: drawnItems
    }
    });
    this.map.addControl(drawControl);

    

    this.map.on('draw:created', function (e) {
    var type = e.layerType,
      layer = e.layer;
      

    drawnItems.addLayer(layer);
    // jsondata = drawnItems.toGeoJSON();
    // coordinates= JSON.stringify(jsondata.features[0].geometry.coordinates[0]);
    // coordinates2 = JSON.stringify(jsondata)
    // console.log(jsondata)
    });

    // this.map_update.on('draw:edited', function (e) {
    //   var layers = e.layers;
    //   jsondata = drawnItems.toGeoJSON();
    //   coordinates= JSON.stringify(this.jsondata.features[0].geometry.coordinates[0]);
    //   coordinates2 = JSON.stringify(this.jsondata)
      // console.log(this.jsondata)
}
}
