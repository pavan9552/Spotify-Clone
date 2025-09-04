import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const getSongId = (song) =>
  song?.key || song?.id || song?.attributes?.playParams?.id;

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && getSongId(activeSong) === getSongId(song) ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
