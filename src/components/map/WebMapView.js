import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

export const WebMapView = () => {
    const mapRef = useRef();

    useEffect(
      () => {
        loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/BaseTileLayer', 
          'esri/geometry/projection','esri/geometry/SpatialReference', 'esri/geometry/Point', 'esri/geometry/coordinateFormatter'], { css: true })
        .then(([ArcGISMap, MapView, BaseTileLayer, projection, SpatialReference, Point, coordinateFormatter]) => {
          const TintLayer = BaseTileLayer.createSubclass({
            getTileUrl: function (level, row, col) {
              return this.urlTemplate
                .replace("{z}", level)
                .replace("{x}", col)
                .replace("{y}", row);
            }
          });

          var stamenTileLayer = new TintLayer({
            urlTemplate:"http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png",
          });

          const map = new ArcGISMap({
            //basemap: 'topo-vector'
            layers: [stamenTileLayer]
          });
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [127.017422, 37.49144],
            zoom: 16
          });
          view.ui.move("zoom", "top-right");

          coordinateFormatter.load();
          const geoSpatialReference = new SpatialReference({
            wkid: 4326
          });

          projection.load();

          view.on("click", function(event) {
            //console.log("click event: ", event.mapPoint.x.toString());
            //let point = new Point(event.mapPoint.x, event.mapPoint.y)
            let po = projection.project(event.mapPoint, geoSpatialReference);
            console.log(po.x.toString() + ", " + po.y.toString());
          });

          return () => {
            if (view) {
              view.destroy();
            }
          };
        });
      },
      []
    );
    return <div className="webmap" ref={mapRef} />;
};