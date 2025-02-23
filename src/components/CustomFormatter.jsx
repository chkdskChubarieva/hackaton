import L from 'leaflet';

class CustomFormatter extends L.Routing.Formatter {
    formatInstruction(instruction) {
        // Devuelve una cadena vacía para eliminar las instrucciones
        return '';
    }

    formatDistance(d) {
        return '';
    }

    formatTime(t) {
        return super.formatTime(t);
    }
}

export default CustomFormatter;