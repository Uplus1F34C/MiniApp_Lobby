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



function getRandomMark() {
    return Math.floor(Math.random() * 4); 
}

let GuestData = { 
    "1": {
        "title": "Введение в информационные технологии",
        "topics": {
            "1": {
                "title": "Экскурсия по технопарку. Техника безопасности",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/Protect.png",
                "mark": getRandomMark(),
                "X": 1
            },
            "2": {
                "title": "Среда окружения, работа с файлами",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/Windows.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "3": {
                "title": "Облачные сервисы: виды и функционал",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/Cloud.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "4": {
                "title": "Создание презентации\"IT-Я\"",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/Presentation.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "5": {
                "title": "Соревнование по киберспортивной Дисциплине",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/Game.png",
                "mark": getRandomMark(),
                "X": 4
            }
        }
    },

    "2": {
        "title": "Програмированеи на Python",
        "topics": { 
            "1": {
                "title": "Введение в программирование",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/python.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "2": {
                "title": "Числовые переменные, ввод и вывод данных",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/numbers.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "3": {
                "title": "Операции с данными",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/calc.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "4": {
                "title": "Условия",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/vetv.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "5": {
                "title": "Циклы",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/sicl.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "6": {
                "title": "Строковые переменные",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/text.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "7": {
                "title": "Списки",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/list.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "8": {
                "title": "Словари и множества",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/dict.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "9": {
                "title": "Функциональное программирование",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/func.png",
                "mark": getRandomMark(),
                "X": 5
            },
            "10": {
                "title": "Алгоритмическое соревнование",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/test.png",
                "mark": getRandomMark(),
                "X": 4
            },
            "11": {
                "title": "Работа с библиотеками",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/books.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "12": {
                "title": "Графика в python",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/videocard.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "13": {
                "title": "Соревнование \"Добро пожаловать в виртуальный мир\"",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/vr.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "14": {
                "title": "Кейс: \"Создание игры\"",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/Game.png",
                "mark": getRandomMark(),
                "X": 5
            }
        }
    },
    "3": {
        "title": "Микроэлектроника",
        "topics": { 
            "1": {
                "title": "Электричество, закон Ома, электрические компоненты",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/electro.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "2": {
                "title": "Знакомство с Tinkercad",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/tinkercad.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "3": {
                "title": "Сборка электрической схемы на макетной плате",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/plata.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "4": {
                "title": "Микроконтроллеры, плата Arduino, Arduino IDE",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/uno.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "5": {
                "title": "Основы синтаксиса языка “Arduino Wiring“",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT//c++.png",
                "mark": getRandomMark(),
                "X": 4
            },
            "6": {
                "title": "Работа с последовательным портом",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/bin.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "7": {
                "title": "Построение логических схем",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/logic.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "8": {
                "title": "Цифровой сигнал",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/1.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "9": {
                "title": "Аналоговый сигнал",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/123.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "10": {
                "title": "Считывание аналогового значения",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/nbin.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "11": {
                "title": "Подключение сервоприводов",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/motor.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "12": {
                "title": "Подключение дисплея",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/screen.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "13": {
                "title": "Кейс: «Создание МФУ»",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/mfu.png",
                "mark": getRandomMark(),
                "X": 5
            }
        }
    },

    "4": {
        "title": "Веб-разработка",
        "topics": { 
            "1": {
            "title": "Введение в веб-разработку",
            "description": "Описание-Описание-Описание-Описание-Описание-Описание",
            "img": "S-IT/internet.png",
            "mark": getRandomMark(),
            "0": 0,
            "X": 1
            },
            "2": {
                "title": "Основные теги HTML",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/html.png",
                "mark": getRandomMark(),
                "0": 0,
                "X": 3
            },
            "3": {
                "title": "Теги, парные и одинарные",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/html_tags.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "4": {
                "title": "Атрибуты тегов",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/plus.png",
                "mark": getRandomMark(),
                "X": 2
            },
            "5": {
                "title": "Каскадная таблица стилей",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/css.png",
                "mark": getRandomMark(),
                "X": 4
            },
            "6": {
                "title": "Наследование стилей",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/alph.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "7": {
                "title": "Интеграция медиа ресурсов",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/video.png",
                "mark": getRandomMark(),
                "X": 3
            },
            "8": {
                "title": "Позиционирование элементов",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/marker.png",
                "mark": getRandomMark(),
                "X": 4
            },
            "9": {
                "title": "Кейс: «Создание сайта-визитки»",
                "description": "Описание-Описание-Описание-Описание-Описание-Описание",
                "img": "S-IT/doc.png",
                "mark": getRandomMark(),
                "X": 5
            } 
        }
    }
};

let TopicsData = {}
let NameData = {}
let GroupData = {}
let PointData = {}

const MARK_COLORS = {
    3: '#4AB968', // зеленый
    2: '#E6F355', // желтый
    1: '#F35555', // красный
    0: '#D4D4D4', // серый (для mark: 0)
    default: '#D4D4D4' // серый (по умолчанию)
};

const API_BASE_URL = 'http://localhost:8000';

async function fetchMarksData(tgId) {
    try {
        const response = await fetch(`${API_BASE_URL}/get_marks/${tgId}`);
        const user = await fetch(`${API_BASE_URL}/get_student_info/${tgId}`);
        if (!response.ok) throw new Error(`user: HTTP error! status: ${response.status}`);
        if (!user.ok) throw new Error(`user: HTTP error! status: ${response.status}`);
        const data = await response.json();
        const userdata = await user.json();
        
        if (data.status && userdata.status && !data.error && data.topics) {
            TopicsData = data.topics;
            NameData = userdata.name;
            GroupData = userdata.group;
            PointData = userdata.points;
        } else {
            TopicsData = GuestData;
            NameData = "Гость";
            GroupData = "C-IT-1";
            PointData = "0";
        }
    } catch (error) {
        console.error('Ошибка при запросе данных тем:', error);
        return {};
    }
}

async function initializeTopics() {
    const container = document.getElementById('Topic-container');

    // Показываем заглушку на время загрузки
    container.innerHTML = '<p>Загрузка данных тем...</p>';

    // Получаем данные с сервера
    if (userId != 0) {
        await fetchMarksData(userId)
    } else {
        TopicsData = GuestData;
        NameData = "Гость";
        GroupData = "C-IT-1";
        PointData = "0";
    }

    document.getElementById('Name').textContent = `Привет, ${NameData}!`
    document.getElementById('Group').textContent = `Группа: ${GroupData}`
    document.getElementById('Point').textContent = `Баллы: ${PointData}`
    // Очищаем контейнер перед добавлением новых данных
    container.innerHTML = '';

    // Создаем блоки для каждой ветки (раздела)
    Object.keys(TopicsData).forEach(branchId => {
        const branch = TopicsData[branchId];
        const branchBlock = document.createElement('div');
        branchBlock.textContent = branch.title;
        branchBlock.style.fontSize = '20px';
        branchBlock.style.textAlign = 'center';
        branchBlock.style.fontFamily = "Comic Relief";
        
        const topicsContainer = document.createElement('div');

        // Создаем кнопки для каждой темы
        Object.keys(branch.topics).forEach(topicId => {
            const topic = branch.topics[topicId];
            const topicBtn = document.createElement('button');

            // Устанавливаем цвет в зависимости от оценки
            topicBtn.style.backgroundColor = MARK_COLORS[topic.mark] || MARK_COLORS.default;
            
            // Добавляем изображение, если оно есть
            if (topic.img) {
                const img = document.createElement('img');
                img.src = `Img/TOPIC/${topic.img}`;
                topicBtn.appendChild(img);
            }

            // Обработчик клика по теме
            topicBtn.addEventListener('click', (event) => {
                showTopicInfo(topic, topicBtn, event);
                highlightSelectedTopic(topicBtn);
            });

            topicsContainer.appendChild(topicBtn);
        });

        branchBlock.appendChild(topicsContainer);
        container.appendChild(branchBlock);
    });
}

// Показывает информацию о теме
function showTopicInfo(topic, topicBtn, event) {
    const infoBlock = document.getElementById('info');
    if (!infoBlock) return;

    const mark = topic.mark;

    // Заполняем информацию
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const pointsElement = document.getElementById('points');
    const markElement = document.getElementById('mark');
    
    if (titleElement) titleElement.textContent = topic.title;
    if (descriptionElement) descriptionElement.textContent = topic.description;
    if (pointsElement) pointsElement.textContent = `${mark*topic["X"]}/${topic["X"]*3}`;

    // Устанавливаем цвет и текст оценки
    if (markElement) {
        markElement.style.backgroundColor = MARK_COLORS[mark] || MARK_COLORS.default;
        markElement.textContent = mark;
    }

    // Позиционируем блок информации
    positionInfoBlock(infoBlock, topicBtn, event);
    infoBlock.style.display = 'block';
}

// Подсвечивает выбранную тему
function highlightSelectedTopic(topicBtn) {
    // Сбрасываем стиль всех кнопок
    document.querySelectorAll('#Topic-container button').forEach(btn => {
        btn.style.border = '1px solid #000000';
    });
    // Подсвечиваем текущую
    topicBtn.style.border = '3px solid rgb(0, 82, 97)';
}

// Позиционирует блок информации
function positionInfoBlock(infoBlock, topicBtn, event) {
    const style = infoBlock.style;
    
    style.position = "fixed";
    style.left = "0px";
    style.bottom = "80px";

    if (window.innerWidth > 500) {
        // Для больших экранов - левый нижний угол
        style.top = "auto";
        style.right = "auto";
        style.width = "300px";
        style.borderRadius = "20px";
        style.left = "5px";
        style.bottom = "85px";
    } else if (window.innerWidth > 350) {
        // Для мобильной версии - сверху
        style.top = "80px"
        style.bottom = "auto";
        style.width = "100%";
        style.borderRadius = "0 0 20px 20px";
    } else {
        // Для мобильной версии - сверху
        style.top = "65px"
        style.bottom = "auto";
        style.width = "100%";
        style.borderRadius = "0 0 20px 20px";
    }
}

// Скрываем блок информации при клике вне его
document.addEventListener('click', (event) => {
    const infoBlock = document.getElementById('info');
    if (!infoBlock) return;
    
    if (!infoBlock.contains(event.target) && !event.target.closest('button')) {
        infoBlock.style.display = 'none';
        document.querySelectorAll('#Topic-container button').forEach(btn => {
            btn.style.border = '1px solid #000000';
        });
    }
});

// Инициализируем при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeTopics);