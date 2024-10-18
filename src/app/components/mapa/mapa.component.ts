/// <reference types="google.maps" />
import { Component } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent {
  public newMap: GoogleMap = {} as GoogleMap;
  constructor() {}

  ionViewDidEnter() {
    console.log('se inicio en componente');
    this.iniMap();
  }

  ionViewDidLeave() {}

  async iniMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: document.getElementById('map')!, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8, // The initial zoom level to be rendered by the map
      },
    });

    // Add a marker to the map
    const markerId = await this.newMap.addMarker({
      coordinate: {
        lat: 33.6,
        lng: -117.9,
      },
    });
  }
}
