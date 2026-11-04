/* ===== DATA: edit bagian ini saja ===== */
const VIDEO_LINKS = [
  "https://drive.google.com/file/d/1vS3a_VTe6Z1rYH-0t_jKGiqShi74UFxG/view",
  "https://drive.google.com/file/d/1Tui7c-Y7eAum03NBYAAqGV-KmDKcrAAn/view",
  "https://drive.google.com/file/d/1vS3a_VTe6Z1rYH-0t_jKGiqShi74UFxG/view",
  "https://drive.google.com/file/d/1clS-6yCA76Cw3BkTIxgXdfCUI1LVl37k/view",
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
    rpp: `assets/pdf/rpp-siklusn-${n}.pdf`,        // upload PDF RPP ke folder ini
    media: `assets/pdf/media-siklus-${n}.pdf`,    // PDF media ajar
    video: VIDEO_LINKS[n - 1],
    thumb: `assets/img/videos-${n}.jpeg`,           // thumbnail video
    analisis: [
      "Pembelajaran berlangsung sesuai dengan RPP termasuk langkah-langkah kegiatan pembelajaran yang digunakan.",
      "Kekuatan: strategi, interaksi, dan pengelolaan kelas yang berjalan baik."
    ]
  })),
  reflections: [
    { id: "model", title: "Model Guru yang Dituju",
      body: ["Menjadi Guru dengan mewujudkan pendidikan yang memberikan kesempatan belajar secara adil bagi setiap anak dengan menyesuaikan pembelajaran pada kebutuhan dan kesiapan masing-masing murid, sehingga setiap anak tumbuh menjadi pribadi berkarakter kuat dan memiliki kebiasaan belajar yang terus berkembang.",
             "Momen yang membentuk pandangan saya tentang guru yang dituju adalah ketika saya mengikuti ppl Mandir, serta belajar di PPG. Saya belajar banyak tentang bagaimana guru dapat memanfaatkan teknologi untuk meningkatkan pembelajaran dan memberikan pengalaman belajar yang lebih interaktif bagi murid."],
      kekuatan: ["Berorientasi pada murid", "Memprioritaskan pembelajaran yang berbasis teknologi"], kelemahan: ["Konsep asesmen", "Keterbatasan waktu"], tindak: ["Mengikuti Pelatihan, Sertifikasi & Organisasi Guru", "Mengembangkan Pembelajaran yang Berpihak pada Murid serta Interaktif terintegrasi TPACK"] },
    { id: "filosofi", title: "Filosofi Mengajar",
      body: ["Saya meyakini bahwa setiap peserta didik memiliki potensi, karakteristik, dan cara belajar yang berbeda. Peserta didik belajar secara optimal ketika mereka terlibat aktif dalam proses pembelajaran, diberi kesempatan untuk mengeksplorasi, mencoba, berdiskusi, menemukan makna, serta merefleksikan pengalaman belajarnya. Oleh karena itu, belajar bukan sekadar menerima dan menghafal informasi dari guru, melainkan sebuah proses membangun pemahaman melalui pengalaman yang bermakna. Dalam hal ini, guru berperan sebagai fasilitator, pembimbing, sekaligus teladan yang mampu menciptakan lingkungan belajar yang aman, inklusif, dan menghargai keberagaman, serta memberikan ruang bagi setiap peserta didik untuk berkembang sesuai potensinya. Filosofi ini saya terapkan dalam pembelajaran Informatika pada materi pengolahan angka, dimulai dengan memberikan pertanyaan pemantik dan pre-test untuk mengetahui pengetahuan awal peserta didik, dilanjutkan dengan kegiatan eksplorasi melalui LKPD digital berbasis Discovery Learning secara bertahap, sehingga peserta didik dapat menemukan sendiri fungsi dan penggunaan fitur pengolahan angka melalui penyelesaian masalah kontekstual. Selama proses tersebut, saya memberikan pendampingan, pertanyaan pengarah, dan umpan balik sesuai kebutuhan masing-masing peserta didik. Pada akhir pembelajaran, peserta didik diajak menyimpulkan hasil temuannya dan melakukan refleksi untuk menyadari perkembangan pemahaman mereka. Melalui siklus tersebut, saya ingin menghadirkan pembelajaran yang tidak hanya berorientasi pada hasil, tetapi juga menghargai proses, menumbuhkan rasa percaya diri, kemandirian, dan keberanian peserta didik untuk terus belajar dan mengembangkan potensinya."],
      kekuatan: ["embelajaran berpusat pada peserta didik dengan memberikan kesempatan untuk mengeksplorasi, menemukan, dan membangun pemahaman secara mandiri", "Penggunaan LKPD digital dan masalah kontekstual membuat pembelajaran lebih aktif, menarik, dan relevan dengan kehidupan sehari-hari"], kelemahan: ["Perbedaan kemampuan awal dan kecepatan belajar", "Murid Lebih berfokus pada penyelesaian tugas"], tindak: ["Menerapkan pembelajaran berdiferensiasi melalui pemberian bantuan, tantangan, dan pendampingan sesuai kebutuhan murid", "Memperkuat kegiatan diskusi, refleksi, dan asesmen formatif"] },
    { id: "akhir", title: "Refleksi Akhir",
      body: ["Melalui rangkaian kegiatan pembelajaran, saya mulai mengubah praktik mengajar dari yang sebelumnya lebih berpusat pada guru menjadi pembelajaran yang memberikan ruang lebih besar bagi peserta didik untuk aktif mengeksplorasi, berdiskusi, dan menemukan pemahamannya sendiri. Saya menemukan bahwa setiap peserta didik memiliki kemampuan, kebutuhan, dan kecepatan belajar yang berbeda sehingga pendekatan yang fleksibel dan pendampingan yang tepat sangat diperlukan. Pelajaran terbesar yang saya peroleh adalah bahwa keberhasilan pembelajaran bukan hanya tentang tercapainya tujuan materi, tetapi juga tentang bagaimana peserta didik merasa dihargai, percaya diri, dan berani mengembangkan potensinya. Ke depan, saya berkomitmen untuk terus belajar, memperbaiki strategi pembelajaran, mengembangkan asesmen yang bermakna, serta menciptakan lingkungan belajar yang inklusif, menyenangkan, dan berpihak pada kebutuhan peserta didik."],
      kekuatan: ["Pembelajaran yang berpusat pada peserta didik melalui eksplorasi, diskusi, dan aktivitas kontekstual", "Komitmen untuk menciptakan pembelajaran yang inklusif, menyenangkan, dan menghargai potensi setiap peserta didik"], kelemahan: ["RKegiatan pembelajaran yang mengakomodasi seluruh murid", "Keterbatasan waktu"], tindak: ["Memperdalam pemahaman tentang pembelajaran berdiferensiasi dan menerapkannya secara konsisten.", "Melakukan refleksi dan evaluasi secara berkala."] }
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
