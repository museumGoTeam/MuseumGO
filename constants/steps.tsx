import React from 'react'
import { Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import PoiListIcon from "../assets/svg/PoiListIcon";
import { Step } from "./type";
import PoiInformationIcon from '../assets/svg/PoiInformationIcon';

const steps: Step[] = [
  {
    screenName: "StepOne",
    icon: <Ionicons name="ios-qr-scanner" size={200} color="black" />,
    title: "Step 1",
    subtitle: "Scan the QR code of the room"
  },
  {
    screenName: "StepTwo",
    icon: <PoiListIcon />,
    title: "Step 2",
    subtitle: "Choose a point of interest"
  },
  {
    screenName: "StepThree",
    icon: <MaterialCommunityIcons name="map-marker-distance" size={200} color="black" />,
    title: "Step 3",
    subtitle: "Follow the itinerary"
  },
  {
    screenName: "StepFour",
    icon: <Ionicons name="ios-qr-scanner" size={200} color="black" />,
    title: "Step 4",
    subtitle: "Scan the point of interest QR code"
  },
  {
    screenName: "StepFive",
    icon: <PoiInformationIcon />,
    title: "Step 5",
    subtitle: "Read the information about the point of interest"
  },
  {
    screenName: "StepSix",
    icon: <MaterialCommunityIcons name="checkbox-marked-circle" size={200} color="green" />,
    title: "You are done",
  },
];

export default steps;
