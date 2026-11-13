/* New York: Streetball Story — настройки сборки. Этот файл можно править без знания кода игры.

   ads — рекламные места на площадке. Места: center (центр площадки), floorL (пол слева у кольца), floorR (пол справа у кольца).
     t     — надпись (до 18 знаков)
     st    — цвет: gold | blue | green | pink | violet | white
     logo  — 'mybe' рисует логотип MYBE рядом с надписью
     until — до какого момента показывать (миллисекунды, Date.parse('2030-01-01'))
   Чтобы убрать рекламу — удалите строку или поставьте until в прошлое. */
window.SB_CONFIG = {
  ads: {
    center: { t: 'MYBE', st: 'blue', logo: 'mybe', until: 1893456000000 }
  }
};
