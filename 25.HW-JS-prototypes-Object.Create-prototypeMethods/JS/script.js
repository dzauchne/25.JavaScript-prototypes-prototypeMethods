"strict use";
/*1) Создать функцию - конструктор Person, которая будет содержать в себе имя, id, возраст, а также создать прототип для этой функции - конструктора - метод, который будет выводить в консоль сообщение Hello from prototype*/


function Person(firstName, lastName, id, age, hobbies) {
    this.fullName = {
            firstName: firstName,
            lastName: lastName,
        },
        this.id = id,
        this.age = age,
        this.hobbies = hobbies
}
Person.prototype.hello = function() {
    console.log("Hello from ", this)
    console.log("Hello from ", this.fullName.firstName)

}

let favouritePerson = new Person("Manuel", "Zauchner", 147, 45, ["aviation", "swimming", "reading"]);
let favouritePerson1 = new Person("Manuel3000", "Zauchner", 147, 45, ["aviation", "swimming", "reading"]);
console.log(favouritePerson);
favouritePerson.hello();
favouritePerson1.hello();










/*2) Создать 3 объекта самостоятельно.Сделать цепочку прототипов(объект должен наследоваться от предыдущего)*/
let goodTeacher = {
    education: "university",
    skillsIn: ["communication",
        "listening",
        "collaboration",
        "adaptability",
        "empathy",
        "patience"
    ],
    responsibleForTeachingQuality: "here",
    updatingSubjectKnowledge: "marked",
    investsIntoProfiDevelopment: 100,
    exchangeOfBestPractices: "always",
    engagingClassroomPresence: "checked",
    valueRealWorldLearning: "here",
    lifelongLoveOfLearning: "marked",
    isCompetentTeacher() {
        console.log("Professional")
    }
}
let ordinaryTeacher = {
    education: "self-taught or high-School",
    responsibleForTeachingQuality: "sometimes",
    updatingSubjectKnowledge: "rarely",
    investsIntoProfiDevelopment: 30,
    exchangeOfBestPractices: "occasionally",
    __proto__: goodTeacher,
}

let badTeacher = {
    education: "self-taught",
    responsibleForTeachingQuality: "unresponsible",
    exchangeOfBestPractices: "never",
    __proto__: ordinaryTeacher,
    isCompetentTeacher() {
        console.log("Amateur")
    }


}
console.log(ordinaryTeacher.skillsIn);
console.log(badTeacher.updatingSubjectKnowledge, badTeacher.skillsIn, badTeacher.valueRealWorldLearning, badTeacher.investsIntoProfiDevelopment);
console.log(badTeacher.isCompetentTeacher());
console.log(goodTeacher.isCompetentTeacher());
console.log(ordinaryTeacher.isCompetentTeacher());



/*3) Создать объект с помощью Object.create, а также задать для этого объекта прототип и после чего вывести его в консоль(используя специальный метод)*/

const Human = {
    typeObject: 'Human',
    getObject: function() {
        console.log(this)
    }
}


const vasa = Object.create(Human, {
    name: {
        value: "vasa",
        enumerable: true,
        writable: false,
        configurable: false
    },
    age: {
        value: 30,
        enumerable: true,
        configurable: false,
        writable: true,
    },
    id: {
        value: 10,
        enumerable: true
    }
})
console.log(vasa.typeObject)
console.log(vasa.name)
console.log(Object.getPrototypeOf(vasa))
vasa.getObject()