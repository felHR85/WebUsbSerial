//TODO: Simplify this with Closures???

export async function _out_vendor_interface_control_transfer(usbDevice, request, value, index) {
    var parameters = {
        requestType: 'vendor',
        recipient: 'interface',
        request : request,
        value : value,
        index : index
    };
    let result = await usbDevice.controlTransferOut(parameters);
    return result;
}

export async function _in_vendor_interface_control_transfer(usbDevice, request, value, index){
    var parameters = {
        requestType: 'vendor',
        recipient: 'interface',
        request : request,
        value : value,
        index : index
    };
    let result = await usbDevice.controlTransferIn(parameters);
    return result;
}