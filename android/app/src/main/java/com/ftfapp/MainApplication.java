package com.ftfapp;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.audioStreaming.ReactNativeAudioStreamingPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.mehcode.reactnative.splashscreen.SplashScreenPackage;
import com.sh3rawi.RNAudioPlayer.RNAudioPlayer;
import com.brentvatne.react.ReactVideoPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage(),
            new VectorIconsPackage(),
            new ReactNativeAudioStreamingPackage(),
            new OrientationPackage(this),
            new SplashScreenPackage(),
            new RNAudioPlayer(),
            new ReactVideoPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
