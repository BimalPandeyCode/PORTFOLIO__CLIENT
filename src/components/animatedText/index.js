import "./index.css";
import React, { useEffect } from "react";
import GSAP from "gsap";
const Text = (child) => {
  useEffect(() => {}, []);
  const H = (
    <svg
      width="34"
      height="41"
      viewBox="0 0 34 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterH"
      onMouseEnter={() => {
        animateLetters("H");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("H");
      }}
    >
      <path
        d="M8.52 41H0.84V0.871998H8.52V17.128H26.056V0.871998H33.736V41H26.056V24.104H8.52V41Z"
        fill="white"
        className="letterPathH"
      />
    </svg>
  );
  const i = (
    <svg
      width="9"
      height="43"
      viewBox="0 0 9 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letteri"
      onMouseEnter={() => {
        animateLetters("i");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("i");
      }}
    >
      <path
        d="M8.136 6.904H0.264V0.439999H8.136V6.904ZM7.944 43H0.52V11.384H7.944V43Z"
        fill="white"
        className="letterPathi"
      />
    </svg>
  );
  const ia = (
    <svg
      width="9"
      height="43"
      viewBox="0 0 9 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letteria"
      onMouseEnter={() => {
        animateLetters("ia");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("ia");
      }}
    >
      <path
        d="M8.136 6.904H0.264V0.439999H8.136V6.904ZM7.944 43H0.52V11.384H7.944V43Z"
        fill="white"
        className="letterPathia"
      />
    </svg>
  );
  const exclamation = (
    <svg
      width="9"
      height="41"
      viewBox="0 0 9 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterexclamation"
      onMouseEnter={() => {
        animateLetters("exclamation");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("exclamation");
      }}
    >
      <path
        d="M0.2 0.871998H8.648L7.688 29.032H1.16L0.2 0.871998ZM8.264 34.088V41H0.584V34.088H8.264Z"
        fill="white"
        className="letterPathexclamation"
      />
    </svg>
  );
  const I = (
    <svg
      width="9"
      height="41"
      viewBox="0 0 9 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterI"
      onMouseEnter={() => {
        animateLetters("I");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("I");
      }}
    >
      <path
        className="letterPathI"
        d="M8.52 0.871998V41H0.84V0.871998H8.52Z"
        fill="white"
      />
    </svg>
  );
  const semicolon = (
    <svg
      width="8"
      height="15"
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lettersemicolon"
      onMouseEnter={() => {
        animateLetters("semicolon");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("semicolon");
      }}
    >
      <path
        className="letterPathsemicolon"
        d="M0.728 14.12L2.52 3.496C2.648 2.68533 2.98933 2.04533 3.544 1.576C4.09867 1.10666 4.80267 0.871998 5.656 0.871998H7.704L7.512 14.12H0.728Z"
        fill="white"
      />
    </svg>
  );
  const m = (
    <svg
      width="45"
      height="33"
      viewBox="0 0 45 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterm"
      onMouseEnter={() => {
        animateLetters("m");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("m");
      }}
    >
      <path
        className="letterPathm"
        d="M7.944 33H0.52V1.384H7.368L7.688 3.752H7.88C9.544 2.728 11.1227 1.98133 12.616 1.512C14.152 0.999999 15.6453 0.743999 17.096 0.743999C18.8453 0.743999 20.3387 1.02133 21.576 1.576C22.856 2.088 23.88 2.89867 24.648 4.008H24.84C26.4187 2.984 28.1253 2.19467 29.96 1.64C31.8373 1.04267 33.672 0.743999 35.464 0.743999C38.536 0.743999 40.84 1.576 42.376 3.24C43.912 4.904 44.68 7.37867 44.68 10.664V33H37.256V11.624C37.256 10.1733 36.8507 9.10667 36.04 8.424C35.272 7.74133 34.0347 7.4 32.328 7.4C31.304 7.4 30.2587 7.528 29.192 7.784C28.1253 8.04 27.144 8.38133 26.248 8.808C26.2907 9.02133 26.312 9.256 26.312 9.512C26.312 9.768 26.312 10.152 26.312 10.664V33H18.888V11.624C18.888 10.1733 18.4827 9.10667 17.672 8.424C16.904 7.74133 15.6667 7.4 13.96 7.4C13.064 7.4 12.104 7.528 11.08 7.784C10.0987 7.99733 9.05333 8.36 7.944 8.872V33Z"
        fill="white"
      />
    </svg>
  );
  const ma = (
    <svg
      width="45"
      height="33"
      viewBox="0 0 45 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterma"
      onMouseEnter={() => {
        animateLetters("ma");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("ma");
      }}
    >
      <path
        className="letterPathma"
        d="M7.944 33H0.52V1.384H7.368L7.688 3.752H7.88C9.544 2.728 11.1227 1.98133 12.616 1.512C14.152 0.999999 15.6453 0.743999 17.096 0.743999C18.8453 0.743999 20.3387 1.02133 21.576 1.576C22.856 2.088 23.88 2.89867 24.648 4.008H24.84C26.4187 2.984 28.1253 2.19467 29.96 1.64C31.8373 1.04267 33.672 0.743999 35.464 0.743999C38.536 0.743999 40.84 1.576 42.376 3.24C43.912 4.904 44.68 7.37867 44.68 10.664V33H37.256V11.624C37.256 10.1733 36.8507 9.10667 36.04 8.424C35.272 7.74133 34.0347 7.4 32.328 7.4C31.304 7.4 30.2587 7.528 29.192 7.784C28.1253 8.04 27.144 8.38133 26.248 8.808C26.2907 9.02133 26.312 9.256 26.312 9.512C26.312 9.768 26.312 10.152 26.312 10.664V33H18.888V11.624C18.888 10.1733 18.4827 9.10667 17.672 8.424C16.904 7.74133 15.6667 7.4 13.96 7.4C13.064 7.4 12.104 7.528 11.08 7.784C10.0987 7.99733 9.05333 8.36 7.944 8.872V33Z"
        fill="white"
      />
    </svg>
  );
  const mb = (
    <svg
      width="45"
      height="33"
      viewBox="0 0 45 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lettermb"
      onMouseEnter={() => {
        animateLetters("mb");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("mb");
      }}
    >
      <path
        className="letterPathmb"
        d="M7.944 33H0.52V1.384H7.368L7.688 3.752H7.88C9.544 2.728 11.1227 1.98133 12.616 1.512C14.152 0.999999 15.6453 0.743999 17.096 0.743999C18.8453 0.743999 20.3387 1.02133 21.576 1.576C22.856 2.088 23.88 2.89867 24.648 4.008H24.84C26.4187 2.984 28.1253 2.19467 29.96 1.64C31.8373 1.04267 33.672 0.743999 35.464 0.743999C38.536 0.743999 40.84 1.576 42.376 3.24C43.912 4.904 44.68 7.37867 44.68 10.664V33H37.256V11.624C37.256 10.1733 36.8507 9.10667 36.04 8.424C35.272 7.74133 34.0347 7.4 32.328 7.4C31.304 7.4 30.2587 7.528 29.192 7.784C28.1253 8.04 27.144 8.38133 26.248 8.808C26.2907 9.02133 26.312 9.256 26.312 9.512C26.312 9.768 26.312 10.152 26.312 10.664V33H18.888V11.624C18.888 10.1733 18.4827 9.10667 17.672 8.424C16.904 7.74133 15.6667 7.4 13.96 7.4C13.064 7.4 12.104 7.528 11.08 7.784C10.0987 7.99733 9.05333 8.36 7.944 8.872V33Z"
        fill="white"
      />
    </svg>
  );
  const B = (
    <svg
      width="31"
      height="41"
      viewBox="0 0 31 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterB"
      onMouseEnter={() => {
        animateLetters("B");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("B");
      }}
    >
      <path
        className="letterPathB"
        d="M30.92 29.352C30.92 33.448 29.768 36.4133 27.464 38.248C25.16 40.0827 21.512 41 16.52 41H0.84V0.871998H16.52C21.0427 0.871998 24.2427 1.64 26.12 3.176C28.04 4.712 29 7.336 29 11.048C29 13.5653 28.616 15.4853 27.848 16.808C27.08 18.1307 25.672 19.0907 23.624 19.688C26.056 20.1147 27.8693 21.1387 29.064 22.76C30.3013 24.3387 30.92 26.536 30.92 29.352ZM21.896 12.136C21.896 10.3013 21.4907 9.04266 20.68 8.36C19.912 7.63467 18.5253 7.272 16.52 7.272H8.52V17.64H16.52C18.44 17.64 19.8053 17.2133 20.616 16.36C21.4693 15.5067 21.896 14.0987 21.896 12.136ZM23.496 28.84C23.496 26.8773 22.9627 25.512 21.896 24.744C20.872 23.976 19.08 23.592 16.52 23.592H8.52V34.344H16.52C19.08 34.344 20.872 33.9387 21.896 33.128C22.9627 32.3173 23.496 30.888 23.496 28.84Z"
        fill="white"
      />
    </svg>
  );
  const a = (
    <svg
      width="28"
      height="34"
      viewBox="0 0 28 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lettera"
      onMouseEnter={() => {
        animateLetters("a");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("a");
      }}
    >
      <path
        className="letterPatha"
        d="M9.944 33.576C6.70133 33.576 4.312 32.7867 2.776 31.208C1.28267 29.5867 0.536 27.0693 0.536 23.656C0.536 20.1573 1.432 17.6827 3.224 16.232C5.05867 14.7813 8.19467 14.056 12.632 14.056C13.8693 14.056 15.128 14.12 16.408 14.248C17.688 14.376 18.7973 14.5467 19.736 14.76V12.072C19.736 10.408 19.224 9.192 18.2 8.424C17.176 7.656 15.5547 7.272 13.336 7.272C11.3307 7.272 9.53867 7.336 7.96 7.464C6.424 7.592 4.952 7.80533 3.544 8.104V1.896C5.16533 1.512 6.91467 1.23466 8.792 1.064C10.712 0.850666 12.9733 0.743999 15.576 0.743999C19.4587 0.743999 22.36 1.64 24.28 3.432C26.2 5.18133 27.16 7.82666 27.16 11.368V33H20.312L19.992 30.184H19.864C18.4987 31.208 16.92 32.04 15.128 32.68C13.3787 33.2773 11.6507 33.576 9.944 33.576ZM13.528 19.368C11.224 19.368 9.64533 19.6453 8.792 20.2C7.93867 20.712 7.512 21.7147 7.512 23.208C7.512 24.6587 7.85333 25.704 8.536 26.344C9.26133 26.9413 10.4773 27.24 12.184 27.24C13.4213 27.24 14.7227 27.0693 16.088 26.728C17.496 26.344 18.712 25.8747 19.736 25.32V19.88C18.712 19.7093 17.688 19.5813 16.664 19.496C15.6827 19.4107 14.6373 19.368 13.528 19.368Z"
        fill="white"
      />
    </svg>
  );
  const aa = (
    <svg
      width="28"
      height="34"
      viewBox="0 0 28 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letteraa"
      onMouseEnter={() => {
        animateLetters("aa");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("aa");
      }}
    >
      <path
        className="letterPathaa"
        d="M9.944 33.576C6.70133 33.576 4.312 32.7867 2.776 31.208C1.28267 29.5867 0.536 27.0693 0.536 23.656C0.536 20.1573 1.432 17.6827 3.224 16.232C5.05867 14.7813 8.19467 14.056 12.632 14.056C13.8693 14.056 15.128 14.12 16.408 14.248C17.688 14.376 18.7973 14.5467 19.736 14.76V12.072C19.736 10.408 19.224 9.192 18.2 8.424C17.176 7.656 15.5547 7.272 13.336 7.272C11.3307 7.272 9.53867 7.336 7.96 7.464C6.424 7.592 4.952 7.80533 3.544 8.104V1.896C5.16533 1.512 6.91467 1.23466 8.792 1.064C10.712 0.850666 12.9733 0.743999 15.576 0.743999C19.4587 0.743999 22.36 1.64 24.28 3.432C26.2 5.18133 27.16 7.82666 27.16 11.368V33H20.312L19.992 30.184H19.864C18.4987 31.208 16.92 32.04 15.128 32.68C13.3787 33.2773 11.6507 33.576 9.944 33.576ZM13.528 19.368C11.224 19.368 9.64533 19.6453 8.792 20.2C7.93867 20.712 7.512 21.7147 7.512 23.208C7.512 24.6587 7.85333 25.704 8.536 26.344C9.26133 26.9413 10.4773 27.24 12.184 27.24C13.4213 27.24 14.7227 27.0693 16.088 26.728C17.496 26.344 18.712 25.8747 19.736 25.32V19.88C18.712 19.7093 17.688 19.5813 16.664 19.496C15.6827 19.4107 14.6373 19.368 13.528 19.368Z"
        fill="white"
      />
    </svg>
  );
  const ab = (
    <svg
      width="28"
      height="34"
      viewBox="0 0 28 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterab"
      onMouseEnter={() => {
        animateLetters("ab");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("ab");
      }}
    >
      <path
        className="letterPathab"
        d="M9.944 33.576C6.70133 33.576 4.312 32.7867 2.776 31.208C1.28267 29.5867 0.536 27.0693 0.536 23.656C0.536 20.1573 1.432 17.6827 3.224 16.232C5.05867 14.7813 8.19467 14.056 12.632 14.056C13.8693 14.056 15.128 14.12 16.408 14.248C17.688 14.376 18.7973 14.5467 19.736 14.76V12.072C19.736 10.408 19.224 9.192 18.2 8.424C17.176 7.656 15.5547 7.272 13.336 7.272C11.3307 7.272 9.53867 7.336 7.96 7.464C6.424 7.592 4.952 7.80533 3.544 8.104V1.896C5.16533 1.512 6.91467 1.23466 8.792 1.064C10.712 0.850666 12.9733 0.743999 15.576 0.743999C19.4587 0.743999 22.36 1.64 24.28 3.432C26.2 5.18133 27.16 7.82666 27.16 11.368V33H20.312L19.992 30.184H19.864C18.4987 31.208 16.92 32.04 15.128 32.68C13.3787 33.2773 11.6507 33.576 9.944 33.576ZM13.528 19.368C11.224 19.368 9.64533 19.6453 8.792 20.2C7.93867 20.712 7.512 21.7147 7.512 23.208C7.512 24.6587 7.85333 25.704 8.536 26.344C9.26133 26.9413 10.4773 27.24 12.184 27.24C13.4213 27.24 14.7227 27.0693 16.088 26.728C17.496 26.344 18.712 25.8747 19.736 25.32V19.88C18.712 19.7093 17.688 19.5813 16.664 19.496C15.6827 19.4107 14.6373 19.368 13.528 19.368Z"
        fill="white"
      />
    </svg>
  );
  const l = (
    <svg
      width="8"
      height="43"
      viewBox="0 0 8 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterl"
      onMouseEnter={() => {
        animateLetters("l");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("l");
      }}
    >
      <path
        className="letterPathl"
        d="M7.944 0.439999V43H0.52V0.439999H7.944Z"
        fill="white"
      />
    </svg>
  );
  const P = (
    <svg
      width="32"
      height="41"
      viewBox="0 0 32 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterP"
      onMouseEnter={() => {
        animateLetters("P");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("P");
      }}
    >
      <path
        className="letterPathP"
        d="M8.52 28.84V41H0.84V0.871998H14.984C20.9147 0.871998 25.1387 1.91733 27.656 4.008C30.216 6.09866 31.496 9.576 31.496 14.44C31.496 19.3467 30.152 22.9733 27.464 25.32C24.8187 27.6667 20.7227 28.84 15.176 28.84H8.52ZM23.688 14.44C23.688 12.008 23.0267 10.3013 21.704 9.32C20.424 8.296 18.184 7.784 14.984 7.784H8.52V22.12H14.984C18.184 22.12 20.424 21.544 21.704 20.392C23.0267 19.1973 23.688 17.2133 23.688 14.44Z"
        fill="white"
      />
    </svg>
  );
  const n = (
    <svg
      width="30"
      height="33"
      viewBox="0 0 30 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lettern"
      onMouseEnter={() => {
        animateLetters("n");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("n");
      }}
    >
      <path
        className="letterPathn"
        d="M7.944 33H0.52V1.384H6.92L7.24 4.584H7.432C8.92533 3.26133 10.5253 2.30133 12.232 1.704C13.9813 1.064 16.0293 0.743999 18.376 0.743999C21.8747 0.743999 24.5413 1.61867 26.376 3.368C28.2107 5.11733 29.128 7.69867 29.128 11.112V33H21.704V12.072C21.704 10.536 21.192 9.384 20.168 8.616C19.1867 7.80533 17.7147 7.4 15.752 7.4C14.344 7.4 12.9787 7.592 11.656 7.976C10.3333 8.31733 9.096 8.85067 7.944 9.576V33Z"
        fill="white"
      />
    </svg>
  );
  const d = (
    <svg
      width="30"
      height="44"
      viewBox="0 0 30 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterd"
      onMouseEnter={() => {
        animateLetters("d");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("d");
      }}
    >
      <path
        className="letterPathd"
        d="M21.744 0.439999H29.168V43H22.64L22.192 40.056H21.872C20.6773 41.2507 19.248 42.1467 17.584 42.744C15.9627 43.2987 14.0853 43.576 11.952 43.576C7.728 43.576 4.69867 42.296 2.864 39.736C1.072 37.176 0.176 32.9733 0.176 27.128C0.176 21.368 1.28533 17.208 3.504 14.648C5.76533 12.0453 9.47733 10.744 14.64 10.744C16.0053 10.744 17.2853 10.8507 18.48 11.064C19.7173 11.2347 20.8053 11.4907 21.744 11.832V0.439999ZM15.664 17.4C12.3787 17.4 10.2027 18.0613 9.136 19.384C8.112 20.7067 7.6 23.288 7.6 27.128C7.6 30.84 8.048 33.3573 8.944 34.68C9.88267 36.0027 11.7813 36.664 14.64 36.664C16.0053 36.664 17.2853 36.536 18.48 36.28C19.6747 35.9813 20.7627 35.5547 21.744 35V18.488C20.848 18.104 19.9093 17.8267 18.928 17.656C17.9467 17.4853 16.8587 17.4 15.664 17.4Z"
        fill="white"
      />
    </svg>
  );
  const e = (
    <svg
      width="28"
      height="34"
      viewBox="0 0 28 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lettere"
      onMouseEnter={() => {
        animateLetters("e");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("e");
      }}
    >
      <path
        className="letterPathe"
        d="M26.48 25.256V31.272C25.4133 31.912 23.728 32.4667 21.424 32.936C19.1627 33.3627 16.7947 33.576 14.32 33.576C9.28533 33.576 5.65867 32.296 3.44 29.736C1.264 27.176 0.176 22.952 0.176 17.064C0.176 11.3893 1.328 7.25067 3.632 4.648C5.936 2.04533 9.584 0.743999 14.576 0.743999C19.3973 0.743999 22.8107 1.74667 24.816 3.752C26.8213 5.75733 27.824 9.192 27.824 14.056C27.824 14.952 27.8027 15.784 27.76 16.552C27.7173 17.2773 27.632 18.3013 27.504 19.624H7.664C7.70667 22.2693 8.28267 24.1253 9.392 25.192C10.544 26.2587 12.5707 26.792 15.472 26.792C17.392 26.792 19.376 26.6427 21.424 26.344C23.472 26.0453 25.1573 25.6827 26.48 25.256ZM14.576 7.208C11.9733 7.208 10.16 7.72 9.136 8.744C8.15467 9.768 7.664 11.624 7.664 14.312H21.04V12.968C20.9973 10.792 20.5067 9.29867 19.568 8.488C18.6293 7.63467 16.9653 7.208 14.576 7.208Z"
        fill="white"
      />
    </svg>
  );
  const ea = (
    <svg
      width="28"
      height="34"
      viewBox="0 0 28 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterea"
      onMouseEnter={() => {
        animateLetters("ea");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("ea");
      }}
    >
      <path
        className="letterPathea"
        d="M26.48 25.256V31.272C25.4133 31.912 23.728 32.4667 21.424 32.936C19.1627 33.3627 16.7947 33.576 14.32 33.576C9.28533 33.576 5.65867 32.296 3.44 29.736C1.264 27.176 0.176 22.952 0.176 17.064C0.176 11.3893 1.328 7.25067 3.632 4.648C5.936 2.04533 9.584 0.743999 14.576 0.743999C19.3973 0.743999 22.8107 1.74667 24.816 3.752C26.8213 5.75733 27.824 9.192 27.824 14.056C27.824 14.952 27.8027 15.784 27.76 16.552C27.7173 17.2773 27.632 18.3013 27.504 19.624H7.664C7.70667 22.2693 8.28267 24.1253 9.392 25.192C10.544 26.2587 12.5707 26.792 15.472 26.792C17.392 26.792 19.376 26.6427 21.424 26.344C23.472 26.0453 25.1573 25.6827 26.48 25.256ZM14.576 7.208C11.9733 7.208 10.16 7.72 9.136 8.744C8.15467 9.768 7.664 11.624 7.664 14.312H21.04V12.968C20.9973 10.792 20.5067 9.29867 19.568 8.488C18.6293 7.63467 16.9653 7.208 14.576 7.208Z"
        fill="white"
      />
    </svg>
  );
  const eb = (
    <svg
      width="28"
      height="34"
      viewBox="0 0 28 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lettereb"
      onMouseEnter={() => {
        animateLetters("eb");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("eb");
      }}
    >
      <path
        className="letterPatheb"
        d="M26.48 25.256V31.272C25.4133 31.912 23.728 32.4667 21.424 32.936C19.1627 33.3627 16.7947 33.576 14.32 33.576C9.28533 33.576 5.65867 32.296 3.44 29.736C1.264 27.176 0.176 22.952 0.176 17.064C0.176 11.3893 1.328 7.25067 3.632 4.648C5.936 2.04533 9.584 0.743999 14.576 0.743999C19.3973 0.743999 22.8107 1.74667 24.816 3.752C26.8213 5.75733 27.824 9.192 27.824 14.056C27.824 14.952 27.8027 15.784 27.76 16.552C27.7173 17.2773 27.632 18.3013 27.504 19.624H7.664C7.70667 22.2693 8.28267 24.1253 9.392 25.192C10.544 26.2587 12.5707 26.792 15.472 26.792C17.392 26.792 19.376 26.6427 21.424 26.344C23.472 26.0453 25.1573 25.6827 26.48 25.256ZM14.576 7.208C11.9733 7.208 10.16 7.72 9.136 8.744C8.15467 9.768 7.664 11.624 7.664 14.312H21.04V12.968C20.9973 10.792 20.5067 9.29867 19.568 8.488C18.6293 7.63467 16.9653 7.208 14.576 7.208Z"
        fill="white"
      />
    </svg>
  );
  const ec = (
    <svg
      width="28"
      height="34"
      viewBox="0 0 28 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterec"
      onMouseEnter={() => {
        animateLetters("ec");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("ec");
      }}
    >
      <path
        className="letterPathec"
        d="M26.48 25.256V31.272C25.4133 31.912 23.728 32.4667 21.424 32.936C19.1627 33.3627 16.7947 33.576 14.32 33.576C9.28533 33.576 5.65867 32.296 3.44 29.736C1.264 27.176 0.176 22.952 0.176 17.064C0.176 11.3893 1.328 7.25067 3.632 4.648C5.936 2.04533 9.584 0.743999 14.576 0.743999C19.3973 0.743999 22.8107 1.74667 24.816 3.752C26.8213 5.75733 27.824 9.192 27.824 14.056C27.824 14.952 27.8027 15.784 27.76 16.552C27.7173 17.2773 27.632 18.3013 27.504 19.624H7.664C7.70667 22.2693 8.28267 24.1253 9.392 25.192C10.544 26.2587 12.5707 26.792 15.472 26.792C17.392 26.792 19.376 26.6427 21.424 26.344C23.472 26.0453 25.1573 25.6827 26.48 25.256ZM14.576 7.208C11.9733 7.208 10.16 7.72 9.136 8.744C8.15467 9.768 7.664 11.624 7.664 14.312H21.04V12.968C20.9973 10.792 20.5067 9.29867 19.568 8.488C18.6293 7.63467 16.9653 7.208 14.576 7.208Z"
        fill="white"
      />
    </svg>
  );
  const y = (
    <svg
      width="32"
      height="43"
      viewBox="0 0 32 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lettery"
      onMouseEnter={() => {
        animateLetters("y");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("y");
      }}
    >
      <path
        className="letterPathy"
        d="M7.104 35.904C8.68267 35.904 9.856 35.6053 10.624 35.008C11.392 34.4533 12.0533 33.2587 12.608 31.424L0.192 0.383999H8.512L16.384 24.128L23.872 0.383999H31.872L19.776 33.408C18.5813 36.6507 17.1093 38.9547 15.36 40.32C13.6533 41.6853 11.392 42.368 8.576 42.368C7.72267 42.368 6.848 42.3253 5.952 42.24C5.056 42.1547 4.26667 42.048 3.584 41.92V35.712C3.92533 35.7973 4.33067 35.84 4.8 35.84C5.26933 35.8827 6.03733 35.904 7.104 35.904Z"
        fill="white"
      />
    </svg>
  );
  const W = (
    <svg
      width="55"
      height="41"
      viewBox="0 0 55 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterW"
      onMouseEnter={() => {
        animateLetters("W");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("W");
      }}
    >
      <path
        className="letterPathW"
        d="M11.264 41L0.448 0.871998H8.768L14.208 23.464C14.336 24.0613 14.4853 24.7867 14.656 25.64C14.8267 26.4933 15.2533 28.9467 15.936 33C16.6187 29.032 17.0453 26.6 17.216 25.704C17.3867 24.808 17.536 24.0827 17.664 23.528L23.36 0.871998H31.424L37.184 23.464C37.3547 24.0613 37.5253 24.808 37.696 25.704C37.8667 26.5573 38.2933 28.968 38.976 32.936C39.4453 30.2907 39.808 28.2 40.064 26.664C40.3627 25.0853 40.576 24.04 40.704 23.528L46.016 0.871998H54.08L43.264 41H34.496L29.952 24.168C29.5253 22.4187 29.0987 20.5413 28.672 18.536C28.2453 16.488 27.776 14.0773 27.264 11.304C26.88 13.3947 26.4533 15.528 25.984 17.704C25.5573 19.8373 25.088 21.992 24.576 24.168L20.096 41H11.264Z"
        fill="white"
      />
    </svg>
  );
  const b = (
    <svg
      width="30"
      height="44"
      viewBox="0 0 30 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterb"
      onMouseEnter={() => {
        animateLetters("b");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("b");
      }}
    >
      <path
        className="letterPathb"
        d="M17.672 10.744C21.9387 10.744 24.968 12.0027 26.76 14.52C28.552 16.9947 29.448 21.1333 29.448 26.936C29.448 32.824 28.2747 37.0693 25.928 39.672C23.624 42.2747 19.8053 43.576 14.472 43.576C11.7413 43.576 9.18133 43.4267 6.792 43.128C4.44533 42.8293 2.33333 42.4027 0.456 41.848V0.439999H7.88V13.24C9.37333 12.4293 10.9733 11.8107 12.68 11.384C14.3867 10.9573 16.0507 10.744 17.672 10.744ZM22.024 26.936C22.024 23.224 21.5547 20.7067 20.616 19.384C19.72 18.0613 17.8427 17.4 14.984 17.4C13.7467 17.4 12.488 17.5493 11.208 17.848C9.97067 18.104 8.86133 18.4667 7.88 18.936V36.088C8.648 36.3013 9.52267 36.4507 10.504 36.536C11.4853 36.6213 12.6373 36.664 13.96 36.664C17.2453 36.664 19.4 36.0027 20.424 34.68C21.4907 33.3573 22.024 30.776 22.024 26.936Z"
        fill="white"
      />
    </svg>
  );
  const slash = (
    <svg
      width="20"
      height="52"
      viewBox="0 0 20 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterslash"
      onMouseEnter={() => {
        animateLetters("slash");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("slash");
      }}
    >
      <path
        className="letterPathslash"
        d="M19.968 0.751999L6.592 51.12H0.96L14.4 0.751999H19.968Z"
        fill="white"
      />
    </svg>
  );
  const G = (
    <svg
      width="34"
      height="42"
      viewBox="0 0 34 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterG"
      onMouseEnter={() => {
        animateLetters("G");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("G");
      }}
    >
      <path
        className="letterPathG"
        d="M25.968 25.32H17.264V18.92H33.136V39.144C31.9413 39.6987 29.808 40.2533 26.736 40.808C23.664 41.32 20.8693 41.576 18.352 41.576C11.568 41.576 6.85333 39.9973 4.208 36.84C1.60533 33.6827 0.304 28.3707 0.304 20.904C0.304 13.7787 1.84 8.552 4.912 5.224C8.02667 1.896 12.9333 0.231998 19.632 0.231998C22.1493 0.231998 24.3893 0.295999 26.352 0.424C28.3573 0.509332 29.8933 0.658665 30.96 0.871998V7.592C29.424 7.464 27.6533 7.35733 25.648 7.272C23.6427 7.18666 21.6373 7.144 19.632 7.144C15.2373 7.144 12.2293 8.14666 10.608 10.152C9.02933 12.1573 8.24 15.7413 8.24 20.904C8.24 23.3787 8.368 25.4267 8.624 27.048C8.92267 28.6693 9.34933 29.992 9.904 31.016C10.6293 32.296 11.6533 33.2133 12.976 33.768C14.3413 34.3227 16.3467 34.6 18.992 34.6C19.888 34.6 20.9333 34.536 22.128 34.408C23.3227 34.28 24.6027 34.1093 25.968 33.896V25.32Z"
        fill="white"
      />
    </svg>
  );
  const D = (
    <svg
      width="34"
      height="41"
      viewBox="0 0 34 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterD"
      onMouseEnter={() => {
        animateLetters("D");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("D");
      }}
    >
      <path
        className="letterPathD"
        d="M13.704 41H0.84V0.871998H13.704C17.8 0.871998 21.0427 1.21333 23.432 1.896C25.864 2.57867 27.8053 3.66667 29.256 5.16C30.7067 6.65333 31.752 8.68 32.392 11.24C33.0747 13.7573 33.416 16.9787 33.416 20.904C33.416 27.8587 31.8587 32.9573 28.744 36.2C25.6293 39.4 20.616 41 13.704 41ZM23.368 10.728C22.5573 9.66133 21.4267 8.91467 19.976 8.488C18.5253 8.01866 16.4347 7.784 13.704 7.784H8.52V33.768H13.704C18.312 33.768 21.4267 32.8293 23.048 30.952C24.6693 29.0747 25.48 25.7253 25.48 20.904C25.48 18.344 25.3093 16.2533 24.968 14.632C24.6267 13.0107 24.0933 11.7093 23.368 10.728Z"
        fill="white"
      />
    </svg>
  );
  const v = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="letterv"
      onMouseEnter={() => {
        animateLetters("v");
      }}
      onMouseLeave={() => {
        animateLettersOnLeave("v");
      }}
    >
      <path
        className="letterPathv"
        d="M23.808 0.383999H31.936L20.416 32H11.904L0.32 0.383999H8.512L16.192 25.216L23.808 0.383999Z"
        fill="white"
      />
    </svg>
  );
  return (
    <>
      <div className="letterContainer">
        <div className="letterContainer__hi">
          <div>{H}</div>
          <div>{i}</div>
          <div>{exclamation}</div>
        </div>
        <div className="letterContainer__imBimal">
          <div>{I}</div>
          <div className="letterContainer__imBimal__semicolon">{semicolon}</div>
          <div className="letterContainer__imBimal__m">{m}</div>
          <div>{B}</div>
          <div>{ia}</div>
          <div>{ma}</div>
          <div>{a}</div>
          <div>{l}</div>
        </div>
        <div className="letterContainer__Web">
          <div>{W}</div>
          <div>{ea}</div>
          <div>{b}</div>
          <div>{slash}</div>
          <div>{G}</div>
          <div>{ab}</div>
          <div>{mb}</div>
          <div>{eb}</div>
        </div>
        <div className="letterContainer__dev">
          <div>{D}</div>
          <div>{ec}</div>
          <div>{v}</div>
        </div>
      </div>
    </>
  );
};
const animateLetters = (letterName) => {
  GSAP.to(`.letterPath${letterName}`, {
    fill: "cyan",
    duration: 0.2,
  });
  GSAP.to(`.letter${letterName}`, {
    scaleX: 1.4,
    scaleY: 0.6,
    duration: 0.3,
    onComplete: () => {
      GSAP.to(`.letter${letterName}`, {
        scaleX: 0.6,
        scaleY: 1.4,
        duration: 0.1,
        onComplete: () => {
          GSAP.to(`.letter${letterName}`, {
            scaleX: 1,
            scaleY: 1,
            duration: 0.1,
          });
        },
      });
    },
  });
};
const animateLettersOnLeave = (letterName) => {
  GSAP.to(`.letterPath${letterName}`, {
    fill: letterName === "B" || letterName === "P" ? " cyan" : "white",
    duration: 0.5,
  });
};
export default Text;