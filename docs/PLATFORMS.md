# Дальнейшие платформы

Игра — обычная веб-страница без сборки, поэтому её можно завернуть в любую оболочку. Код игры при этом не меняется.

## Telegram Mini App

1. Опубликуйте игру на GitHub Pages (адрес по HTTPS уже подходит).
2. У @BotFather создайте бота и Mini App, укажите адрес игры.
3. Добавьте в `index.html` перед строкой с `config.js`:
   `<script src="https://telegram.org/js/telegram-web-app.js"></script>`
   Игра уже содержит вызовы `Telegram.WebApp.ready()` и `expand()` — они сработают сами.
4. Прогресс останется локальным. Для привязки к аккаунту Telegram понадобится сервер (или Telegram CloudStorage).

## App Store и Google Play

Подходит Capacitor (оболочка, показывающая веб-игру как приложение):

1. Положите three.js в `vendor/three.min.js` и подключите шрифты локально — в сторе игра должна работать без сети.
2. `npm init`, `npm i @capacitor/core @capacitor/cli`, `npx cap init`, папка с игрой — как `webDir`.
3. `npx cap add ios` / `npx cap add android`, сборка в Xcode / Android Studio.
4. Нужны: аккаунт Apple Developer (платный, Mac для сборки), аккаунт Google Play Console, значки и скриншоты, политика конфиденциальности, возрастной рейтинг.
5. Перед подачей — проверка названия у юриста по товарным знакам.

Для Google Play есть и более простой путь: Trusted Web Activity (инструмент Bubblewrap) поверх опубликованного сайта и `manifest.webmanifest`.

## Онлайн

Весь сетевой код обращается к одному объекту связи с тремя методами: `presence(patch)`, `peers()`, `onPeers(cb, onError)`. Чтобы включить онлайн вне Claude, достаточно написать такой объект поверх своего сервера или сервиса реального времени и присвоить его в функции `initRoom` в `index.html`.

## Реклама

Места на площадке: `center`, `floorL`, `floorR`. Настраиваются в `config.js`.
