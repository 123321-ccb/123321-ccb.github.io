// 初始化轮播
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// 聊天功能
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// 添加消息到聊天界面
function addMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 模拟回复消息
function simulateResponse(message) {
    const responses = [
        "很高兴收到你的消息！",
        "这是一个很好的问题。",
        "让我想想怎么回答你...",
        "谢谢你的提问！",
        "这个问题很���趣。"
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => {
        addMessage(randomResponse, 'bot');
    }, 1000);
}

// 发送消息事件处理
function handleSend() {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        messageInput.value = '';
        simulateResponse(message);
    }
}

sendButton.addEventListener('click', handleSend);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
}); 