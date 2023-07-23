import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Friends } from './Friends/Friends.jsx';
import { TransactionHistory } from './Transactions/Transactions.jsx';

import user from 'json/user.json';
import stats from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';

const App = () => {
  return (
    <div className="main">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
