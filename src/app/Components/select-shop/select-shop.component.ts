
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
//import { GoogleMap, MapInfoWindow } from '@angular/google-maps/';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { GoogleMapsModule } from '@angular/google-maps/';


@Component({
  selector: 'app-select-shop',
  templateUrl: './select-shop.component.html',
  styleUrls: ['./select-shop.component.css']
})
export class SelectShopComponent implements OnInit {

  
  markers:any;
  constructor() { 
    
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    this.markers = [];
    
  }


  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap 
  @ViewChild(MapInfoWindow, { static: false }) infoWindow! : MapInfoWindow

  
  center!: google.maps.LatLngLiteral ;
  zoom = 16
  
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
  };

  infoContent = '';
  x:any;
 
  ngOnInit():void {
    if (navigator.geolocation) {
      var location_timeout = setTimeout("geolocFail()", 10000);
  
      navigator.geolocation.getCurrentPosition((position) => {
          clearTimeout(location_timeout);
  
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          this.markers.push({
            position: {
              lat: this.center.lat ,
              lng: this.center.lng ,
            },
            label: {
              color: 'red',
              text: 'Your Location',
            },
            title: 'Your location',
            info: 'Marker info ' + (this.markers.length + 1),
            options: {
            },
          })
          geocodeLatLng(lat, lng);
      }, function(error) {
          clearTimeout(location_timeout);
          geolocFail();
      });
  } else {
      // Fallback for no geolocation
      geolocFail();
  }
 
    console.log(this.center)
    console.log(JSON.stringify(this.map.getCenter()))

  }
  
  click(event: google.maps.MouseEvent) {
    console.log(event)
  }
  center_changed() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((showPosition) =>
      {
        this.center = {
          lat: showPosition.coords.latitude,
          lng: showPosition.coords.longitude,
        }
        
 
      });
    } 
  }
  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }
  getLocation(x:any) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((showPosition) =>
      {
        x.innerHTML = "Latitude: " + showPosition.coords.latitude + 
        "<br>Longitude: " + showPosition.coords.longitude;
      });
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  pspotinfo(index:number)
  {
console.log(this.markers[index].location);
  }
  openInfo(marker: MapMarker, content: any) {
    this.infoWindow.open(marker)
  }
  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: '' + (this.markers.length + 1),
      },
      title: 'חניה ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
      }

    });
    console.log(this.markers[this.markers.length-1].position.lat);
  }

}


function geocodeLatLng(lat: number, lng: number) {
  throw new Error('Function not implemented.');
}

function geolocFail() {
  throw new Error('Function not implemented.');
}





 /* allProducts()
  {
    console.log('1111');
    this.router.navigate(['all-products',this.codeshop]);
    console.log('2222');
  }
}*/
