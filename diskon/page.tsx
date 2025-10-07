"use client";

import React, { useState } from "react";

interface ItemData {
  nama: string;
  kategori: string;
  harga: number | "";
  diskon: number | "";
}

export default function DiskonApp() {
  const [data, setData] = useState<ItemData>({
    nama: "",
    kategori: "",
    harga: "",
    diskon: "",
  });

  const [hasil, setHasil] = useState<{
    nilaiDiskon: number;
    totalHarga: number;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setData((prev) => ({
      ...prev,
      [id]: id === "harga" || id === "diskon" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const hitungDiskon = () => {
    const { nama, kategori, harga, diskon } = data;
    if (!nama || !kategori || harga === "" || diskon === "" || Number(harga) <= 0 || Number(diskon) < 0) {
      alert("Mohon isi semua field dengan benar!");
      return;
    }
    const nilaiDiskon = (Number(harga) * Number(diskon)) / 100;
    const totalHarga = Number(harga) - nilaiDiskon;
    setHasil({ nilaiDiskon, totalHarga });
  };

  const bersih = () => {
    setData({ nama: "", kategori: "", harga: "", diskon: "" });
    setHasil(null);
  };

  return (
    <div className="diskon-bg">
      <div className="diskon-container">
        {!hasil ? (
          <div className="diskon-card">
            <h2 className="diskon-title">Aplikasi Perhitungan Diskon</h2>
            <input
              id="nama"
              type="text"
              placeholder="Masukan nama barang"
              value={data.nama}
              onChange={handleChange}
              className="diskon-input"
            />
            <input
              id="kategori"
              type="text"
              placeholder="Masukan kategori barang"
              value={data.kategori}
              onChange={handleChange}
              className="diskon-input"
            />
            <input
              id="harga"
              type="number"
              placeholder="Masukan harga barang"
              value={data.harga}
              onChange={handleChange}
              className="diskon-input"
            />
            <input
              id="diskon"
              type="number"
              placeholder="Masukan diskon barang"
              value={data.diskon}
              onChange={handleChange}
              className="diskon-input"
            />
            <button className="diskon-btn diskon-btn-blue" onClick={hitungDiskon}>
              Hitung
            </button>
            <button className="diskon-btn diskon-btn-red" onClick={bersih}>
              Bersih
            </button>
          </div>
        ) : (
          <div className="diskon-card">
            <h2 className="diskon-title">Aplikasi Perhitungan Diskon</h2>
            <div className="diskon-result">
              <div>Nama Barang: <strong>{data.nama}</strong></div>
              <div>Kategori Barang: <strong>{data.kategori}</strong></div>
              <div>Nilai Diskon: <strong>{hasil.nilaiDiskon.toFixed(2)}</strong></div>
              <div>Total Harga: <strong>{hasil.totalHarga.toFixed(2)}</strong></div>
            </div>
            <button className="diskon-btn diskon-btn-orange" onClick={bersih}>
              Kembali
            </button>
          </div>
        )}
      </div>
      <style jsx>{`
        .diskon-bg {
          min-height: 100vh;
          background: #fafafa;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .diskon-container {
          display: flex;
          gap: 32px;
        }
        .diskon-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px #0001;
          padding: 24px 24px 18px 24px;
          width: 340px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .diskon-title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 18px;
          font-family: Arial, sans-serif;
        }
        .diskon-input {
          font-size: 1rem;
          padding: 12px;
          margin-bottom: 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          outline: none;
        }
        .diskon-btn {
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 4px;
          margin-bottom: 12px;
          padding: 12px 0;
          cursor: pointer;
          transition: background 0.2s;
        }
        .diskon-btn-blue {
          background: #0000cc;
          color: #fff;
        }
        .diskon-btn-blue:hover {
          background: #000099;
        }
        .diskon-btn-red {
          background: #a52a2a;
          color: #fff;
        }
        .diskon-btn-red:hover {
          background: #7a1e1e;
        }
        .diskon-btn-orange {
          background: #ffa500;
          color: #fff;
          margin-bottom: 0;
        }
        .diskon-btn-orange:hover {
          background: #cc8400;
        }
        .diskon-result {
          text-align: left;
          margin-bottom: 18px;
          font-size: 1.1rem;
          line-height: 2;
        }
        @media (max-width: 900px) {
          .diskon-container {
            flex-direction: column;
            gap: 18px;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}