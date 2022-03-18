import { createSlice } from "@reduxjs/toolkit";
import GSAP from "gsap";
const posSlice = createSlice({
  name: "posSlice",
  initialState: {
    index: 0,
    isScrolling: false,
  },
  reducers: {
    changeIndex: (state, action) => {
      state.index = action.payload.index;
      const pageNames = ["Pandey", "| Skills", "| Contact"];
      document.title = "Bimal " + pageNames[state.index];

      if (action.payload.scroll) {
        const obj = [
          "#heyInspector",
          "#ifYouInspectedYouCouldHireMe",
          "#pleaseDontHackItToPieces",
        ];
        GSAP.to(window, {
          duration: 0.5,
          scrollTo: { y: obj[action.payload.index] },
        });
        GSAP.to(".NavbarTwo__indicator", {
          left: state.index * 100 + 10,
          ease: "expo.inOut",
          duration: 0.75,
        });
        GSAP.to(
          [
            ".NavbarTwo__container__0",
            ".NavbarTwo__container__1",
            ".NavbarTwo__container__2",
          ],
          {
            color: "black",
            fontWeight: 400,
            duration: 0,
            fontSize: 16,
          }
        );
      } else {
        if (!state.isScrolling) {
          GSAP.to(".NavbarTwo__indicator", {
            left: state.index * 100 + 10,
            ease: "expo.inOut",
            duration: 0.75,
          });
          GSAP.to(
            [
              ".NavbarTwo__container__0",
              ".NavbarTwo__container__1",
              ".NavbarTwo__container__2",
            ],
            {
              color: "black",
              fontWeight: 400,
              duration: 0,
              fontSize: 16,
            }
          );
        }
      }
    },
  },
});

export const { changeIndex } = posSlice.actions;
export default posSlice.reducer;
