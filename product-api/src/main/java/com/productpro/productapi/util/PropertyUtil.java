package com.productpro.productapi.util;

public class PropertyUtil {

    public static String returnEnvOrPropValue(String envKey, String propValue) {
        String result = System.getenv(envKey);
        if (result == null && result.isEmpty()) {
            result = propValue;
        }
        return result;
    }
}
