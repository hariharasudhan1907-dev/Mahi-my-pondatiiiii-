const mergeBtn = document.getElementById("mergeBtn");
const hearts = document.getElementById("hearts");
const heartScreen = document.getElementById("heartScreen");
const letterScreen = document.getElementById("letterScreen");
const letter = document.getElementById("letter");
const message = document.getElementById("message");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// UN LETTER CONTENT
const letterText = `oii en thanga naaa unna romba hut paniruken thaan pulllllaaaa but atha naa ethume venune panala pullllaaaaa unnaku onnu hurt aguthuna athu unna vida ennaku hurt agum dii chlm nee neraya hurt airuka thaaan naa atha cure panna thaan pakuren pulllllaaaaa ennala mudunchatha panuren pulllllaaaaa ana inga paru pulllllaaaa ithu varaikum nee sonna naa unna vituruvenu sone ana nee sonalum naa unna vida maten pullllaaaaa bcz nee enaku venum pullllaaaa en life la nadakura oru ory sec um neee venum pulllllaaaaaa.... ippoum eppoum kadasi caraikum naaa un kuda irupen ok vaaa pulllllaaaaaa naaa panathuku neraya sorry kwturukenthaan pullllaaaaa bcz ennala atha mattum thaaan panamudunchi sooo ithu new ah irukumnu unnaku pane pulllaaaaaa athaaan inaiku vara late uh pullllaaaaaa ithu nalairukanu thrla ennala ithula solla vendiyatha mulusa solla mudila pullllaaaaa , iam sorrryyyyyy maaaah and i love you maaaaah💋🥰😘🫂`;

let musicStarted = false;

mergeBtn.addEventListener("click", function () {
    mergeBtn.disabled = true;

    hearts.classList.add("merge");

    setTimeout(() => {
        heartScreen.style.opacity = "0";
    }, 1500);

    setTimeout(() => {
        heartScreen.style.display = "none";
        letterScreen.style.display = "flex";

        setTimeout(() => {
            letter.classList.add("show");
        }, 200);
    }, 2600);

    // Start music when letter appears
    setTimeout(() => {
        bgMusic.play()
            .then(() => {
                musicStarted = true;
                musicBtn.textContent = "⏸ Pause Music";
            })
            .catch(error => {
                musicBtn.textContent = "▶ Play Music";
            });

        let index = 0;

        function typeWriter() {
            if (index < letterText.length) {
                message.textContent += letterText.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }

        typeWriter();

    }, 4300);
});

// Music play/pause button
musicBtn.addEventListener("click", function () {
    if (bgMusic.paused) {
        bgMusic.play()
            .then(() => {
                musicBtn.textContent = "⏸ Pause Music";
            })
            .catch(() => {
                musicBtn.textContent = "▶ Play Music";
            });
    } else {
        bgMusic.pause();
        musicBtn.textContent = "▶ Play Music";
    }
});
