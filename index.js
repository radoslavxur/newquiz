const questions = [
    { question: "Кой е авторът на философската творба 'Критика на чистия разум'?", answers: ["Хегел", "Кант", "Шопенхауер", "Ницше"], correct: "Кант" },
    { question: "В коя година е основана Организацията на обединените нации?", answers: ["1944", "1945", "1946", "1947"], correct: "1945" },
    { question: "Как се казва най-дългата река в Европа?", answers: ["Дунав", "Рейн", "Волга", "Дон"], correct: "Волга" },
    { question: "Кой е открил закона за електромагнетизма?", answers: ["Максуел", "Фарадей", "Ампер", "Волта"], correct: "Фарадей" },
    { question: "Коя е столицата на Казахстан?", answers: ["Алмати", "Астана", "Шимкент", "Семей"], correct: "Астана" },
    { question: "Кой е написал операта 'Вълшебната флейта'?", answers: ["Бетовен", "Хайдн", "Моцарт", "Шуберт"], correct: "Моцарт" },
    { question: "Колко хромозомни двойки има в човешката клетка?", answers: ["22", "23", "24", "46"], correct: "23" },
    { question: "Кой е изобретил парната машина?", answers: ["Джеймс Уат", "Джордж Стивънсън", "Томас Нюкомен", "Ричард Тревитик"], correct: "Джеймс Уат" },
    { question: "Коя е най-голямата пустиня в Азия?", answers: ["Такламакан", "Тар", "Каракум", "Гоби"], correct: "Гоби" },
    { question: "Кой е авторът на романа 'Граф Монте Кристо'?", answers: ["Виктор Юго", "Стендал", "Александър Дюма", "Балзак"], correct: "Александър Дюма" },
    { question: "Коя е химичната формула на сярна киселина?", answers: ["HCl", "HNO3", "H2SO4", "H3PO4"], correct: "H2SO4" },
    { question: "Кой е написал 'Анна Каренина'?", answers: ["Достоевски", "Чехов", "Толстой", "Тургенев"], correct: "Толстой" },
    { question: "В коя държава се намира планината Килиманджаро?", answers: ["Кения", "Уганда", "Танзания", "Етиопия"], correct: "Танзания" },
    { question: "Кой е първият лауреат на Нобелова награда за физика?", answers: ["Мария Кюри", "Вилхелм Рьонтген", "Анри Бекерел", "Макс Планк"], correct: "Вилхелм Рьонтген" },
    { question: "Коя е столицата на Нова Зеландия?", answers: ["Окланд", "Крайстчърч", "Уелингтън", "Хамилтън"], correct: "Уелингтън" },
    { question: "Кой е написал 'Братя Карамазови'?", answers: ["Толстой", "Гогол", "Тургенев", "Достоевски"], correct: "Достоевски" },
    { question: "Какъв е атомният номер на желязото?", answers: ["24", "26", "28", "30"], correct: "26" },
    { question: "Кой е открил Австралия за европейците?", answers: ["Джеймс Кук", "Абел Тасман", "Уилям Дампир", "Джорджо Торес"], correct: "Джеймс Кук" },
    { question: "Коя е столицата на Пакистан?", answers: ["Карачи", "Лахор", "Исламабад", "Фейсалабад"], correct: "Исламабад" },
    { question: "Кой е авторът на 'Илиада' и 'Одисея'?", answers: ["Херодот", "Омир", "Тукидид", "Есхил"], correct: "Омир" },
    { question: "Каква е скоростта на звука при 20°C?", answers: ["320 м/с", "343 м/с", "360 м/с", "380 м/с"], correct: "343 м/с" },
    { question: "Кой е написал 'Капиталът'?", answers: ["Енгелс", "Ленин", "Маркс", "Троцки"], correct: "Маркс" },
    { question: "Коя е най-дълбоката езеро в Африка?", answers: ["Виктория", "Малави", "Чад", "Танганика"], correct: "Танганика" },
    { question: "Кой е изобретил самолета?", answers: ["Луис Блерио", "Братя Райт", "Ото Лилиентал", "Сантос Дюмон"], correct: "Братя Райт" },
    { question: "Коя е столицата на Аржентина?", answers: ["Сантяго", "Монтевидео", "Буенос Айрес", "Асунсион"], correct: "Буенос Айрес" },
    { question: "Кой е написал 'Процесът'?", answers: ["Томас Ман", "Херман Хесе", "Франц Кафка", "Стефан Цвайг"], correct: "Франц Кафка" },
    { question: "Коя е най-голямата жлеза в човешкото тяло?", answers: ["Панкреас", "Далак", "Черен дроб", "Щитовидна жлеза"], correct: "Черен дроб" },
    { question: "Кой е откривателят на радиото?", answers: ["Едисон", "Херц", "Маркони", "Попов"], correct: "Маркони" },
    { question: "В коя година е издадена Магна Карта?", answers: ["1215", "1265", "1315", "1415"], correct: "1215" },
    { question: "Коя е столицата на Норвегия?", answers: ["Берген", "Осло", "Трондхайм", "Ставангер"], correct: "Осло" },
    { question: "Кой е написал 'Мадам Бовари'?", answers: ["Балзак", "Зола", "Флобер", "Мопасан"], correct: "Флобер" },
    { question: "Какъв е химичният символ на живака?", answers: ["Hg", "Pb", "Ag", "Au"], correct: "Hg" },
    { question: "В коя година е открит пеницилинът?", answers: ["1922", "1928", "1935", "1940"], correct: "1928" },
    { question: "Коя е столицата на Иран?", answers: ["Техеран", "Исфахан", "Шираз", "Табриз"], correct: "Техеран" },
    { question: "Кой е написал 'Граф Дракула'?", answers: ["Мери Шели", "Брам Стокър", "Едгар По", "Оскар Уайлд"], correct: "Брам Стокър" },
    { question: "Колко ребра има човекът?", answers: ["20", "22", "24", "26"], correct: "24" },
    { question: "Кой е авторът на 'Отело'?", answers: ["Марлоу", "Шекспир", "Джонсън", "Чосър"], correct: "Шекспир" },
    { question: "Коя е най-голямата страна в Африка по площ?", answers: ["Судан", "Конго", "Алжир", "Либия"], correct: "Алжир" },
    { question: "Кой е открил неутрона?", answers: ["Ръдърфорд", "Бор", "Чадуик", "Дирак"], correct: "Чадуик" },
    { question: "В коя година е основана НАТО?", answers: ["1947", "1949", "1951", "1955"], correct: "1949" },
    { question: "Коя е столицата на Финландия?", answers: ["Хелзинки", "Турку", "Тампере", "Еспо"], correct: "Хелзинки" },
    { question: "Кой е написал 'Червено и черно'?", answers: ["Балзак", "Флобер", "Стендал", "Зола"], correct: "Стендал" },
    { question: "Каква е температурата на абсолютна нула?", answers: ["-173°C", "-223°C", "-273°C", "-373°C"], correct: "-273°C" },
    { question: "Кой е основателят на психоанализата?", answers: ["Юнг", "Адлер", "Фройд", "Ериксон"], correct: "Фройд" },
    { question: "Коя е столицата на Португалия?", answers: ["Порто", "Лисабон", "Коимбра", "Брага"], correct: "Лисабон" },
    { question: "Кой е написал 'Пътешествие до центъра на Земята'?", answers: ["Хърбърт Уелс", "Жул Верн", "Конан Дойл", "Стивънсън"], correct: "Жул Верн" },
    { question: "Кой елемент е най-разпространен в земната кора?", answers: ["Силиций", "Желязо", "Алуминий", "Кислород"], correct: "Кислород" },
    { question: "В коя година е Френската революция?", answers: ["1776", "1789", "1799", "1815"], correct: "1789" },
    { question: "Коя е столицата на Тайланд?", answers: ["Чиангмай", "Паттая", "Банкок", "Пукет"], correct: "Банкок" },
    { question: "Кой е написал 'Войната на световете'?", answers: ["Жул Верн", "Хърбърт Уелс", "Айзък Азимов", "Рей Бредбъри"], correct: "Хърбърт Уелс" },
    { question: "Колко е ускорението на земното притегляне?", answers: ["8.8 м/с²", "9.8 м/с²", "10.8 м/с²", "11.8 м/с²"], correct: "9.8 м/с²" },
    { question: "Кой е написал 'Митовете на народите'?", answers: ["Карл Юнг", "Мирча Елиаде", "Джоузеф Кембъл", "Клод Леви-Строс"], correct: "Джоузеф Кембъл" },
    { question: "Коя е столицата на Индонезия?", answers: ["Сурабая", "Бандунг", "Джакарта", "Медан"], correct: "Джакарта" },
    { question: "Кой е открил рентгеновите лъчи?", answers: ["Кюри", "Рьонтген", "Бекерел", "Томсон"], correct: "Рьонтген" },
    { question: "В коя година е убит Юлий Цезар?", answers: ["55 пр.н.е.", "48 пр.н.е.", "44 пр.н.е.", "40 пр.н.е."], correct: "44 пр.н.е." },
    { question: "Коя е столицата на Нигерия?", answers: ["Лагос", "Ибадан", "Кано", "Абуджа"], correct: "Абуджа" },
    { question: "Кой е написал 'Господарят на пръстените'?", answers: ["К.С. Луис", "Дж.К. Роулинг", "Дж.Р.Р. Толкин", "Джордж Мартин"], correct: "Дж.Р.Р. Толкин" },
    { question: "Какъв е химичният символ на калия?", answers: ["Ca", "K", "Kr", "Cu"], correct: "K" },
    { question: "В коя година е открит ДНК-ът?", answers: ["1943", "1953", "1963", "1973"], correct: "1953" },
    { question: "Коя е столицата на Саудитска Арабия?", answers: ["Джеда", "Мека", "Рияд", "Медина"], correct: "Рияд" },
    { question: "Кой е написал 'Гордост и предразсъдъци'?", answers: ["Шарлот Бронте", "Джейн Остин", "Джордж Елиът", "Мери Шели"], correct: "Джейн Остин" },
    { question: "Колко кости има в човешкото ухо?", answers: ["2", "3", "4", "5"], correct: "3" },
    { question: "Кой е основателят на будизма?", answers: ["Конфуций", "Лао Дзъ", "Сидхарта Гаутама", "Махавира"], correct: "Сидхарта Гаутама" },
    { question: "Коя е столицата на Чили?", answers: ["Валпараисо", "Консепсион", "Сантяго", "Антофагаста"], correct: "Сантяго" },
    { question: "Кой е написал 'Дон Жуан'?", answers: ["Молиер", "Байрон", "Пушкин", "Моцарт"], correct: "Байрон" },
    { question: "Какъв е химичният символ на натрия?", answers: ["Na", "Ni", "Ne", "N"], correct: "Na" },
    { question: "В коя година е основана Европейската общност?", answers: ["1951", "1957", "1963", "1967"], correct: "1957" },
    { question: "Коя е столицата на Мароко?", answers: ["Казабланка", "Маракеш", "Рабат", "Фес"], correct: "Рабат" },
    { question: "Кой е написал 'Евгений Онегин'?", answers: ["Лермонтов", "Гогол", "Пушкин", "Толстой"], correct: "Пушкин" },
    { question: "Колко зъба има пълнолетен човек?", answers: ["28", "30", "32", "34"], correct: "32" },
    { question: "Кой е изобретил телескопа?", answers: ["Галилей", "Нютон", "Ханс Липершей", "Кеплер"], correct: "Ханс Липершей" },
    { question: "Коя е столицата на Перу?", answers: ["Куско", "Лима", "Арекипа", "Трухильо"], correct: "Лима" },
    { question: "Кой е написал 'Сто години самота'?", answers: ["Варгас Льоса", "Кортасар", "Маркес", "Боргес"], correct: "Маркес" },
    { question: "Какъв е химичният символ на хлора?", answers: ["Ch", "Cl", "Cr", "Co"], correct: "Cl" },
    { question: "В коя година е битката при Ватерло?", answers: ["1812", "1813", "1814", "1815"], correct: "1815" },
    { question: "Коя е столицата на Украйна?", answers: ["Харков", "Одеса", "Лвов", "Киев"], correct: "Киев" },
    { question: "Кой е написал 'Декамерон'?", answers: ["Петрарка", "Данте", "Бокачо", "Ариосто"], correct: "Бокачо" },
    { question: "Колко камери има сърцето?", answers: ["2", "3", "4", "5"], correct: "4" },
    { question: "Кой е основателят на ислямската религия?", answers: ["Али", "Абу Бакр", "Мохамед", "Омар"], correct: "Мохамед" },
    { question: "Коя е столицата на Венецуела?", answers: ["Маракайбо", "Валенсия", "Каракас", "Барселона"], correct: "Каракас" },
    { question: "Кой е написал 'Госпожа Бовари'?", answers: ["Стендал", "Балзак", "Флобер", "Зола"], correct: "Флобер" },
    { question: "Какво е pH на чистата вода?", answers: ["6", "7", "8", "9"], correct: "7" },
    { question: "В коя година е открита Америка от Колумб?", answers: ["1488", "1490", "1492", "1494"], correct: "1492" },
    { question: "Коя е столицата на Беларус?", answers: ["Гродно", "Брест", "Минск", "Витебск"], correct: "Минск" },
    { question: "Кой е написал 'Хайку'?", answers: ["Мацуо Башо", "Чикамацу", "Ихара Сайкаку", "Йоса Бусон"], correct: "Мацуо Башо" },
    { question: "Колко литра кръв има в човешкото тяло?", answers: ["3-4", "4-5", "5-6", "6-7"], correct: "5-6" },
    { question: "Кой е открил ваксинацията?", answers: ["Луи Пастьор", "Робърт Кох", "Едуард Дженър", "Жозеф Листър"], correct: "Едуард Дженър" },
    { question: "Коя е столицата на Словакия?", answers: ["Кошице", "Братислава", "Прешов", "Жилина"], correct: "Братислава" },
    { question: "Кой е написал 'Мизерабъл'?", answers: ["Флобер", "Балзак", "Зола", "Виктор Юго"], correct: "Виктор Юго" },
    { question: "Какъв е химичният символ на флуора?", answers: ["Fl", "Fe", "Fr", "F"], correct: "F" },
    { question: "В коя година е основана Руската федерация?", answers: ["1989", "1990", "1991", "1992"], correct: "1991" },
    { question: "Коя е столицата на Колумбия?", answers: ["Медельин", "Кали", "Богота", "Картахена"], correct: "Богота" },
    { question: "Кой е написал 'Хамлет'?", answers: ["Марлоу", "Джонсън", "Шекспир", "Чосър"], correct: "Шекспир" },
    { question: "Колко неврона има в човешкия мозък приблизително?", answers: ["10 милиарда", "50 милиарда", "86 милиарда", "100 милиарда"], correct: "86 милиарда" },
    { question: "Кой е откривателят на електрона?", answers: ["Томсон", "Ръдърфорд", "Бор", "Планк"], correct: "Томсон" },
    { question: "Коя е столицата на Ирак?", answers: ["Басра", "Мосул", "Ербил", "Багдад"], correct: "Багдад" },
    { question: "Кой е написал 'Пигмалион'?", answers: ["Оскар Уайлд", "Бернард Шоу", "Голсуърди", "Пинтър"], correct: "Бернард Шоу" },
    { question: "Каква е формулата на глюкозата?", answers: ["C5H10O5", "C6H12O6", "C7H14O7", "C12H22O11"], correct: "C6H12O6" },
    { question: "В коя година е Октомврийската революция в Русия?", answers: ["1905", "1914", "1917", "1921"], correct: "1917" },
    { question: "Коя е столицата на Сингапур?", answers: ["Само Сингапур", "Нейс", "Сентоза", "Джурон"], correct: "Само Сингапур" },
    { question: "Кой е написал 'Парфюмът'?", answers: ["Хайнрих Бьол", "Патрик Зюскинд", "Гюнтер Грас", "Томас Ман"], correct: "Патрик Зюскинд" },
    { question: "Колко хромозоми има в яйцеклетката?", answers: ["12", "23", "46", "48"], correct: "23" },
    { question: "Кой е изобретил печатарската преса?", answers: ["Леонардо да Винчи", "Йоханес Гутенберг", "Роджър Бейкън", "Никола Тесла"], correct: "Йоханес Гутенберг" }
];


