const people = [
    'Premium+ Content (Extended)',
    'Ultra High-Definition (UHD)',
    'Ad-Free Experience ',
    'Personalized Recommendations ',
    'No Geographical Restrictions',
    'Multiple Device Access (Enhanced)',
    'Exclusive Content Access',
    'VIP Customer Support',
    'Parental Controls',
    'Annual Subscription Discount',
    'Audio Descriptions and Multiple Subtitles',
    'Cancel Anytime'
  ];
  
  export default function List3() {
    const listItems = people.map(person =>
      <li>{person}</li>
    );
    return <ol>{listItems}</ol>;
  }