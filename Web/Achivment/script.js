let userId = 0

if (window.Telegram && window.Telegram.WebApp) {
    const TG = window.Telegram.WebApp

    TG.disableVerticalSwipes()

    const initData = TG.initData;

    // Парсим initData (он в формате URL-encoded строки)
    const params = new URLSearchParams(initData);
    const userStr = params.get('user'); // Получаем JSON строку с данными пользователя

        if (userStr) {
            const user = JSON.parse(userStr);
            userId = user.id;
        } else {
            console.error('User data not found in initData');
        }
    } else {
    console.error('Telegram WebApp API not available');
}
console.log('User ID:', userId);

function getRandomBoolean() {
  return Math.random() >= 0.5;
}

let GuestData = {
    "Кормилец": {
        "description": "Принеси вкусняшки к чаю",
        "type": "Achivment",
        "img": "Food",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Волонтер": {
        "description": "Стань волонтером кванториума",
        "type": "Achivment",
        "img": "GoodBoy",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Денис": {
        "description": "Допрыгни до потолка",
        "type": "Achivment",
        "img": "Denis",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Местный Жуков": {
        "description": "Хорошо покажи себя в роли тимлида",
        "type": "Achivment",
        "img": "teamlid",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Эврика!": {
        "description": "Найди неожиданное и эффективное решение проблемы",
        "type": "Achivment",
        "img": "idea",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Победитель": {
        "description": "Займи призовое место в не групповом соревновании",
        "type": "Test",
        "img": "Medal",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Отличник": {
        "description": "Получи максимально возможную оценку за год",
        "type": "Test",
        "img": "Profy",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Как?": {
        "description": "Получи максимально возможное количество баллов",
        "type": "Test",
        "img": "Quesion",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Превозмог": {
        "description": "Выйди со своим проектом на коллаборацию",
        "type": "Test",
        "img": "Star",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Активный": {
        "description": "Сходи на мероприятие кванториума",
        "type": "Achivment",
        "img": "event",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Командный игрок": {
        "description": "Прими активное участие в командной работе",
        "type": "Achivment",
        "img": "group",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Это моё?": {
        "description": "Создай свой кейс или проект",
        "type": "Achivment",
        "img": "Hummer",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Оратор": {
        "description": "Покажи всем, как надо говорить на публике",
        "type": "Achivment",
        "img": "Micro",
        "status": getRandomBoolean(),
        "point": 25
    },
    "Мастер": {
        "description": "Принеси настольную игру",
        "type": "Achivment",
        "img": "GameMaster",
        "status": getRandomBoolean(),
        "point": 25
    }
}

let AchievementsData = {}
let NameData = {}
let GroupData = {}
let PointData = {}

const API_BASE_URL = 'http://localhost:8000';

async function fetchAchivmentsData(tgId) {
    try {
        const response = await fetch(`${API_BASE_URL}/get_achivments/${tgId}`);
        const user = await fetch(`${API_BASE_URL}/get_student_info/${tgId}`);
        if (!response.ok) throw new Error(`user: HTTP error! status: ${response.status}`);
        if (!user.ok) throw new Error(`user: HTTP error! status: ${response.status}`);
        const data = await response.json();
        const userdata = await user.json();
        
        if (data.status && userdata.status && !data.error && data.achivments) {
            AchievementsData = data.achivments;
            NameData = userdata.name;
            GroupData = userdata.group;
            PointData = userdata.points;
        } else {
            AchievementsData = GuestData
            NameData = "Гость";
            GroupData = "C-IT-1";
            PointData = "0";
        }
    } catch (error) {
        console.error('Ошибка при запросе данных достижений:', error);
        return {};
    }
}

async function initializeAchivments() {
    const container = document.getElementById('Achivment-container');

    // Показываем заглушку на время загрузки
    container.innerHTML = '<p>Загрузка данных тем...</p>';

    // Получаем данные с сервера
    if (userId != 0) {
        AchievementsData = (await fetchAchivmentsData(userId)).Achivment;
        NameData = (await fetchAchivmentsData(userId)).Name;
        GroupData = (await fetchAchivmentsData(userId)).Group;
        PointData = (await fetchAchivmentsData(userId)).Point;
    } else {
        AchievementsData = GuestData
        NameData = "Гость"
        GroupData = "C-IT-1"
        PointData = "0"
    }


    document.getElementById('Name').textContent = `Привет, ${NameData}!`
    document.getElementById('Group').textContent = `Группа: ${GroupData}`
    document.getElementById('Point').textContent = `Баллы: ${PointData}`
    // Очищаем контейнер перед добавлением новых данных
    container.innerHTML = '';

    // Создаем достижения из JSON
    for (const [title, data] of Object.entries(AchievementsData)) {
        const ach = document.createElement('div');
        ach.className = `ach ${data.status ? 'ach_active' : 'ach_noactive'}`;
        
        ach.innerHTML = `
            <div class="ach-front">
                <img src="Img/ACHIVMENT/${data.img}.png" alt="${title}">
            </div>
            <div class="ach-back">
                <div class="ach-top">
                    <h3 class="ach-title">${title}</h3>
                </div>
                <div class="ach-bottom">
                    <p class="ach-desc">${data.description}<br>Баллы: ${data.point}</p>
                </div>
            </div>
        `;
        
        container.appendChild(ach);
    }

    

    // Обработчики кликов
    const achivments = document.querySelectorAll('.ach');
    
    achivments.forEach(ach => {
        ach.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Закрываем все открытые ачивки
            achivments.forEach(item => {
                if (item !== ach) {
                    item.classList.remove('active');
                }
            });
            
            // Переключаем текущую ачивку
            this.classList.toggle('active');
        });
    });
    
    // Закрытие при клике вне ачивки
    document.addEventListener('click', function() {
        achivments.forEach(ach => {
            ach.classList.remove('active');
        });
    });
};


// Инициализируем при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeAchivments);