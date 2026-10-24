const projects = [
  {
    client: "AT&T",
    title: "Salesforce Sales and Services",
    summary: "Led certification for Salesforce sales and service changes and moved more than 30 projects into production on schedule.",
    details: "Scope covered a landscape of 300+ interconnected applications. Delivery used Agile, with Salesforce, iTrack, Zephyr, and Ginger for execution, defects, and automation. Team rhythm included structured collaboration and regular working sessions."
  },
  {
    client: "Singtel",
    title: "Prepaid, postpaid, and wireline orders",
    summary: "Certified mobile prepaid, postpaid, and wireline products from account creation through order verification.",
    details: "Validated subscriber creation, order processing, charges, usage, and billing. Tools and applications included the CRM/RIM ordering flow, ASOM, and database queries used to confirm the results."
  },
  {
    client: "Vodafone India",
    title: "Billing migration and bill validation",
    summary: "Processed billing data, generated customer bills, and checked them against the legacy platform.",
    details: "The engagement also covered customer data migration from the legacy system onto the new platform, with bill-to-bill comparison as the acceptance check."
  }
];

const grid = document.querySelector("#project-grid");

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <p class="client">${project.client}</p>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <p class="details" id="details-${index}"></p>
    <button class="button details-toggle" type="button" aria-expanded="false" aria-controls="details-${index}">
      Show brief
    </button>
  `;

  const details = card.querySelector(".details");
  details.textContent = project.details;

  const button = card.querySelector(".details-toggle");
  button.addEventListener("click", () => {
    const open = details.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "Hide brief" : "Show brief";
  });

  grid.appendChild(card);
});

const copyButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");
const email = "salmanpsit@gmail.com";

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email copied: " + email;
  } catch (error) {
    copyStatus.textContent = "Email: " + email;
  }
});

const noteButton = document.querySelector("#reveal-note");
const note = document.querySelector("#personal-note");

noteButton.addEventListener("click", () => {
  const hidden = note.hasAttribute("hidden");
  if (hidden) {
    note.removeAttribute("hidden");
    noteButton.textContent = "Hide note";
  } else {
    note.setAttribute("hidden", "");
    noteButton.textContent = "Show a short note";
  }
});

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.textContent = open ? "Close" : "Menu";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.textContent = "Menu";
  });
});
