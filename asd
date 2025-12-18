<!DOCTYPE html>
<html lang="en">
<head>
  <script src="/assets/js/panic-core.js" defer></script>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ZXS CHAT</title>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet" />
  <style>
    /* Basic Reset & Font */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'JetBrains Mono', monospace;
      background: #f0f0f0;
      color: #333;
      display: flex;
      height: 100vh;
    }
    /* Container */
    #app {
      display: flex;
      width: 100%;
    }
    /* Sidebar */
    .sidebar {
      width: 250px;
      background: #fff;
      border-right: 1px solid #ccc;
      display: flex;
      flex-direction: column;
    }
    .sidebar-header {
      padding: 16px;
      border-bottom: 1px solid #ccc;
    }
    .sidebar-header h2 {
      font-size: 1.2em;
    }
    .section {
      padding: 8px 16px;
    }
    .section-title {
      font-weight: bold;
      margin-bottom: 8px;
    }
    .chat-list, .users-list {
      max-height: 200px;
      overflow-y: auto;
    }
    .chat-item, .user-item {
      padding: 8px;
      cursor: pointer;
      border-radius: 4px;
      transition: background 0.2s;
    }
    .chat-item:hover, .user-item:hover {
      background: #eee;
    }
    .active {
      background: #ddd;
      font-weight: bold;
    }
    /* Main Chat Area */
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .header {
      padding: 12px 16px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header-title {
      font-weight: bold;
    }
    .messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      background: #fafafa;
    }
    .message {
      margin-bottom: 12px;
      padding: 8px 12px;
      background: #fff;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    .message.self {
      background: #e0f7fa;
    }
    .message-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      font-size: 0.9em;
    }
    .message-content {
      font-size: 1em;
    }
    /* Input area */
    .input-area {
      display: flex;
      padding: 12px 16px;
      border-top: 1px solid #ccc;
    }
    #messageInput {
      flex: 1;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
    }
    #sendBtn {
      margin-left: 8px;
      padding: 8px 16px;
      border: none;
      background: #4caf50;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
    #sendBtn:hover {
      background: #45a049;
    }
    /* Modal for joining */
    #joinModal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .join-box {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      max-width: 400px;
      width: 90%;
    }
    .join-box h3 {
      margin-bottom: 12px;
    }
    .join-box input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .join-box button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 8px;
    }
    .join-box .connect-btn {
      background: #4caf50;
      color: #fff;
    }
    .join-box .demo-btn {
      background: transparent;
      color: #555;
    }
  </style>
