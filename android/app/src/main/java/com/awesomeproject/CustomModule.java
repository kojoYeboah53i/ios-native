package com.awesomeproject; // replace com.your-app-name with your app’s name

//import android settings
import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CustomModule extends ReactContextBaseJavaModule {
   CustomModule(ReactApplicationContext context) {
       super(context);
   }

   @ReactMethod
   public void show() {
       Toast.makeText(reactContext, "Hi from Android", Toast.LENGTH_SHORT).show();
   }

   @ReactMethod
   public void getDeviceId(Promise promise) {
       try {
           String android_id = Settings.Secure.getString(reactContext.getContentResolver(),
                   Settings.Secure.ANDROID_ID);
           promise.resolve(android_id);
       } catch (Exception e) {
           promise.reject("Error", e);
       }
   }

   @NonNull
   @Override
    public String getName() {
    return "ABC";
    }
}

