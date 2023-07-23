const people = [
    'Premium Content',
    'Standard Definition (SD)',
    'Ad-Supported ',
    'Personalized Recommendations ',
    'Cancel Anytime'
  ];
  
  export default function List1() {
    const listItems = people.map(person =>
      <li style={{ color: "black"}}>{person}</li>
    );
    return <ol>{listItems}</ol>;
  }