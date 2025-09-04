const music=new Audio('audio/0.mp3');
//music.play();


const songs=[
    {
        id: 1,
        songName : `Stay a little longer <br>
        <div class="subtitle">Anushka Shahaney</div>`,
        poster:"img/1.jpg"
    },
    {
        id: 2,
        songName: `Forget me<br>                  
        <div class="subtitle">Meet</div>`,
        poster:"img/2.jpg"
    },
    {
        id: 3,
        songName: `Tute Dil Wala<br>
        <div class="subtitle">Armaan Bedil</div>`,
        poster:"img/3.jpg"
    
    },
    {
        id: 4,
        songName: `Wakh Ho Jana<br>
        <div class="subtitle">Gurnaam Bhullar</div>`,
        poster:"img/4.jpg"
    },
    {
        id: 5,
        songName: `Tere Layi <br>
        <div class="subtitle">Babbal Rai</div>`,
        poster:"img/5.jpg"
    },
    {
        id: 6,
        songName:`Phulkari<br>
        <div class="subtitle">Ranjit Bawa</div>`,
        poster:"img/6.jpg"
    },
    {
        id: 7,
        songName:`Samjhawan<br>
        <div class="subtitle">Arijit Singh and Shreya Ghoshal</div>`,
        poster:"img/7.jpg"
    },
    {
        id: 8,
        songName:`Main Tan Vi Pyar Karda<br>
        <div class="subtitle">Happy Raikoti and Millind Gaba </div>`,
        poster:"img/8.jpg"
    },
    {
        id: 9,
        songName: `Aadat<br>
        <div class="subtitle">Ninja</div>`,
        poster:"img/9.jpg"
    },
    {
        id: 10,
        songName:`fallin Apart<br>
        <div class="subtitle">Karan Aujla</div>`,
        poster:"img/10.jpg"
    },
    {
        id: 11,
        songName: `Ikk Munda<br>
        <div class="subtitle">Sheera Jasvir</div>`,
        poster:"img/11.jpg"
    },
    {
        id: 12,
        songName:`Tum Se Hi<br>
        <div class="subtitle">Mohit Chauhan and Pritam Chakraborty</div>`,
        poster:"img/12.jpg"
    },
    {
        id: 13,
        songName:`Kamle <br>
        <div class="subtitle">Akasa and Yasser Desai</div>`,
        poster:"img/13.jpg"
    },
    {
        id: 14,
        songName: `Red Rose<br>
        <div class="subtitle">Kelam Siwach</div>`,
        poster:"img/14.jpg"
    },
    {
        id: 15,
        songName: `Thoda Thoda Pyaar<br>
        <div class="subtitle">Kumar,Nilesh,Ahuja and Stebin Ben</div>`,
        poster:"img/15.jpg"
    },
    {
        id: 16,
        songName:`Laembadgini<br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:"img/16.jpg"
    },
    {
        id: 17,
        songName: `Call Aundi<br>
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster:"img/17.jpg"
    },
    {
        id: 18,
        songName: `Nature<br>
        <div class="subtitle">Kabira and NJ Nindaniya</div>`,
        poster:"img/18.jpg"
    },
    {
        id: 19,
        songName: `I dont Remember <br>
        <div class="subtitle">Deep Jandu</div>`,
        poster:"img/19.jpg"
    },
    {
        id: 20,
        songName: `Raja Rani<br>
       <div class="subtitle">Jatinder Brar</div>`,
        poster:"img/20.jpg"
    },
    {
        id: 21,
        songName: `Pyaar Tere Da Asaar<br>
        <div class="subtitle">Prabh Gill</div>`,
        poster:"img/21.jpg"
    },
    {
        id: 22,
        songName: `Tera Mera Vyah<br>
        <div class="subtitle">Jass Manak</div>`,
        poster:"img/22.jpg"
    },
    {
        id: 23,
        songName: `Same Time Same Jagah<br>
        <div class="subtitle">Sandeep Brar</div>`,
        poster:"img/23.jpg"
    },
    {
        id: 24,
        songName: `Blue Eyes<br>
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster:"img/24.jpg"
    },
    {
        id: 25,
        songName: `Pagal<br>
        <div class="subtitle">Gurnaam Bhullar</div>`,
        poster:"img/25.jpg"
    },
    {
        id: 26,
        songName: `Badnaam<br>
        <div class="subtitle">Mankirt Aulakh</div>`,
        poster:"img/26.jpg"
    },
    {
        id: 27,
        songName: `Zaroori Nai<br>
        <div class="subtitle">Afsana Khan</div>`,
        poster:"img/27.jpg"
    },
    {
        id: 28,
        songName: `Udd Gya<br>
        <div class="subtitle">B Praak and Jaani</div>`,
        poster:"img/28.jpg"
    },
    {
        id: 29,
        songName: `Kabhi Jo Badal Barse'<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/29.jpg"
    },
    {
        id: 30,
        songName: `Gustakhiyan<br>
        <div class="subtitle">gurnaam Bhullar</div>`,
        poster:"img/30.jpg"
    },
    {
        id: 31,
        songName:`Daru Badnaam<br>
        <div class="subtitle">Kamal Kahlon,Param Singh,and Pratik Stdio</div>`,
        poster:"img/31.jpg"
    },
    {
        id: 32,
        songName: `Humnava<br>
        <div class="subtitle">Mithoon and Papon</div>`,
        poster:"img/32.jpg"
    },
    {
        id: 33,
        songName: `Haaye Ve<br>
        <div class="subtitle">Ammy Virk</div>`,
        poster:"img/33.jpg"
    },
    {
        id: 34,
        songName: `Baarish<br>
        <div class="subtitle">Gajendra Verma and Mohammed Irfan</div>`,
        poster:"img/34.jpg"
    },
    {
        id: 35,
        songName:`Main Vichara<br>
        <div class="subtitle">Armaan Bedil</div>`, 
        poster:"img/35.jpg"
    },
    {
        id: 36,
        songName: `Kahani Suno 2.0<br>
        <div class="subtitle">Kaifi Khalil</div>`,
        poster:"img/36.jpg"
    },
    {
        id: 37,
        songName: `Ijazat<br>
        <div class="subtitle">Nehaal Naseem</div>`,
        poster:"img/37.jpg"
    },
    {
        id: 38,
        songName: `Qismat<br>
        <div class="subtitle">Ammy Virk</div>`,
        poster:"img/38.jpg"
    },
    {
        id: 39,
        songName: `Zaruri tha<br>
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster:"img/39.jpg"
    },
    {
        id: 40,
        songName: `Broken Heart 3<br>
        <div class="subtitle">Prabh Gill</div>`,
        poster:"img/40.jpg"
    },
    {
        id: 41,
        songName: `Baari(Reply Version)<br>
        <div class="subtitle">Bannet Dosanjh</div>`,
        poster:"img/41.jpg"
    },
    {
        id: 42,
        songName:`5 Taara<br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:"img/42.jpg"
    },
    {
        id: 43,
        songName: `Beliya<br>
        <div class="subtitle">B Praak and Jaani</div>`,
        poster:"img/43.jpg"
    },
    {
        id: 44,
        songName: `Thodi Der<br>
        <div class="subtitle">Farhan Saeed Kumar,and Shreya Ghoshal</div>`,
        poster:"img/44.jpg"
    },
    {
        id: 45,
        songName: `Chand Sifarish<br>
        <div class="subtitle">Kailash Kher and Shaan</div>`,
        poster:"img/45.jpg"
    },
    {
        id: 46,
        songName: `Shikayat<br>
        <div class="subtitle">AUR</div>`,
        poster:"img/46.jpg"
    },
    {
        id: 47,
        songName: `Ehsaas<br>
        <div class="subtitle">Sheera Jasvir</div>`,
        poster:"img/47.jpg"
    },
    {
        id: 48,
        songName: `Bolna<br>
        <div class="subtitle">Arijit Singh and Asees Kaur</div>`,
        poster:"img/48.jpg"
    },
    {
        id: 49,
        songName: `Attitude<br>
        <div class="subtitle">Raj Mawar</div>`,
        poster:"img/49.jpg"
    },
    {
        id: 50,
        songName: `Ajab si<br>
        <div class="subtitle">K.K</div>`,
        poster:"img/50.jpg"
    },
 ]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});


let masterPlay = document.getElementById('master_play');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href =  `audio/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
}); 

// search data start 
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_results.appendChild(card);
});


let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
        
    }
})
// search data end 

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
       case "repeat": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
       case "random": 
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});


const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}
const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href =  `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}


music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})




