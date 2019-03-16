export async function getAllUsbDevices() {
    let devices = await navigator.usb.getDevices();
    return devices;
}

export async function getAvailableDevices(callback) {
    let devices = await navigator.usb.getDevices();
    //TODO: Compare VID/PIDS 
}

export async function getCP201xDevices() {
    //TODO!!
}

export async function getFTDIDevices() {
    //TODO!!
}

export async function getPL2303Devices() {
    //TODO!!
}

export async function getCDCDevices() {
    //TODO!!
}

export async function getCh34xDevices() {
    //TODO!!
}