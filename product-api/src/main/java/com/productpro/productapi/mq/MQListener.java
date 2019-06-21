package com.productpro.productapi.mq;

import com.productpro.productapi.util.ConversionUtil;
import com.productpro.productapi.util.LogUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.messaging.Message;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Configuration
@Component
public class MQListener {


    @Value("${ibm.mq.queueName}")
    private String queueName;

    @Resource
    private JmsTemplate jmsTemplate;

    @Autowired
    MyMailSender myMailSender;

    @JmsListener(destination = "${ibm.mq.queueName}")
    public void receiveMsg(final Message xmlMessage) {
        LogUtil.log("MQListener : receiveMsg: started  ");

        String msg = ConversionUtil.jmsMessageToString(xmlMessage);

        LogUtil.log("MQListener : receiveMsg: received Message  : "  + msg);

        if (msg != null) {
            myMailSender.sendMail(msg);
        }
        LogUtil.log("MQListener : receiveMsg: completed  : " );
    }
}