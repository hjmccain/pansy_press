import AnticipationOfRain from "./BeforeMorning/AnticipationOfRain";
import MaterialismVs from "./BeforeMorning/MaterialismVs";
import Morning from "./Poeming/Morning";
import Poeming from "./Poeming/Poeming";

export const poems = [
    {
        id: 1,
        title: "Morning",
        author: "Jeffrey Gordon Evans",
        book: "POEMING",
        url: "morning",
        body: <Morning />
    },
    {
        id: 2,
        title: "Poeming",
        author: "Jeffrey Gordon Evans",
        book: "POEMING",
        url: "poeming",
        body: <Poeming />
    },
    {
        id: 3,
        title: "Anticipation Of Rain",
        author: "Hannah Joyce",
        book: "Before Morning",
        url: "anticipation-of-rain",
        body: <AnticipationOfRain />
    },
    {
        id: 4,
        title: "Materialism Vs.",
        author: "Hannah Joyce",
        book: "Before Morning",
        url: "materialism-vs",
        body: <MaterialismVs />
    }
]