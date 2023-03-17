import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";

export const StackView = ({
  m,
  ml,
  mt,
  mr,
  mb,
  p,
  pl,
  pt,
  pr,
  pb,
  pm,
  w,
  h,
  minw,
  maxw,
  minH,
  maxH,
  flex,
  br,
  bc,
  wPerc,
  hPerc,
  children,
  bWidth,
  backC,
  horizontal,
}) => {
  // const screenWidth = Dimensions.get('window').width;
  // const screenHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    stack: {
      margin: typeof m === "string" ? Number(m) : m,
      marginLeft: typeof ml === "string" ? Number(ml) : ml,
      marginTop: typeof mt === "string" ? Number(mt) : mt,
      marginRight: typeof mr === "string" ? Number(mr) : mr,
      marginBottom: typeof mb === "string" ? Number(mb) : mb,
      padding: typeof p === "string" ? Number(p) : p,
      paddingLeft: typeof pl === "string" ? Number(pl) : pl,
      paddingTop: typeof pt === "string" ? Number(pt) : pt,
      paddingRight: typeof pr === "string" ? Number(pr) : pr,
      paddingBottom: typeof pb === "string" ? Number(pb) : pb,
      paddingHorizontal: typeof pm === "string" ? Number(pm) : pm,
      paddingVertical: typeof pm === "string" ? Number(pm) : pm,
      width:
        typeof w === "string"
          ? Number(w)
          : w || (wPerc ? `${wPerc}%` : undefined),
      height:
        typeof h === "string"
          ? Number(h)
          : h || (hPerc ? `${hPerc}%` : undefined),
      minWidth: typeof minw === "string" ? Number(minw) : minw,
      maxWidth: typeof maxw === "string" ? Number(maxw) : maxw,
      minHeight: typeof minH === "string" ? Number(minH) : minH,
      maxHeight: typeof maxH === "string" ? Number(maxH) : maxH,
      flex: flex ? 1 : undefined,
      borderRadius: br,
      borderColor: bc,
      borderWidth: typeof bWidth === "string" ? Number(bWidth) : bWidth,
      backgroundColor: backC,
      flexDirection: horizontal ? "row" : "Column",
    },
  });

  return <View style={styles.stack}>{children}</View>;
};
