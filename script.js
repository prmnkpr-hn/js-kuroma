document.addEventListener("DOMContentLoaded", () => {
    const prefectures = [
        "–kŠC“¹", "ÂX", "ŠâŽè", "‹{é", "H“c", "ŽRŒ`", "•Ÿ“‡", 
        "ˆïé", "“È–Ø", "ŒQ”n", "é‹Ê", "ç—t", "“Œ‹ž", "_“Þì", 
        "VŠƒ", "•xŽR", "Îì", "•Ÿˆä", "ŽR—œ", "’·–ì", "Šò•Œ", 
        "Ã‰ª", "ˆ¤’m", "ŽOd", "Ž ‰ê", "‹ž“s", "‘åã", "•ºŒÉ", 
        "“Þ—Ç", "˜a‰ÌŽR", "’¹Žæ", "“‡ª", "‰ªŽR", "L“‡", "ŽRŒû", 
        "“¿“‡", "ì", "ˆ¤•Q", "‚’m", "•Ÿ‰ª", "²‰ê", "’·è", 
        "ŒF–{", "‘å•ª", "‹{è", "Ž­Ž™“‡", "‰«“ê"
    ];

    const specialPrefectures = [
        "H“c", "ŽRŒ`", "ŒQ”n", "•xŽR", "Îì", "ŽOd", 
        "Ž ‰ê", "’¹Žæ", "“‡ª", "“¿“‡", "‚’m", "²‰ê", 
        "’·è", "‹{è", "Ž­Ž™“‡", "‰«“ê"
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
