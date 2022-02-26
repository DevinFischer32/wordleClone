import { createStore } from "redux";

const initialState = {
  winPercent: 0,
  wonGames: 0,
  gamesPlayed: 0,
  currentStreak: 0,
  maxStreak: 0,
  helpDisplay: false,
  settingDisplay: false,
  leaderBoardDisplay: false,
};

function reducer(state = initialState, action) {
  if (action.type === "changeHelpDisplay") {
    return { ...state, helpDisplay: action.payload };
  } else if (action.type === "changeSettingDisplay") {
    return { ...state, settingDisplay: action.payload };
  } else if (action.type === "changeLeaderboardDisplay") {
    return { ...state, leaderBoardDisplay: action.payload };
  } else if (action.type === "changeWonGames") {
    return { ...state, wonGames: action.payload };
  } else if (action.type === "changeGamesPlayed") {
    return { ...state, gamesPlayed: action.payload };
  } else if (action.type === "changeCurrentStreak") {
    return { ...state, currentStreak: action.payload };
  } else if (action.type === "changeMaxStreak") {
    return { ...state, maxStreak: action.payload };
  } else if (action.type === "WinPercent") {
    return { ...state, winPercent: (state.wonGames /= state.gamesPlayed) };
  }
  return state;
}

export const store = createStore(reducer);
