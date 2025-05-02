import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// styles to use in the hole app
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  detailContainer: {
    paddingHorizontal: wp(5),
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.dark.border,
    paddingHorizontal: wp(10),
    paddingVertical: hp(2),
  },
  cardbody: {
    flexDirection: "row",
    alignItems: "center",
  },
  textColor: {
    color: Colors.dark.color,
  },
  imageCard: {
    height: hp(10),
    width: wp(20),
  },
  imageDetail: {
    width: wp(90),
    height: hp(50),
  },
  textBold: {
    fontWeight: "700",
    marginLeft: wp(3),
  },
  titleText: {
    textAlign: "center",
    alignSelf: "center",
    marginVertical: hp(2),
    fontWeight: "bold",
  },
  containerSpaceEvenly: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: hp(1),
  },
  containerFilters: {
    marginVertical: hp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputSearch: {
    padding: hp(2),
    backgroundColor: "transparent",
    color: Colors.dark.color,
    borderRadius: 8,
    width: wp(80),
    borderWidth: 0.4,
    borderColor: Colors.dark.color,
  },
});
