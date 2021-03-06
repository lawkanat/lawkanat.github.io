function detectBarcode(dataUrl, callback) {
    Quagga.decodeSingle({
        decoder: {
            readers: [
                // "code_128_reader",
                "ean_reader",
                // "ean_8_reader",
                // "ean_13_reader",
                // "code_39_vin_reader",
                // "codabar_reader",
                // "upc_reader",
                // "upc_e_reader",
                // "i2of5_reader",
                // "2of5_reader",
                // "code_93_reader"
            ]
        },
        locate: true, // try to locate the barcode in the image
        src: dataUrl // or 'data:image/jpg;base64,' + data

    }, function (result) {
        if (result && result.codeResult) {
            console.log(result.codeResult.format);

            console.log(result.codeResult.code);
            callback(result.codeResult.code);
        } else {
            // console.log("not detected");
        }
    });

}