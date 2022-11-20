import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  gap: "1rem",

  marginBottom: "1rem",
});

export const ProductImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    width: 64,
    height: 82,
  },
});

export const Info = styled("div", {
  display: "flex",
  flexWrap: "wrap",
});

export const ProductTopContainer = styled("div", {
  display: "flex",
  flex: 1,
  justifyContent: "space-between",

  p: {
    fontWeight: 700,
    fontSize: 14,
    color: "$background",
    textAlign: "center",
  },
});

export const HandleProduct = styled("div", {
  display: "flex",
  gap: "1rem",

  p: {
    fontWeight: 700,
    color: "$background",
  },
  img: {
    width: "1rem",
    height: 18,
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const ProductBottomContainer = styled("div", {
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
});

export const ActionButtons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 11,

  img: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  div: {
    borderRadius: 4,
    border: "1px solid $gray50",
    padding: "0 12px",

    width: 59,
    p: {
      fontsize: 14,
      color: "$background",
    },
  },
});

export const SubtotalContainer = styled("div", {
  textAlign: "left",
  fontWeight: 700,

  p: { fontSize: "0.75rem" },
  strong: { color: "$background" },
});
