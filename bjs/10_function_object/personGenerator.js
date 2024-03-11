const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анастасия",
            "id_2": "Марина",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Оксана",
            "id_6": "Наталья",
            "id_7": "Мария",
            "id_8": "Яна",
            "id_9": "Елена",
            "id_10": "Надежда"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    randomGender: function() {
        gender = [this.GENDER_MALE,this.GENDER_FEMALE];
        randomG = Math.round(Math.random()*(gender.length-1));
        console.log(gender[randomG]);
        pol = gender[randomG];
        return pol;
        
    }, 
            
    randomFirstName: function() {
        console.log(pol);
        if (pol === this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);            
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },    

    randomSurname: function() {
        console.log(pol);
        if (pol === this.GENDER_MALE){
            return this.randomValue(this.surnameJson);            
        }
        else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    }, 

    randomYear: function() {
       let year = 1960 + Math.round(Math.random()*65);
        return year;
    }, 

    getPerson: function () {
        this.person = {}; // Появление личности;
        this.person.gender = this.randomGender(); // Подбор пола;
        this.person.surname = this.randomSurname(); //failiya
        this.person.firstName = this.randomFirstName(); // Подбор имени;
        this.person.year = this.randomYear(); //godrozdenia
        return this.person;
    }

};
