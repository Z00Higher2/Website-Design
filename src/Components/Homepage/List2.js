const people = [
    'Premium+ Content',
    'High-Definition (HD)',
    'Ad-Free Experience ',
    'Personalized Recommendations ',
    'Multiple Device Access',
    'Exclusive Content Access',
    'Priority Customer Support',
    'Parental Controls',
    'Cancel Anytime'
  ];
  
  export default function List2() {
    const listItems = people.map(person =>
      <li>{person}</li>
    );
    return <ol>{listItems}</ol>;
  }