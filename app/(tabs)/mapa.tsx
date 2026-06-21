import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MapaCampus() {
  const htmlMapa = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>body { margin: 0; } #map { height: 100vh; width: 100vw; }</style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        var map = L.map('map').setView([-25.3892, -51.4801], 17);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker([-25.3895, -51.4805]).addTo(map).bindPopup('<b>Bloco A</b>');
        L.marker([-25.3890, -51.4800]).addTo(map).bindPopup('<b>Bloco B</b>');
        L.marker([-25.3870, -51.4780]).addTo(map).bindPopup('<b>Restaurante Universitário</b>');
      </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView originWhitelist={['*']} source={{ html: htmlMapa }} style={styles.mapa} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 }, mapa: { flex: 1 } });