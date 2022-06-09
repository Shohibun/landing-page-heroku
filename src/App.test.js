/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import Jumbotron from './pages/Jumbotron';
import Main from './pages/Main';
import Feature from './pages/Feature';

describe("Make sure jumbotron has the look it should have", () => {
  test("Make sure jumbotron has a title:", () => {
    const view = render(<Jumbotron />);
    const title = view.getByText("Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)");
    expect(title).toBeInTheDocument();
  });

  test("Make sure jumbotron has a text introduction:", () => {
    const view = render(<Jumbotron />);
    const textIntroduction = view.getByText("Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.");
    expect(textIntroduction).toBeInTheDocument();
  });

  test("Make sure jumbotron has a button for sewa mobi:", () => {
    const view = render(<Jumbotron />);
    const buttonSewaMobil = view.getByText("Mulai Sewa Mobil");
    expect(buttonSewaMobil).toBeInTheDocument();
  });
});

describe("Make sure main has the look it should have", () => {
  test("Make sure main has a title:", () => {
    const view = render(<Main />);
    const title = view.getByText("Best Car Rental for any kind of trip in (Lokasimu)!");
    expect(title).toBeInTheDocument();
  });

  test("Make sure main has a paragph:", () => {
    const view= render(<Main />);
    const paragph = view.getByText("Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.");
    expect(paragph).toBeInTheDocument();
  });

  test("Make sure main has a text benefits:", () => {
    const view= render(<Main />);
    const textBenefits = view.getByText("Sewa Mobil Dengan Supir di Bali 12 Jam");
    expect(textBenefits).toBeInTheDocument();
  });
});

describe("Make sure feature has the look it should have", () => {
  test("Make sure feature has a title:", () => {
    const view = render(<Feature />);
    const title = view.getByText("Why Us?");
    expect(title).toBeInTheDocument();
  });

  test("Make sure feature has a sub title:", () => {
    const view = render(<Feature />);
    const subTitle = view.getByText("Mobil Lengkap");
    expect(subTitle).toBeInTheDocument();
  });

  test("Make sure main has a text benefits:", () => {
    const view= render(<Feature />);
    const textBenefits = view.getByText("Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat");
    expect(textBenefits).toBeInTheDocument();
  });
});
