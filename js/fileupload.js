/**
 * Created by Binwei Yang on 11/14/16.
 *
 * https://ctrlq.org/code/19747-google-forms-upload-files
 */

function doGet(e) {
    return HtmlService.createTemplateFromFile('fileupload.html')
        .evaluate() // evaluate MUST come before setting the Sandbox mode
        .setTitle('Life Game 2017 Bay Area')
}

function uploadFileToGoogleDrive(data, file, name, email) {
    try {

        var folder = DriveApp.getFolderById('0By0RFKZzzTx0aVRGZ1RVRDVvc3c');

        var contentType = data.substring(5, data.indexOf(';')),
            bytes = Utilities.base64Decode(data.substr(data.indexOf('base64,') + 7)),
            blob = Utilities.newBlob(bytes, contentType, file);

        folder.createFolder([name, email].join(" ")).createFile(blob);

        return "OK";

    } catch (f) {
        return f.toString();
    }
}
