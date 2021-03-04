import "./styles.css";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import MoodIcon from "@material-ui/icons/Mood";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import MaximizeIcon from "@material-ui/icons/Maximize";
export default function App() {
  return (
    <div className="emoji">
      <div className="emoji__icons">
        <div className="emoji__icon">
          <SentimentVeryDissatisfiedIcon
            className="terrible"
            fontSize="large"
          />
          <h3>Terrible</h3>
        </div>
        <MaximizeIcon fontSize="large" />
        <MaximizeIcon fontSize="large" />
        <div className="emoji__icon">
          <SentimentDissatisfiedIcon className="bad" fontSize="large" />
          <h3>Bad</h3>
        </div>
        <MaximizeIcon fontSize="large" />
        <MaximizeIcon fontSize="large" />

        <div className="emoji__icon">
          <SentimentSatisfiedIcon className="okay" fontSize="large" />
          <h3>Okay</h3>
        </div>
        <MaximizeIcon fontSize="large" />
        <MaximizeIcon fontSize="large" />

        <div className="emoji__icon">
          <MoodIcon className="good" fontSize="large" />
          <h3>Good</h3>
        </div>
        <MaximizeIcon fontSize="large" />
        <MaximizeIcon fontSize="large" />
        <div className="emoji__icon">
          <EmojiEmotionsOutlinedIcon className="great" fontSize="large" />
          <h3>Great</h3>
        </div>
      </div>
    </div>
  );
}
