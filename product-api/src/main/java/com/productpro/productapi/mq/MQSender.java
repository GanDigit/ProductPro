package com.productpro.productapi.mq;

import com.productpro.productapi.util.LogUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Configuration
@Service
public class MQSender {

    @Value("${ibm.mq.queueName}")
    private String queueName;

    @Resource
    private JmsTemplate jmsTemplate;

    public void sendMsg(String msg) {
        LogUtil.log("MQSender : sendReq : Message to send -> newAccount object --->>>>: "+ msg);

        this.jmsTemplate.convertAndSend(queueName, msg);

        LogUtil.log("MQSender : sendReq : completed ");
    }

}