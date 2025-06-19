// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Select forms and containers
    const playerForm = document.getElementById("player-form");
    const playerCards = document.getElementById("player-cards");
  
    const uniformForm = document.getElementById("uniform-form");
    const uniformList = document.getElementById("uniform-list");
  
    const financeForm = document.getElementById("finance-form");
    const financeList = document.getElementById("finance-history");
    const totalIncome = document.getElementById("total-income");
    const totalExpenses = document.getElementById("total-expenses");
    const balance = document.getElementById("balance");
  
    const managementForm = document.getElementById("management-form");
    const managementList = document.getElementById("management-list");
  
    // LocalStorage data
    let players = JSON.parse(localStorage.getItem("players")) || [];
    let uniforms = JSON.parse(localStorage.getItem("uniforms")) || [];
    let finances = JSON.parse(localStorage.getItem("finances")) || [];
    let management = JSON.parse(localStorage.getItem("management")) || [];
  
    // Save to storage
    function saveAll() {
      localStorage.setItem("players", JSON.stringify(players));
      localStorage.setItem("uniforms", JSON.stringify(uniforms));
      localStorage.setItem("finances", JSON.stringify(finances));
      localStorage.setItem("management", JSON.stringify(management));
    }
  
    // Render Functions
    function renderPlayers() {
      playerCards.innerHTML = "";
      players.forEach((player, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h3>${player.name}</h3>
          <p>Age: ${player.age}</p>
          <p>Position: ${player.position}</p>
          <p>Jersey #: ${player.jersey}</p>
          <button onclick="removePlayer(${index})">Remove</button>
        `;
        playerCards.appendChild(card);
      });
    }
  
    function renderUniforms() {
      uniformList.innerHTML = "";
      uniforms.forEach((u, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${u.size} - ${u.count} <button onclick="removeUniform(${i})">Remove</button>`;
        uniformList.appendChild(li);
      });
    }
  
    function renderFinances() {
      financeList.innerHTML = "";
      let income = 0, expense = 0;
      finances.forEach((f, i) => {
        if (f.type === "income") income += f.amount;
        else expense += f.amount;
  
        const li = document.createElement("li");
        li.innerHTML = `${f.type.toUpperCase()}: ${f.name} - KES ${f.amount} <button onclick="removeFinance(${i})">Remove</button>`;
        financeList.appendChild(li);
      });
      totalIncome.textContent = `KES ${income}`;
      totalExpenses.textContent = `KES ${expense}`;
      balance.textContent = `KES ${income - expense}`;
    }
  
    function renderManagement() {
      managementList.innerHTML = "";
      management.forEach((m, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${m.name} (${m.role}) - ${m.contact} <button onclick="removeManager(${i})">Remove</button>`;
        managementList.appendChild(li);
      });
    }
  
    // Add Data
    playerForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("player-name").value;
      const age = document.getElementById("player-age").value;
      const position = document.getElementById("player-position").value;
      const jersey = document.getElementById("jersey-number").value;
      players.push({ name, age, position, jersey });
      saveAll();
      renderPlayers();
      playerForm.reset();
    });
  
    uniformForm.addEventListener("submit", e => {
      e.preventDefault();
      const size = document.getElementById("uniform-size").value;
      const count = parseInt(document.getElementById("uniform-count").value);
      uniforms.push({ size, count });
      saveAll();
      renderUniforms();
      uniformForm.reset();
    });
  
    financeForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("transaction-name").value;
      const amount = parseInt(document.getElementById("transaction-amount").value);
      const type = document.getElementById("transaction-type").value;
      finances.push({ name, amount, type });
      saveAll();
      renderFinances();
      financeForm.reset();
    });
  
    managementForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("manager-name").value;
      const role = document.getElementById("manager-role").value;
      const contact = document.getElementById("manager-contact").value;
      management.push({ name, role, contact });
      saveAll();
      renderManagement();
      managementForm.reset();
    });
  
    // Remove Functions (global for now)
    window.removePlayer = index => {
      players.splice(index, 1);
      saveAll();
      renderPlayers();
    }
  
    window.removeUniform = index => {
      uniforms.splice(index, 1);
      saveAll();
      renderUniforms();
    }
  
    window.removeFinance = index => {
      finances.splice(index, 1);
      saveAll();
      renderFinances();
    }
  
    window.removeManager = index => {
      management.splice(index, 1);
      saveAll();
      renderManagement();
    }
  
    // Initial renders
    renderPlayers();
    renderUniforms();
    renderFinances();
    renderManagement();
  });
  