const question = document.querySelector("#question");
const btn = document.querySelectorAll(".answer");
const result = document.querySelector("#otgovor");
let correct = 0;
let wrong = 0;
let currentIndex = 0;
let finished = false;
const correctSound = document.getElementById("correct");
const wrongSound = document.getElementById("wrong");
let fiftyUses = 4;

document.addEventListener("click", function() {
    music.play();
}, { once: true });

function loadQuestion(index) {
    let current = questions[index];
    btn.forEach(b => b.style.visibility = "visible");
    question.innerHTML = current.question;
    btn[0].querySelector(".answer-text").innerHTML = current.answers[0];
    btn[1].querySelector(".answer-text").innerHTML = current.answers[1];
    btn[2].querySelector(".answer-text").innerHTML = current.answers[2];
    btn[3].querySelector(".answer-text").innerHTML = current.answers[3];
}

loadQuestion(0);

btn.forEach((button) => {
    button.addEventListener("click", function() {
        checkAnswer(this.querySelector(".answer-text").innerText);
    });
});


document.getElementById("fifty").addEventListener("click", fiftyFifty);

function fiftyFifty() {
    if (fiftyUses <= 0) return;
    
    fiftyUses--;
    document.getElementById("fifty").innerText = `50/50 (${fiftyUses})`;
    
    if (fiftyUses === 0) {
        document.getElementById("fifty").style.opacity = "0.4";
        document.getElementById("fifty").disabled = true;
    }
    
    let correctAnswer = questions[currentIndex].correct;
    let wrongAnswers = questions[currentIndex].answers.filter(a => a !== correctAnswer);
    let randomWrong = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
    
    btn.forEach(button => {
        let text = button.querySelector(".answer-text").innerText;
        if (text !== correctAnswer && text !== randomWrong) {
            button.style.visibility = "hidden";
        }
    });
}

