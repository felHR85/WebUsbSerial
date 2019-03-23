import * as BasicCalls from './basicUsbCalls.js'

const CP210x_IFC_ENABLE = 0x00;
const CP210x_UART_ENABLE = 0x0001;
const CP210x_SET_LINE_CTL = 0x03;
const CP210x_LINE_CTL_DEFAULT = 0x0800;
const CP210x_SET_MHS = 0x07;
const CP210x_MHS_DEFAULT = 0x0000;
const CP210x_PURGE = 0x12;
const CP210x_PURGE_ALL = 0x000f;
const CP210x_UART_DISABLE = 0x0000;
const CP210x_SET_BAUDRATE = 0x1e;

//TODO: Add different functions
export async function open(usbDevice) {

    await usbDevice.open();

    // Check configuration?
    // https://wicg.github.io/webusb/#ref-for-dom-usbdevice-selectconfiguration

    await usbDevice.claimInterface(0);

    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_IFC_ENABLE,
        CP210x_UART_ENABLE,
        0,
        null
    );

    await setBaudRate(usbDevice);

    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_SET_LINE_CTL,
        CP210x_LINE_CTL_DEFAULT,
        0,
        null
    );

    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_SET_MHS,
        CP210x_MHS_DEFAULT,
        0,
        null
    );

}

export async function close(usbDevice) {
    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_PURGE,
        CP210x_PURGE_ALL,
        0,
        null
    );

    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_IFC_ENABLE,
        CP210x_UART_DISABLE,
        0,
        null
    );

    await usbDevice.releaseInterface(0);
    await usbDevice.close();
}

export async function setBaudRate(usbDevice, baudRate) {
    let buffer = new ArrayBuffer(4);
    let data = new Uint8Array(buffer);
    data[0] = baudRate & 0xff;
    data[1] = baudRate >> 8 & 0xff;
    data[2] = baudRate >> 16 & 0xff;
    data[3] = baudRate >> 24 & 0xff;

    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_SET_BAUDRATE,
        0,
        0,
        data
    );
}

