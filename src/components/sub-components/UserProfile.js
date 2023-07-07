export default function UserProfile(props){


   
      
      return <>
         <ul className="user-section">
                <li className="user">
                  <span className="name">Name:</span><em>{props.userData.name}</em>
                </li>
                <li>Job Title:<em>{props.userData.title}</em> </li>
                <li>Phone:<em>{props.userData.phone}</em> </li>
                <li>Email:<em>{props.userData.email}</em> </li>
                <li className="social">
                  Follow: <em>
                  {props.userData.social.map(item => <a href={item.url}><span aria-hidden="true" className={`social_${item.name}`} /></a> )}
                    {/* <a href="#"><span aria-hidden="true" className="social_facebook" /></a>
                    <a href="#"><span aria-hidden="true" className="social_twitter" /></a>
                    <a href="#"><span aria-hidden="true" className="social_linkedin" /></a> */}
                  </em>
                </li>
              </ul>
              <h3>Biography</h3>
              <p>{props.userData.biography}</p>
    </>
}