function checkAnswer(answer) {   
    if (answer === questions[currentIndex].correct) {
        result.innerText = "Правилно! ✅";
        wrongSound.pause();
        wrongSound.currentTime = 0;
        correct++;
        correctSound.play();
    } else {
        result.innerText = `Грешно! ❌ Верният отговор е: ${questions[currentIndex].correct}`;
        correctSound.pause();
        correctSound.currentTime = 0;
        wrong++;
        wrongSound.play();
    }
    result.style.visibility = "visible";
    setTimeout(nextQuestion, 2500);
    if (!finished) {
        setTimeout(() => {
            result.style.visibility = "hidden";
        }, 2500);
    }
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= questions.length) {
        finished = true;
        result.style.visibility = "visible";
        result.innerText = `Верни: ${correct} от 100 | Грешни: ${wrong}`;
        return;
    }
    loadQuestion(currentIndex);
    if (currentIndex === 25) {
        document.getElementById("level").innerText = "⚡ Средно ниво!";
    } else if (currentIndex === 50) {
        document.getElementById("level").innerText = "🔥 Трудно ниво!";
    } else if (currentIndex === 75) {
        document.getElementById("level").innerText = "💀 Експертно ниво!";
    }
}

const music = document.getElementById("music");

document.addEventListener("click", function() {
    music.play();
}, { once: true })
