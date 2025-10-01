import React from "react";

export default function Tugas() {
  return (
    <div style={{
      fontFamily: "Poppins, Arial, sans-serif",
      background: "#f7f8fa",
      minHeight: "100vh",
      padding: 0,
      margin: 0
    }}>
      {/* Header */}
      <div style={{
        background: "#fff",
        padding: "18px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px #0001"
      }}>
        <div style={{ fontWeight: 700, fontSize: 22, color: "#223" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Logo_SMK_Telkom.png" alt="logo" style={{ height: 32, verticalAlign: "middle", marginRight: 12 }} />
          SMK TELKOM MAKASSAR
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontWeight: 600, color: "#223" }}>OKTAVIANTO</span>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#e3e6f0", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="22" height="22" fill="#888"><circle cx="11" cy="8" r="5"/><ellipse cx="11" cy="17" rx="7" ry="4"/></svg>
          </div>
        </div>
      </div>
      {/* Main grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 24,
        padding: "32px 32px 0 32px"
      }}>
        {/* Left main */}
        <div>
          {/* Jurnal Mengajar */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px #0001",
            padding: "24px 24px 18px 24px",
            marginBottom: 24
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span style={{
                background: "#f2f4fa",
                borderRadius: 8,
                padding: "6px 14px",
                fontWeight: 600,
                color: "#223"
              }}>Jurnal Mengajar</span>
              <select style={{
                border: "1px solid #e3e6f0",
                borderRadius: 8,
                padding: "6px 14px",
                fontWeight: 500,
                color: "#223",
                background: "#f2f4fa"
              }}>
                <option>XI RPL 4</option>
                <option>XI RPL 3</option>
              </select>
              <input type="date" value="2025-09-29" style={{
                border: "1px solid #e3e6f0",
                borderRadius: 8,
                padding: "6px 14px",
                fontWeight: 500,
                color: "#223",
                background: "#f2f4fa"
              }} />
            </div>
            <div style={{ display: "flex", gap: 18 }}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#223" }}>0</div>
                <div style={{ color: "#888", fontSize: 15 }}>Hadir</div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#223" }}>0</div>
                <div style={{ color: "#888", fontSize: 15 }}>Tidak Hadir</div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#223" }}>0</div>
                <div style={{ color: "#888", fontSize: 15 }}>Belum</div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#223" }}>0</div>
                <div style={{ color: "#888", fontSize: 15 }}>Draft</div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#223" }}>0</div>
                <div style={{ color: "#888", fontSize: 15 }}>Simpan</div>
              </div>
            </div>
          </div>
          {/* Guru Terbaik */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px #0001",
            padding: "18px 24px",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 18
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: "#223", fontSize: 18 }}>Guru Terbaik</div>
              <div style={{ color: "#888", fontSize: 15 }}>Belum ada guru terbaik</div>
            </div>
            <div>
              <span role="img" aria-label="guru" style={{ fontSize: 38 }}>👩‍🏫</span>
            </div>
          </div>
          {/* Aplikasi */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px #0001",
            padding: "18px 24px",
            marginBottom: 24
          }}>
            <div style={{ fontWeight: 700, color: "#223", fontSize: 18, marginBottom: 18 }}>Aplikasi</div>
            <div style={{ display: "flex", gap: 38, justifyContent: "center", marginBottom: 12 }}>
              {[
                { label: "JURNAL MENGAJAR", icon: "📄" },
                { label: "NILAI", icon: "📑" },
                { label: "AKADEMIK", icon: "📚" },
                { label: "PRESENSI", icon: "📝" },
                { label: "RAPOR", icon: "📊" }
              ].map((app, i) => (
                <div key={i} style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 8
                }}>
                  <div style={{
                    background: "#2d3a5a",
                    color: "#fff",
                    borderRadius: 12,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    marginBottom: 4
                  }}>{app.icon}</div>
                  <div style={{
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#223",
                    textAlign: "center"
                  }}>{app.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Jadwal & To Do List */}
          <div style={{ display: "flex", gap: 24 }}>
            {/* Jadwal */}
            <div style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 8px #0001",
              padding: "18px 24px",
              flex: 2
            }}>
              <div style={{ fontWeight: 700, color: "#223", fontSize: 18, marginBottom: 12 }}>Jadwal Mengajar Hari Ini</div>
              <div style={{
                background: "#f2f4fa",
                borderRadius: 8,
                padding: "10px 18px",
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 8
              }}>
                <div>
                  <div style={{ fontWeight: 600, color: "#223", fontSize: 15 }}>OKTAVIANTO</div>
                  <div style={{ color: "#888", fontSize: 13 }}>Konsentrasi Keahlian RPL - XI RPL 4</div>
                </div>
                <div style={{ marginLeft: "auto", color: "#fff", background: "#ff7f50", borderRadius: 8, padding: "4px 12px", fontWeight: 600, fontSize: 13 }}>
                  Upcoming
                </div>
                <div style={{ color: "#888", fontSize: 13 }}>14:00 - 14:45</div>
              </div>
            </div>
            {/* To Do List */}
            <div style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 8px #0001",
              padding: "18px 24px",
              flex: 1
            }}>
              <div style={{ fontWeight: 700, color: "#223", fontSize: 18, marginBottom: 12 }}>To Do List</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <span style={{
                  background: "#2d3a5a",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "4px 12px",
                  fontWeight: 600,
                  fontSize: 13
                }}>To Do</span>
                <span style={{
                  background: "#e3e6f0",
                  color: "#223",
                  borderRadius: 8,
                  padding: "4px 12px",
                  fontWeight: 600,
                  fontSize: 13
                }}>Doing</span>
                <span style={{
                  background: "#e3e6f0",
                  color: "#223",
                  borderRadius: 8,
                  padding: "4px 12px",
                  fontWeight: 600,
                  fontSize: 13
                }}>Done</span>
              </div>
              <div style={{ color: "#888", fontSize: 13 }}>
                2025-09-29 - 2025-09-30
              </div>
            </div>
          </div>
        </div>
        {/* Right sidebar */}
        <div>
          {/* News */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px #0001",
            padding: "18px 24px",
            marginBottom: 24
          }}>
            <div style={{ fontWeight: 700, color: "#223", fontSize: 18, marginBottom: 12 }}>News</div>
            <div style={{
              background: "#e3e6f0",
              borderRadius: 8,
              padding: "12px 18px",
              marginBottom: 10
            }}>
              <div style={{ fontWeight: 600, color: "#223", fontSize: 15, marginBottom: 6 }}>Aplikasi CUTI Terbaru</div>
              <img src="https://smktelkom-mks.sch.id/wp-content/uploads/2022/09/Logo-SMK-Telkom-Makassar.png" alt="news" style={{ width: "100%", borderRadius: 8, marginBottom: 8 }} />
              <div style={{ color: "#223", fontSize: 13, marginBottom: 4 }}>Aplikasi CUTI 3.0</div>
              <div style={{ color: "#888", fontSize: 13 }}>
                Kami informasikan bahwa Aplikasi CUTI telah diperbarui ke Versi 3.0. Pembaruan ini dilakukan untuk menyesuaikan sistem dengan kebijakan Cuti...
              </div>
              <div style={{ color: "#888", fontSize: 12, marginTop: 6 }}>6 hari yang lalu</div>
            </div>
          </div>
          {/* Sapa Guru */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px #0001",
            padding: "18px 24px",
            height: 340,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div style={{ fontWeight: 700, color: "#223", fontSize: 18, marginBottom: 12 }}>Sapa Guru</div>
            <div style={{ flex: 1, overflowY: "auto", marginBottom: 12 }}>
              {[
                { name: "DANIEL DUMA TANAN", msg: "tabe, ada yang jat kunci motor ku?", time: "2 hari yang lalu" },
                { name: "ANANDA DZIKMAH AMALIA", msg: "Keren sekali ini aplikasinya :)", time: "2 hari yang lalu" },
                { name: "ANANDA DZIKMAH AMALIA", msg: "Keren sekali ini aplikasinya :)", time: "2 hari yang lalu" },
                { name: "RISDAYANTI", msg: "malam minggunya dengan DIGITS...SEMANGAT untuk kita semua bapak/Ibu", time: "2 hari yang lalu" },
                { name: "RAODATUL JANNAH", msg: "", time: "" }
              ].map((chat, i) => (
                <div key={i} style={{
                  marginBottom: 12,
                  paddingBottom: 8,
                  borderBottom: "1px solid #e3e6f0"
                }}>
                  <div style={{ fontWeight: 600, color: "#223", fontSize: 14 }}>{chat.name}</div>
                  <div style={{ color: "#223", fontSize: 13 }}>{chat.msg}</div>
                  <div style={{ color: "#888", fontSize: 12 }}>{chat.time}</div>
                </div>
              ))}
            </div>
            <input
              type="text"
              placeholder="Ketik sesuatu ..."
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid #e3e6f0",
                fontSize: 14,
                background: "#f2f4fa"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}