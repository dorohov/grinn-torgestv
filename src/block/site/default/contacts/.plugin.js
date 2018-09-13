function initMap() {  
  var map_container_div_id = 'map-google';
  var cont = $('#' + map_container_div_id);  
  var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
  if(cont.length) {    
    var map_data = JSON.parse(cont.attr('data-map') || '{}');
    var coordMapOfficeOne = map_data.center;
    var zoomMapOfficeOne = map_data.zoom;    
     if($(document).width() < 768) {
        var coordMapOfficeOne = map_data.center_xs;
        var zoomMapOfficeOne = map_data.zoom_xs;    
     }  
    var styleMapOfficeOne = [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ffaa00"},{"saturation":"-33"},{"lightness":"10"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#9c5e18"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"-23"},{"gamma":"2.01"},{"color":"#f2f6f6"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"saturation":"-14"}]}],
        optionsMapOfficeOne = {
          zoom: zoomMapOfficeOne, 
          center: new google.maps.LatLng(coordMapOfficeOne[0], coordMapOfficeOne[1]), 
          styles: styleMapOfficeOne
        }, 
      idOfficeOne = document.getElementById(map_container_div_id),
      mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),
      iconOfficeOne = { 
        path: "M38.7003 1.14836C19.2991 1.82574 3.17675 16.8931 1.31491 36.1167L1.31469 36.119C0.93444 39.9624 1.15417 43.6887 1.83602 47.2607L1.84084 47.2859L1.84418 47.3092L1.84439 47.3106L1.84547 47.3176C1.84683 47.3263 1.84929 47.3416 1.853 47.3635C1.86043 47.4073 1.87287 47.4773 1.89162 47.5729C1.92911 47.7641 1.99182 48.0577 2.09001 48.4485L2.09339 48.462L2.09644 48.4756C2.6962 51.1412 3.59699 53.732 4.72006 56.1666L4.72734 56.1824L4.73414 56.1984C8.68256 65.5069 17.8669 81.209 38.5789 98.3363L38.5829 98.3395C39.4369 99.0522 40.7036 99.06 41.5876 98.3349C62.2983 81.2289 71.4825 65.5274 75.4515 56.1776L75.4598 56.1583L75.4687 56.1392C76.6082 53.7124 77.4883 51.1453 78.0887 48.4568L78.0907 48.4479C78.1813 48.0576 78.2462 47.754 78.2883 47.5499C78.3093 47.4478 78.3246 47.3706 78.3344 47.3199L78.3451 47.2639L78.3479 47.2487L78.3498 47.2383C78.8105 44.8468 79.0509 42.3957 79.0509 39.884C79.0509 18.0049 60.8482 0.37123 38.7003 1.14836ZM42.3078 99.2004C41.0097 100.267 39.1346 100.267 37.8571 99.2004C17.0047 81.957 7.71171 66.1079 3.6937 56.6353C2.53981 54.1339 1.61258 51.4685 0.994419 48.721C0.788367 47.9009 0.726552 47.4703 0.726552 47.4703C0.0259752 43.8002 -0.200682 39.9661 0.190816 36.0089C2.1071 16.2231 18.6943 0.722567 38.6607 0.0254518C61.4501 -0.774181 80.1802 17.3713 80.1802 39.884C80.1802 42.4675 79.9329 44.9894 79.459 47.4498C79.459 47.4498 79.3766 47.9009 79.1911 48.7005C78.573 51.4685 77.6663 54.1134 76.4919 56.6148C72.4532 66.1284 63.1603 81.9775 42.3078 99.2004Z M38.864 5.64006C21.7097 6.24318 7.45876 19.6538 5.81238 36.7718C5.47602 40.1954 5.67075 43.5126 6.27266 46.6879C6.27266 46.6879 6.32577 47.0604 6.5028 47.7699C7.03389 50.1469 7.83053 52.453 8.8219 54.6171C12.274 62.8125 20.2581 76.5247 38.1736 91.4431C39.2712 92.3655 40.8821 92.3655 41.9974 91.4431C59.9129 76.5424 67.897 62.8302 71.3668 54.5994C72.3759 52.4353 73.1548 50.1469 73.6859 47.7522C73.8452 47.0604 73.916 46.6701 73.916 46.6701C74.3232 44.5415 74.5356 42.3596 74.5356 40.1245C74.5356 20.6472 58.4436 4.94825 38.864 5.64006ZM40.0855 57.2957C30.8445 57.2957 23.3561 49.7922 23.3561 40.5325C23.3561 31.2728 30.8445 23.7692 40.0855 23.7692C49.3265 23.7692 56.8149 31.2728 56.8149 40.5325C56.8149 49.7922 49.3265 57.2957 40.0855 57.2957Z",
        fillColor: '#B47B1C',
        strokeColor: '#000000',
        fillOpacity: 1,
        anchor: new google.maps.Point(40,100),
        strokeWeight: 0,
        scale: 1,
      };
      if(map_data.placemarks.length) {
        for(var i = 0; i < map_data.placemarks.length; i++) {
          var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0],  lng: map_data.placemarks[i].coord[1]}, 
          OfficeOne = new google.maps.Marker({
            position: iconCoordOfficeOne,
            map: mapOfficeOne,
            icon: iconOfficeOne,
            title: map_data.placemarks[i].title,
              //animation: google.maps.Animation.DROP
          });
        }
      }

      /*if(map_data.placemarks2.length) {
        for(var i = 0; i < map_data.placemarks2.length; i++) {
          var iconCoordOfficeOne2 = {lat: map_data.placemarks2[i].coord[0],  lng: map_data.placemarks2[i].coord[1]}, 
          OfficeOne = new google.maps.Marker({
            position: iconCoordOfficeOne2,
            map: mapOfficeOne,
            icon: iconOfficeOne,
            title: map_data.placemarks2_title,
          });
        }
      }*/
      
      
      //$(window).on('resize', function() {
      //  google.maps.event.trigger(mapOfficeOne, "resize");
      //  mapOfficeOne.setCenter(OfficeOne);
      //});
      
      $(document.body).on('click.azbn7', '.azbn__office__map__set-center-btn', null, function(event){
        event.preventDefault();
        var btn = $(this);
        var coord = btn.attr('data-coord');
        var coord_arr = coord.split(',');
        console.dir(coord_arr);
        mapOfficeOne.setCenter({
          lat : parseFloat((coord_arr[0] || '').trim()),
          lng : parseFloat((coord_arr[1] || '').trim()),
        });
        
      });
      
    
  }
  
}; 
$(function () {
  $(document.body).on('shown.bs.modal', '.modal', {}, function(event){
    event.preventDefault();
    $(window).trigger('resize');    
  });  
});