</head>
<body>
  <div id="app">
    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <h2>ZXS CHAT</h2>
      </div>
      <div class="section">
        <div class="section-title">Channels</div>
        <div class="chat-item active" data-chat-type="public" data-chat-id="public">#public</div>
      </div>
      <div class="section">
        <div class="section-title">Direct Messages</div>
        <div id="dmList"></div>
      </div>
      <div class="section">
        <div class="section-title">Online Users</div>
        <div id="onlineUsers"></div>
      </div>
    </div>
    <!-- Main Chat -->
    <div class="main">
      <div class="header">
        <div class="header-title" id="chatTitle">#public</div>
        <!-- Buttons removed from here -->
      </div>
      <div class="messages" id="messages"></div>
      <div class="input-area">
        <input type="text" id="messageInput" placeholder="Type message and press Enter..." />
        <button id="sendBtn"><i class="fa fa-paper-plane"></i></button>
      </div>
    </div>
  </div>

  <!-- Join Modal -->
  <div id="joinModal">
    <div class="join-box">
      <h3>Connect to ZXS Chat</h3>
      <input type="text" id="usernameInput" placeholder="Enter username" maxlength="24" autofocus />
      <div>
        <button id="joinBtn" class="connect-btn">Connect</button>
        <button id="demoBtn" class="demo-btn">Demo</button>
      </div>
    </div>
  </div>

  <script src="https://cdn.scaledrone.com/scaledrone.min.js"></script>
  <script>
    // Basic JS logic
    const CLIENT_ID = "aSEKMcR4GsEZONob";
    let drone, room, userName, currentChat = { type: 'public', id: 'public' };
    const messagesEl = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatTitle = document.getElementById('chatTitle');
    const onlineUsersEl = document.getElementById('onlineUsers');
    const dmListEl = document.getElementById('dmList');

    let onlineUsers = new Map();
    let dmConversations = new Map();

    // Helper functions
    function uid() { return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,8); }
    function formatTime(iso) { return new Date(iso).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}); }
    function escapeHtml(str) { return str.replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":"&#39;" }[c])); }

    // Connect to room
    function connect() {
      drone = new ScaleDrone(CLIENT_ID, { data: { name: userName } });
      drone.on('open', () => {
        const roomName = "observable-" + btoa(window.location.hostname).replace(/[^a-zA-Z0-9]/g, '').slice(0,16);
        room = drone.subscribe(roomName);
        room.on('open', () => {
          drone.publish({ room: roomName, message: { type: 'join', name: userName, timestamp: new Date().toISOString() } });
        });
        room.on('data', (data, member) => {
          handleData(data, member);
        });
        room.on('member_join', updateOnline);
        room.on('member_leave', updateOnline);
        room.on('members', updateOnline);
      });
    }

    function handleData(data, member) {
      if (data.type === 'join') {
        showSystem(`${data.name} joined`);
      } else if (data.type === 'dm') {
        handleDM(data);
      } else if (data.id && (currentChat.type === 'public' || data.type === 'reaction')) {
        addMessage(data, data.name === userName);
      } else if (data.type === 'reaction') {
        // handle reactions (not fully implemented here)
      }
    }

    function updateOnline() {
      const members = room.members;
      onlineUsers.clear();
      onlineUsersEl.innerHTML = '';
      members.forEach(m => {
        if (m.clientData && m.clientData.name && m.clientData.name !== userName) {
          onlineUsers.set(m.id, m.clientData.name);
          const userDiv = document.createElement('div');
          userDiv.className = 'user-item';
          userDiv.textContent = m.clientData.name;
          userDiv.onclick = ()=> {
            addDMConversation(m.clientData.name);
            switchChat('dm', m.clientData.name);
          };
          onlineUsersEl.appendChild(userDiv);
        }
      });
    }

    function addDMConversation(username) {
      if (dmConversations.has(username)) return;
      dmConversations.set(username, []);
      const dmDiv = document.createElement('div');
      dmDiv.className = 'chat-item';
      dmDiv.textContent = '@' + username;
      dmDiv.onclick = ()=> { switchChat('dm', username); };
      dmListEl.appendChild(dmDiv);
    }

    function switchChat(type, id) {
      currentChat = { type, id };
      chatTitle.textContent = type === 'public' ? '#public' : '@' + id;
      document.querySelectorAll('.chat-item').forEach(c => c.classList.remove('active'));
      const activeItem = document.querySelector(`[data-chat-id="${id}"]`);
      if (activeItem) activeItem.classList.add('active');
      messagesEl.innerHTML = '';
      if (type === 'dm' && dmConversations.has(id)) {
        dmConversations.get(id).forEach(msg => addMessage(msg, msg.name===userName));
      }
      messageInput.placeholder = type === 'public' ? 'Type message...' : 'Type DM message...';
    }

    function addMessage(data, isSelf=false) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'message' + (isSelf ? ' self' : '');
      msgDiv.innerHTML = `
        <div class="message-header">
          <span>${escapeHtml(data.name || 'Unknown')}</span>
          <span>${formatTime(data.timestamp)}</span>
        </div>
        <div class="message-content">${escapeHtml(data.text || '')}</div>
      `;
      messagesEl.appendChild(msgDiv);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    // Send message
    function sendMessage() {
      const text = messageInput.value.trim();
      if (!text) return;
      const id = uid();
      const timestamp = new Date().toISOString();

      if (currentChat.type === 'public') {
        const payload = { id, text, name: userName, timestamp };
        drone.publish({ room: room.name, message: payload });
        // Removed addMessage() here to prevent duplication
      } else if (currentChat.type === 'dm') {
        const payload = { id, type: 'dm', text, name: userName, target: currentChat.id, timestamp };
        drone.publish({ room: room.name, message: payload });
        if (!dmConversations.has(currentChat.id)) addDMConversation(currentChat.id);
        dmConversations.get(currentChat.id).push(payload);
        // Removed addMessage() here as well
      }
      messageInput.value = '';
    }

    // Handle DM messages
    function handleDM(data) {
      const partner = data.name === userName ? data.target : data.name;
      if (!dmConversations.has(partner)) addDMConversation(partner);
      dmConversations.get(partner).push(data);
      if (currentChat.type === 'dm' && currentChat.id === partner) {
        addMessage(data, data.name===userName);
      } else {
        // handle unread (not shown here)
      }
    }

    // Event listeners
    document.getElementById('joinBtn').onclick = () => {
      userName = document.getElementById('usernameInput').value.trim();
      if (!userName) { alert('Enter username'); return; }
      document.getElementById('joinModal').style.display = 'none';
      connect();
    };
    document.getElementById('demoBtn').onclick = () => {
      userName = 'DemoUser';
      document.getElementById('joinModal').style.display = 'none';
      connect();
    };
    document.getElementById('sendBtn').onclick = sendMessage;
    document.getElementById('messageInput').onkeydown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    };
    document.querySelectorAll('.chat-item').forEach(c => {
      c.onclick = () => {
        const type = c.dataset.chatType;
        const id = c.dataset.chatId;
        switchChat(type, id);
      };
    });
    // Removed event handlers for invite and leave buttons as per previous instructions

    // On load
    window.onload = () => {
      // optional: load stored username
      document.getElementById('usernameInput').value = localStorage.getItem('ln-username') || '';
      // show welcome message
      addMessage({ name: 'System', text: 'Welcome to ZXS CHAT!', timestamp: new Date().toISOString() });
    };
  </script>
</body>
</html>
