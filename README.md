# CapacitorGoogleAuthDemo(使用 Angular 在 Capacitor app 中登入 Google(CapacitorGoogleAuth 套件)示範)

練習在 Capacitor 的 Angular 專案上，使用 CapacitorGoogleAuth 套件在 Web、Android、iOS 平台上，實作 Google 登入。

[[筆記]使用 Angular 在 Capacitor app 中登入 Google(CapacitorGoogleAuth 套件)](https://perfect-submarine-445.notion.site/Angular-Capacitor-app-Google-CapacitorGoogleAuth-2bc075f476a44adeb9f8a4a3f373364b)

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

- Angular v16.0.x
- Node.js ^16.14.0 || ^18.10.0 版本

### 取得專案

```
git clone git@github.com:ellaYang1227/CapacitorGoogleAuth-demo.git
```

### 移動到專案內

```
cd CapacitorGoogleAuth-demo
```

### 安裝套件

```
npm install
```

### 運行專案

```
ng serve
```

### 瀏覽器開啟專案

```
http://localhost:4200/
```

## APP 測試

### 打開 Android Studio 測試 Android APP

```
npx cap open android
```

### 打開 Xcode 測試 iOS APP

```
npx cap open ios
```

### 執行 iOS APP

```
npx cap run ios
```

## 環境變數說明

```
// 開發或正式
production=
// Google OAuth 2.0 用戶端 ID
googleClientID＝
```

## Capacitor 變數說明

```
// 應用程式的唯一標識符
appId:
// 應用程式名稱
appName:
// 指定 Angular 應用程式的打包輸出目錄
webDir:
// 用於指定 Capacitor 伺服器的配置
server: {
  // for Android 的設定
  androidScheme:
}
// Capacitor 上使用的套件
plugins: {
    // Google 登入設定
    GoogleAuth: {
      // 需要請求訪問 Google API 的範圍
      scopes:
      // 此 ClientId 用於離線訪問和服務器端處理
      serverClientId:
      // 強制使用者選擇電子郵件地址以重新生成驗證碼，以獲取有效的刷新令牌(適用於 iOS 和 Android)
      forceCodeForRefreshToken:
    }
  }
```

## 資料夾說明

- android - 放置** Capacitor 建構 Android 移動應用程式**
- iOS - 放置** Capacitor 建構 iOS 移動應用程式**
- pages - 放置**網站單元頁面**
- assets - 放置**靜態資源**
- environments - 放置**環境變數**

## 專案技術

- @angular/cli v16.1.4
- Node.js v18.12.1
- Rxjs v7.8.0
- Typescript v5.1.3
- Scss
- Ionic v7.1.3
- Capacitorjs v5
- @capacitor/angular v2.0.3
- @capacitor/android v5.2.2
- @capacitor/ios v5.2.2
- @codetrix-studio/capacitor-google-auth v3.3.2
