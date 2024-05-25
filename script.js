document.addEventListener("DOMContentLoaded", () => {
    const prefectures = [
        "�k�C��", "�X", "���", "�{��", "�H�c", "�R�`", "����", 
        "���", "�Ȗ�", "�Q�n", "���", "��t", "����", "�_�ސ�", 
        "�V��", "�x�R", "�ΐ�", "����", "�R��", "����", "��", 
        "�É�", "���m", "�O�d", "����", "���s", "���", "����", 
        "�ޗ�", "�a�̎R", "����", "����", "���R", "�L��", "�R��", 
        "����", "����", "���Q", "���m", "����", "����", "����", 
        "�F�{", "�啪", "�{��", "������", "����"
    ];

    const specialPrefectures = [
        "�H�c", "�R�`", "�Q�n", "�x�R", "�ΐ�", "�O�d", 
        "����", "����", "����", "����", "���m", "����", 
        "����", "�{��", "������", "����"
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
