import { useState } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const incrementGood = () => {
    setGood(prev => prev +1);
  };

 const incrementNeutral = () => {
    setNeutral(prev => prev +1);
  };

 const incrementBad = () => {
    setBad(prev => prev +1);
  };

 const countTotalFeedback = () => {
    let totalReviews = good + neutral + bad;
    return totalReviews;
  };

 const countPositiveFeedbackPercentage = () => {
    let percentagePositiveReviews =
      (good / countTotalFeedback()) * 100;
    return Math.round(percentagePositiveReviews);
  };

    return (
      <div style={{ display: 'flex', justifyContent: 'center', }}>
        <Section title={'Please leave feedback'}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <FeedbackOptions options={incrementGood} onLeaveFeedback={'Good'} />
            <FeedbackOptions options={incrementNeutral} onLeaveFeedback={'Neutral'} />
            <FeedbackOptions options={incrementBad} onLeaveFeedback={'Bad'} />
          </div>
          
        {countTotalFeedback() > 0 &&  <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />}
          {countTotalFeedback() === 0 && (<Notification message='There is no feedback'/>)}
        </Section>
      </div>
    );
  }

export default App;