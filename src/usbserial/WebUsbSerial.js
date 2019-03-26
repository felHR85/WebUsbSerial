import * as CP210x from './Cp2102.js'

function WebUsbSerial(usbDevice) {
   this.usbDevice = usbDevice;
}

Object.assign(WebUsbSerial.prototype, {

    //TODO!!

    open: function() {
       CP210x.open(usbDevice);
    },

    close: function() {
        CP210x.close();
    },

    read: function() {
        return CP210x.read();
    },

    write: function(data) {
        CP210x.write(data);
    }
    
});

export {WebUsbSerial}