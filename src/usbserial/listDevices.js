import{cp210xIds} from '../vidpid/cp210xids.js'

export async function getAllUsbDevices() {
    let devices = await navigator.usb.getDevices();
    return devices;
}

export async function getAvailableDevices() {
    let availableDevices = await getCP201xDevices();
    if(availableDevices.length > 0) {
        return availableDevices;
    }

    let availableDevices = await getFTDIDevices();
    if(availableDevices.length > 0) {
        return availableDevices;
    }

    let availableDevices = await getPL2303Devices();
    if(availableDevices.length > 0) {
        return availableDevices;
    }

    let availableDevices = await getCDCDevices();
    if(availableDevices.length > 0) {
        return availableDevices;
    }

    let availableDevices = await getCh34xDevices();
    if(availableDevices.length > 0) {
        return availableDevices;
    }
}

export async function getCP201xDevices() {
    let devices = await navigator.usb.getDevices();
    return devices.filter(function(item) {
        return cp210xIds.values.find(ids => 
            (ids.vid == item.vendorId && ids.pid == item.productId)).length == 1;
    });
}

export async function getFTDIDevices() {
    //TODO!!
    return [];
}

export async function getPL2303Devices() {
    //TODO!!
    return [];
}

export async function getCDCDevices() {
    //TODO!!
    return [];
}

export async function getCh34xDevices() {
    //TODO!!
    return [];
}