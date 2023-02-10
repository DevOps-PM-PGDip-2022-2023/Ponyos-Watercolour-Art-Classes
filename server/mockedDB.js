exports.userList = [
  {
    id: "d747df7c",
    email: "admin@email.com",
    password: "admin",
    name: "Admin User",
    isAdmin: true
  },
  {
    id: "d7479d6t",
    email: "lily@gmail.com",
    password: "admin",
    name: "Lily Admin",
    isAdmin: true
  },
  {
    id: "763ec5f6",
    email: "john@email.com",
    password: "password",
    name: "John Ferrari",
    courses: {
      "Drawing": {
        enrollDt: "2023-01-10T19:33:42.825Z",
        extraTutor: false
      },
      "Watercolors": {
        enrollDt: "2023-01-11T19:33:42.825Z",
        extraTutor: true
      },
    },
  },
  {
    id: "9ec0b4eb",
    email: "maria@email.com",
    password: "password",
    name: "Maria Mercedes",
    courses: {
      "Watercolors": {
        enrollDt: "2023-01-10T19:33:42.825Z",
        extraTutor: false
      },
    },
  },
  {
    id: "764b2cb7",
    email: "clare@email.com",
    password: "password",
    name: "Clare Williams",
    courses: {
      "Drawing": {
        enrollDt: "2023-01-05T19:33:42.825Z",
        extraTutor: false
      },
      "DYI Arts": {
        enrollDt: "2023-01-15T19:33:42.825Z",
        extraTutor: false
      },
    },
  },
  {
    id: "28bca9e5",
    email: "james@email.com",
    password: "password",
    name: "James Ford",
    courses: {
      "Watercolors": {
        enrollDt: "2023-01-15T19:33:42.825Z",
        extraTutor: false
      },
    },
  },
  {
    id: "56376346",
    email: "rose@email.com",
    password: "password",
    name: "Rose Benetton",
    courses: {
      "DYI Arts": {
        enrollDt: "2023-01-23T19:33:42.825Z",
        extraTutor: false
      },
    },
  },

  {
    id: "763ed0aq",
    email: "mindy@gmail.com",
    password: "password",
    name: "Mindy User",
    courses: {
    },
  },
]

exports.courses = {
  "Watercolors":
  {
    desc: "Working with watercolors allows you to express your artistic sensibilities. Playful and unconventional techniques!",
    duration: "20",
    price: "29",
  },
  "Drawing": {
    desc: "Learn little knowledge in drawing to creating advanced art and having a deep understanding of drawing fundamentals.",
    duration: "8",
    price: "12",
  },
  "DYI Arts": {
    desc: "Plenty of art and craft classes that can help you learn DIY arts and crafts and master it in a step by step way.",
    duration: "16",
    price: "22",
  }
}

