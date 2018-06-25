const items = {
    item1: {
        name: "Idli sambar",
        alias: "ಇಡ್ಲಿ ಸಾಂಬರ್",
        price: 50,
        status: "available",
        cuisine: "south indian",
        category: "idlis"
    },
    item2: {
        name: "Idli Vada",
        alias: "ಇಡ್ಲಿ ವಡಾ",
        price: 35,
        status: "available",
        cuisine: "south indian",
        category: "idlis"
    },
    item3: {
        name: "Idli Chutney",
        alias: "ಇಡ್ಲಿ ಚಟ್ನಿ",
        price: 35,
        cuisine: "south indian",
        category: "idlis"
    },
    item4: {
        name: "Khotto/Khottige",
        alias: "ಖೊಟ್ಟೊ / ಖೊಟ್ಟಿಗೆ",
        price: 35,
        status: "available",
        cuisine: "south indian",
        category: "idlis"
    },
    item5: {
        name: "Tomato Bath",
        alias: "ಟೊಮೇಟೊ ಬಾತ್",
        price: 35,
        status: "unavailable",
        cuisine: "south indian",
        category: "rice"
    },
    item6: {
        name: "Upma",
        alias: "ಉಪ್ಮಾ",
        price: 35,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item7: {
        name: "Puri Bhaji",
        alias: "ಪುರಿ ಬಾಜಿ",
        price: 55,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item8: {
        name: "Samabar Vada",
        alias: "ಸಂಬಾರ್ ವಡಾ",
        price: 55,
        status: "unavailable",
        cuisine: "south indian",
        category: "snacks"
    },
    item9: {
        name: "Poha",
        alias: "ಪೊಹಾ",
        price: 35,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item10: {
        name: "Fried Idli",
        alias: "ಫ್ರೈಡ್ ಇಡ್ಲಿ",
        price: 40,
        status: "available",
        cuisine: "south indian",
        category: "idlis"
    },
    item11: {
        name: "Dahi Vada",
        alias: "ಧಹಿ ವಾಡಾ",
        price: 40,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item12: {
        name: "Plain Dosa",
        alias: "ಸರಳ ದೋಸೆ",
        price: 50,
        status: "available",
        cuisine: "south indian",
        category: "dosas"
    },
    item14: {
        name: "Onion Dosa",
        alias: "ಈರುಳ್ಳಿ ದೋಸೆ",
        price: 50,
        status: "available",
        cuisine: "south indian",
        category: "dosas"
    },
    item15: {
        name: "Masala Dosa",
        alias: "ಮಸಾಲಾ ದೋಸೆ",
        price: 65,
        status: "available",
        cuisine: "south indian",
        category: "dosas"
    },
    item16: {
        name: "Paper Dosa",
        alias: "ಪೇಪರ್ ದೋಸೆ",
        price: 50,
        status: "available",
        cuisine: "south indian",
        category: "dosas"
    },
    item17: {
        name: "Tuppa Dosa",
        alias: "ತುಪ್ಪ ದೋಸೆ",
        price: 50,
        status: "available",
        cuisine: "south indian",
        category: "dosas"
    },
    item18: {
        name: "Set Dosa",
        alias: "ಸೆಟ್ ದೋಸೆ",
        price: 50,
        status: "available",
        cuisine: "south indian",
        category: "dosas"
    },
    item19: {
        name: "Neer Dosa",
        alias: "ನೀರ್ ದೋಸೆ",
        price: 50,
        status: "unavailable",
        cuisine: "south indian",
        category: "dosas"
    },
    item20: {
        name: "Rava Dosa",
        alias: "ರವ ದೋಸೆ",
        price: 50,
        status: "unavailable",
        cuisine: "south indian",
        category: "dosas"
    },
    item21: {
        name: "Onion Uthappa",
        alias: "ಈರುಳ್ಳಿ ಉತ್ತಪ್ಪ",
        price: 45,
        status: "available",
        cuisine: "south indian",
        category: "dosas"
    },
    item22: {
        name: "Vada",
        alias: "ವಡಾ",
        price: 25,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item23: {
        name: "Dal Vada",
        alias: "ದಾಲ್ ವಡಾ",
        price: 25,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item24: {
        name: "Onion Pakoda",
        alias: "ಈರುಳ್ಳಿ ಪಕೋಡಾ",
        price: 30,
        status: "unavailable",
        cuisine: "south indian",
        category: "snacks"
    },
    item25: {
        name: "Mangalore Buns",
        alias: "ಮಂಗಳೂರು ಬನ್ಸ್",
        price: 15,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item26: {

        name: "Masala Vada",
        alias: "ಮಸಾಲಾ ವಡಾ",
        price: 30,
        status: "unavailable",
        cuisine: "south indian",
        category: "snacks"
    },
    item27: {
        name: "Biscuit Roti",
        alias: "ಬಿಸ್ಕತ್ತು ರೊಟ್ಟಿ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item28: {
        name: "Goli Bhaje",
        alias: "ಗೋಲಿ ಭಜೆ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item29: {
        name: "Mysore Bonda",
        alias: "ಮೈಸೂರು ಬೋಂಡಾ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item30: {
        name: "Bread Bonda",
        alias: "ಬ್ರೆಡ್ ಬೋಂಡಾ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "snacks"
    },
    item31: {
        name: "Moode",
        alias: "ಮುಡೇ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "idlis"
    },
    item32: {
        name: "Thatte Idli",
        alias: "ತಟ್ಟೆ ಇಡ್ಲಿ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "idlis"
    },
    item33: {
        name: "Chitranna",
        alias:"ಚಿತ್ರಾನ್ನಾ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "rice"
    },
    item34: {
        name: "Lemon Rice",
        alias:"ನಿಂಬೆ ಅನ್ನ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "rice"
    },
    item35: {
        name: "Puliogare",
        alias:"ಪುಲಿಯೋಗರೆ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "rice"
    },
    item36: {
        name: "Bisi Bele Baath",
        alias:"ಬಿಸಿಬೇಳೆ ಬಾತ್‌",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "rice"
    },
    item37: {
        name: "Chow Chow Baath",
        alias:"ಚೌಚೌ ಬಾತ್‌",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "rice"
    },
    item38: {
        name: "Mini Thali",
        alias:"ಮಿನಿ ಥಾಲಿ",
        price: 30,
        status: "available",
        cuisine: "south indian",
        category: "thali"
    },
    item39: {
        name: "Regular Thali",
        alias:"ಸಾಮಾನ್ಯ ಥಾಲಿ",
        price: 50,
        status: "available",
        cuisine: "south indian",
        category: "thali"
    },
    item40: {
        name: "Deluxe Thali",
        alias:"ಡೀಲಕ್ಸ್ ಥಾಲಿ",
        price: 70,
        status: "available",
        cuisine: "south indian",
        category: "thali"
    }
}

export default items;