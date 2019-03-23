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
        0
    );

    await setBaudRate(usbDevice);

    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_SET_LINE_CTL,
        CP210x_LINE_CTL_DEFAULT,
        0
    );

    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_SET_MHS,
        CP210x_MHS_DEFAULT,
        0
    );

}

export async function close(usbDevice) {
    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_PURGE,
        CP210x_PURGE_ALL,
        0
    );

    await BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_PURGE,
        CP210x_PURGE_ALL,
        0
    );

    await usbDevice.releaseInterface(0);
    await usbDevice.close();
}

export async function setBaudRate(usbDevice) {
    //TODO
}

