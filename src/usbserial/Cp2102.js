import * as BasicCalls from './basicUsbCalls.js'

const CP210x_IFC_ENABLE = 0x00;
const CP210x_UART_ENABLE = 0x0001;
const CP210x_SET_LINE_CTL = 0x03;
const CP210x_LINE_CTL_DEFAULT = 0x0800;
const CP210x_SET_MHS = 0x07;
const CP210x_MHS_DEFAULT = 0x0000;

//TODO: Add different functions
export async function open(usbDevice) {
    //TODO: Claim interface and endpoints!!!
    BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_IFC_ENABLE,
        CP210x_UART_ENABLE,
        0
    );

    setBaudRate(usbDevice);

    BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_SET_LINE_CTL,
        CP210x_LINE_CTL_DEFAULT,
        0
    );

    BasicCalls._out_vendor_interface_control_transfer(
        usbDevice,
        CP210x_SET_MHS,
        CP210x_MHS_DEFAULT,
        0
    );

}

export async function close(usbDevice) {
    //TODO!!
}

export async function setBaudRate(usbDevice) {
    //TODO
}

