/**
 * Created by Binwei Yang on 11/14/16.
 *
 * http://securitasdato.blogspot.com/2014/11/sending-confirmation-emails-from-google.html
 */
 function sendConfirmationEmail(e) {
    // e is a Form Event object - see https://developers.google.com/apps-script/guides/triggers/events#google_forms_events

    // Edit this to set the subject line for the sent email
    var subject = "Registration Successful";

    // This will show up as the sender's name
    var sendername = "LIFEgame 2017 Bay Area";

    // This is the body of the registration confirmation message
    var message = "Thank you for registering for LIFEgame&trade; 2017 Bay Area.<br><br>";

    message += "Visit <a href='https://lifegame-lordsgrace.github.io/'>LIFEgame&trade;</a> to complete your registration. The next steps are to upload photo and make payment, for which the instructions can be found on the <a href='https://lifegame-lordsgrace.github.io/register'>Registration</a> page. <br><br>"

    message += "Your form responses were:<br><br>";

    // response is a FormResponse - see https://developers.google.com/apps-script/reference/forms/form-response
    var response = e.response;

    var sendTo = response.getRespondentEmail();

    // Get the script owner's email address, in order to bcc: them
    var bcc = Session.getActiveUser().getEmail();

    // Now loop around, getting the item responses and writing them into the email message
    var itemResponses = response.getItemResponses();
    for (var i = 0; i < itemResponses.length; i++) {
        var itemResponse = itemResponses[i];
        message += itemResponse.getItem().getTitle() + ": " + itemResponse.getResponse() + "<br>";
    }

    message += "<br>If you wish to edit your response, please click on <a href=\"" + response.getEditResponseUrl() + "\">this link</a>.";
    message += "<br><br>";

    var textbody = message.replace("<br>", "\n");
    GmailApp.sendEmail(sendTo, subject, textbody,
        {bcc: bcc, name: sendername, htmlBody: message});
}
