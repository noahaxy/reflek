/* ===== DATA: edit bagian ini saja ===== */
const VIDEO_LINKS = [
  "https://drive.google.com/file/d/1vS3a_VTe6Z1rYH-0t_jKGiqShi74UFxG/view",
  "https://drive.google.com/file/d/ID_VIDEO_SIKLUS_2/view",
  "https://drive.google.com/file/d/ID_VIDEO_SIKLUS_3/view",
  "https://drive.google.com/file/d/ID_VIDEO_SIKLUS_4/view",
];

const DATA = {
  profile: {
    name: "Fiasari", badge: "Fiasari, S.T", role: "Calon Guru Informatika",
    email: "fiasari.2025@student.uny.ac.id",
    desc: "E-Portofolio ini disusun sebagai gitbentuk penyajian artefak pembelajaran selama kegiatan PPL Mandiri, dan bukti akuntabilitas profesi pada program PPG Bidang Studi Informatika di Universitas Negeri Yogyakarta."
  },
  cycles: [1, 2, 3, 4].map(n => ({
    n,
    title: "Siklus " + n,
    focus: "Topik/materi siklus " + n,
    rpp: `assets/pdf/rpp-siklus-${n}.pdf`,        // upload PDF RPP ke folder ini
    media: `assets/pdf/media-siklus-${n}.pdf`,    // PDF media ajar
    video: VIDEO_LINKS[n - 1],
    thumb: `assets/img/video-${n}.jpg`,           // thumbnail video
    analisis: [
      "Tulis deskripsi singkat pembelajaran yang direkam: kelas, materi, dan tujuan.",
      "Analisis kekuatan: strategi, interaksi, dan pengelolaan kelas yang berjalan baik.",
      "Analisis perbaikan: bagian yang belum optimal dan rencana perbaikan siklus berikutnya."
    ]
  })),
  reflections: [
    { id: "model", title: "Model Guru yang Dituju",
      body: ["Tulis gambaran guru yang ingin Anda jadi: nilai, peran, dan ciri khasnya. Jelaskan mengapa model tersebut relevan dengan pembelajaran Informatika di era digital.",
             "Hubungkan dengan pengalaman PPL Mandiri: momen yang membentuk pandangan Anda tentang guru yang ingin dituju."],
      kekuatan: ["Kekuatan 1", "Kekuatan 2"], kelemahan: ["Kelemahan 1", "Kelemahan 2"], tindak: ["Rencana 1", "Rencana 2"] },
    { id: "filosofi", title: "Filosofi Mengajar",
      body: ["Uraikan keyakinan dasar Anda tentang belajar dan mengajar: bagaimana peserta didik belajar, dan apa peran guru.",
             "Berikan contoh nyata dari siklus pembelajaran yang menunjukkan filosofi ini dalam praktik."],
      kekuatan: ["Kekuatan 1", "Kekuatan 2"], kelemahan: ["Kelemahan 1", "Kelemahan 2"], tindak: ["Rencana 1", "Rencana 2"] },
    { id: "akhir", title: "Refleksi Akhir",
      body: ["Rangkum perjalanan 4 siklus: perubahan praktik mengajar, temuan penting, dan pelajaran terbesar.",
             "Tutup dengan komitmen pengembangan diri setelah PPL Mandiri."],
      kekuatan: ["Kekuatan 1", "Kekuatan 2"], kelemahan: ["Kelemahan 1", "Kelemahan 2"], tindak: ["Rencana 1", "Rencana 2"] }
  ]
};

