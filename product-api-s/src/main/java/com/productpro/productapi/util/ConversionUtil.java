package com.productpro.productapi.util;

import org.springframework.messaging.Message;


public class ConversionUtil {

    public static String jmsMessageToString(final Message xmlMessage) {
        LogUtil.log("ConversionUtil : jmsMessageToString: started  ");
        String msg = null;
        try {
            msg = xmlMessage.getPayload().toString();
            LogUtil.log("ConversionUtil : jmsMessageToString: Received message in String --->>> " + msg);
        } catch (Exception e) {
            e.printStackTrace();
        }
        LogUtil.log("ConversionUtil : jmsMessageToString: completed ---> " + msg);
        return msg;
    }

}
