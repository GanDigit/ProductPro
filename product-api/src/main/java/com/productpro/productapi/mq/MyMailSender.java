package com.productpro.productapi.mq;

import com.productpro.productapi.util.LogUtil;
import com.productpro.productapi.util.PropertyUtil;
import com.sendgrid.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration
@Service
public class MyMailSender {

    @Value("${notification.sendgrid.key}")
    private String sendgridKey;

    @Value("${notification.enabled}")
    private boolean notificationEnabled;

    @Value("${notification.from}")
    private String notificationFrom;

    @Value("${notification.to}")
    private String notificationTo;

    public static String KEY_ENV_NOTIFICATION_TO = "ENV_NOTIFICATION_TO";
    public static String KEY_ENV_NOTIFICATION_SENDGRID_KEY = "ENV_NOTIFICATION_SENDGRID_KEY";

    public String sendMail(String msg) {

        String result = null;
        //Send notification to the user
        if (notificationEnabled) {
            result = prepareAndSendMail(msg);
        }
        return result;
    }

    private String prepareAndSendMail (String msgIn) {
        LogUtil.log("MyMailSender : sendNotification Started");

        String from = notificationFrom;
        String to = PropertyUtil.returnEnvOrPropValue(KEY_ENV_NOTIFICATION_TO, notificationTo);
        String cc = notificationFrom;
        String subject = "Notification about Product";

        String msg = "Dear Admin, \n\n";
        msg += msgIn + " \n\n";
        msg += "Thanks and Regards, \n\n";
        msg += "Notification Team \n";

        String result = prepareAndSendMail(from, to, cc, subject, msg);

        LogUtil.log("MyMailSender : sendNotification Completed");

        return result;
    }

    private String prepareAndSendMail (String from, String to, String cc, String subject, String msg) {

        LogUtil.log("MyMailSender : sendMail started" );

        LogUtil.logDebug("MyMailSender : sendMail -->" + from + " : " + to + " : "+ subject);

        String sendgridKey1 = PropertyUtil.returnEnvOrPropValue(KEY_ENV_NOTIFICATION_SENDGRID_KEY, sendgridKey);

        Email fromEmail = new Email(from);
        Email toEmail = new Email(to);
        Content content = new Content("text/plain", msg);
        Mail mail = new Mail(fromEmail, subject, toEmail, content);

        SendGrid sg = new SendGrid(sendgridKey1);

        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);

            LogUtil.logDebug("MyMailSender : sendMail : Response Status Code -->" + from + " : " + to + " : "+ response.getStatusCode());
        } catch (Exception e) {
            e.printStackTrace();
            LogUtil.log("MyMailSender : sendMail error" );
            return "Mail Error";
        }

        LogUtil.log("MyMailSender : sendMail completed" );
        return "Mail Sent";
    }

}
