// 本地翻译服务
const translations = {
    // 标题翻译
    titles: {
        '共处一室': 'Living Together',
        '雨': 'Rain',
        '自信': 'Confidence',
        '温柔': 'Gentleness',
        '坚强': 'Strength',
        '希望': 'Hope',
        '梦想': 'Dreams',
        '未来': 'Future',
        '爱情': 'Love',
        '友情': 'Friendship'
    },
    
    // 内容翻译
    contents: {
        '共处一室': [
            '在这个狭小的空间里，我们彼此相依。',
            '虽然有些拥挤，但很温暖。',
            '这就是我们的家。'
        ],
        '雨': [
            '雨滴敲打着窗户，',
            '像是在诉说着什么。',
            '我静静地听着。'
        ],
        '自信': [
            '我相信自己，',
            '因为我知道自己的价值。',
            '这就是我的力量。'
        ]
        // ... 其他内容的翻译
    }
};

// 翻译函数
function translate(text, targetLang) {
    if (targetLang === 'zh') {
        // 从英文翻译到中文
        for (const [zh, en] of Object.entries(translations.titles)) {
            if (en === text) return zh;
        }
        return text;
    } else {
        // 从中文翻译到英文
        return translations.titles[text] || text;
    }
}

// 翻译内容数组
function translateContent(content, targetLang) {
    if (targetLang === 'zh') {
        // 从英文翻译到中文
        for (const [zh, en] of Object.entries(translations.contents)) {
            if (JSON.stringify(en) === JSON.stringify(content)) {
                return zh;
            }
        }
        return content;
    } else {
        // 从中文翻译到英文
        return translations.contents[content] || content;
    }
}

// 导出翻译函数
export { translate, translateContent }; 