/* ===== LOGIKA ===== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let cycle = 0, tab = "rpp", refl = 0;

function route() {
  const h = (location.hash || "#beranda").slice(1);
  const page = ["beranda", "artefak", "refleksi"].includes(h) ? h : "beranda";
  $$(".page").forEach(p => p.classList.toggle("on", p.id === page));
  $$(".menu > a, .dd > a").forEach(a => a.classList.toggle("on", a.dataset.page === page));
  scrollTo({ top: 0 });
}

function renderHome() {
  const p = DATA.profile;
  $("#hName").textContent = p.name; $("#hDesc").textContent = p.desc;
  $("#hBadge").textContent = p.badge; $("#hRole").textContent = p.role.toUpperCase();
}

function renderBoard() {
  $("#board").innerHTML = DATA.cycles.map((c, i) =>
    `<button class="card ${i === cycle ? "on" : ""}" data-i="${i}"><h3>${c.title}</h3><p>${c.focus}</p><span class="chip">RPP · Video · Media</span></button>`).join("");
  $$("#board .card").forEach(b => b.onclick = () => { cycle = +b.dataset.i; renderBoard(); renderPanel(); });
  $("#ddArtefak").innerHTML = DATA.cycles.map((c, i) => `<a href="#artefak" data-c="${i}">${c.title}: ${c.focus}</a>`).join("");
  $$("#ddArtefak a").forEach(a => a.addEventListener("click", () => { cycle = +a.dataset.c; renderBoard(); renderPanel(); }));
}

function renderPanel() {
  const c = DATA.cycles[cycle], el = $("#aPanel");
  $$("#aTabs button").forEach(b => b.classList.toggle("on", b.dataset.t === tab));
  if (tab === "video") {
    el.innerHTML = `<h3>Video Mengajar · ${c.title}</h3>
      <a class="thumb" href="${c.video}" target="_blank" rel="noopener" aria-label="Putar video ${c.title}">
        <img src="${c.thumb}" alt="" onerror="this.remove()"><span class="play"><i>▶</i></span></a>
      <div class="analisis"><h4>Analisis Video</h4>${c.analisis.map(t => `<p>${t}</p>`).join("")}</div>`;
  } else {
    const src = tab === "rpp" ? c.rpp : c.media, name = tab === "rpp" ? "RPP" : "Media Ajar";
    el.innerHTML = `<h3>${name} · ${c.title}</h3>
      <iframe src="${src}#toolbar=0" title="${name} ${c.title}"></iframe>
      <p class="link-row"><a class="btn ghost" href="${src}" target="_blank" rel="noopener">Buka ${name} di tab baru</a></p>`;
  }
}

function renderRefl() {
  $("#rTabs").innerHTML = DATA.reflections.map((r, i) => `<button class="${i === refl ? "on" : ""}" data-i="${i}">${r.title}</button>`).join("");
  $("#ddRefleksi").innerHTML = DATA.reflections.map((r, i) => `<a href="#refleksi" data-r="${i}">${r.title}</a>`).join("");
  $$("#rTabs button").forEach(b => b.onclick = () => { refl = +b.dataset.i; renderRefl(); });
  $$("#ddRefleksi a").forEach(a => a.addEventListener("click", () => { refl = +a.dataset.r; renderRefl(); }));
  const r = DATA.reflections[refl], li = a => a.map(x => `<li>${x}</li>`).join("");
  $("#rPanel").innerHTML = `<h3>${r.title}</h3><div class="prose">${r.body.map(t => `<p>${t}</p>`).join("")}</div>
    <div class="cols">
      <div class="col"><h4>Kekuatan</h4><ul>${li(r.kekuatan)}</ul></div>
      <div class="col"><h4>Kelemahan</h4><ul>${li(r.kelemahan)}</ul></div>
      <div class="col"><h4>Rencana Tindak Lanjut</h4><ul>${li(r.tindak)}</ul></div>
    </div>`;
}

$$("#aTabs button").forEach(b => b.onclick = () => { tab = b.dataset.t; renderPanel(); });
$("#theme").onclick = () => {
  const d = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = d ? "light" : "dark";
  $("#theme").textContent = d ? "☀️" : "🌙";
};
$("#contactBtn").onclick = e => { e.preventDefault(); location.href = "mailto:" + DATA.profile.email; };
$("#yr").textContent = new Date().getFullYear();
window.addEventListener("hashchange", route);
renderHome(); renderBoard(); renderPanel(); renderRefl(); route();
