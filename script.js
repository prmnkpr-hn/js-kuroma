document.addEventListener("DOMContentLoaded", () => {
    const prefectures = [
        "北海道", "青森", "岩手", "宮城", "秋田", "山形", "福島", 
        "茨城", "栃木", "群馬", "埼玉", "千葉", "東京", "神奈川", 
        "新潟", "富山", "石川", "福井", "山梨", "長野", "岐阜", 
        "静岡", "愛知", "三重", "滋賀", "京都", "大阪", "兵庫", 
        "奈良", "和歌山", "鳥取", "島根", "岡山", "広島", "山口", 
        "徳島", "香川", "愛媛", "高知", "福岡", "佐賀", "長崎", 
        "熊本", "大分", "宮崎", "鹿児島", "沖縄"
    ];

    const specialPrefectures = [
        "秋田", "山形", "群馬", "富山", "石川", "三重", 
        "滋賀", "鳥取", "島根", "徳島", "高知", "佐賀", 
        "長崎", "宮崎", "鹿児島", "沖縄"
    ];

    const container = document.getElementById("prefectures-container");

    prefectures.forEach(pref => {
        const button = document.createElement("button");
        button.className = "prefecture-button";
        button.textContent = pref;
        button.addEventListener("click", () => {
            if (button.classList.contains("disabled")) return;

            button.classList.add("disabled");
            button.classList.add("blink");
            setTimeout(() => {
                button.classList.remove("blink");
                if (specialPrefectures.includes(pref)) {
                    showExplosion();
                    setTimeout(() => {
                        button.textContent = "NG";
                        button.style.backgroundColor = "#ff4444";
                        button.style.color = "#ffffff";
                    }, 1500);
                } else {
                    button.textContent = "SAFE";
                    button.style.backgroundColor = "#44ff44";
                    button.style.color = "#ffffff";
                }
            }, 1500);
        });
        container.appendChild(button);
    });

    function showExplosion() {
        const explosionOverlay = document.getElementById("explosion-overlay");
        explosionOverlay.style.display = "flex";
        setTimeout(() => {
            explosionOverlay.style.display = "none";
        }, 1000);
    }
});
