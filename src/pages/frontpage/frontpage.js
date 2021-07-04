import './frontpage.scss';

import profileImg from '../../media/profile.jpg';
import  Aboutpic from '../../media/aboutpic.png';
import Button from '../../components/button/button';
import Navigation from '../../components/navigation/navigation';

import {ReactComponent as Mail} from '../../media/mail.svg';
import {ReactComponent as Linkedin} from '../../media/linkedin.svg';
import {ReactComponent as Github} from '../../media/github.svg';
import {ReactComponent as Post} from '../../media/post.svg';

function Frontpage(){

    return(

        <div id="frontpage">

            <Navigation/>
            
            <div className="landingpage">
                <div>
                <img src={profileImg} alt="the me"></img>

                <hr></hr>

                <div className="socials">
                    <Mail className="socialMail"/>
                    <Linkedin className="socialLinkedIn"/>
                    <Github className="socialGitHub"/>
                </div>
                </div>

                <div className="greybox">

                    <span className="titleTekst"> Hello, I'm Louise</span>
                    <h1>Multimedia designer</h1>
                    <p>Newly trained frontend developer and web designer</p>

                    <Button type="submit" value="Work"/>
                </div>
            </div>

            <div className="aboutpage" id="aboutpage">

                <hr></hr>

                <h1>About me</h1>
                <p className="desc">
                    I want to develop code for the future world and bring beautiful 
                    creations to life through coding and creative thinking.
                </p>

                <div className="gridWrapper">
                    <p>
                        I am Louise: A mother, wife and a somewhat professional frontend developer in the making. I found my passion in developing and I would like to call myself hardworking, independent and disciplined due to this passion. <br/>
                        I have a tendency to take leadership in working groups and I like to always be updated on ongoing parts of projects - making sure everyone has a good time. I love working with people of very different skillsets and I find myself a good team player, a good listener and fun person.
                        <br/>In my spare time I play music and play D&D with good friends. I also make invitations etc. for weddings and help friends with all sorts of different graphic work.
                    </p>

                    <img src={Aboutpic} alt="the me again"></img>
                </div>
            </div>

            <div className="contactpage" id="contactpage">

                <div className="greybox">

                    <h1>Contact</h1>
                    <p className="desc"> Let´s get in touch!</p>

                    <p className="desc">
                        If you see something you like and want to collaborate with me, feel free to contact me. I´d love to here from you!
                    </p>

                    <div className="gridWrapper">
                        <div>
                            <Button type="button" value="email louise@moesgaard.dk" className="yellow"/>
                            <Button type="submit" value="linkedIn"/>
                            <Button type="submit" value="github"/>
                            <Button type="submit" value="download cv"/>
                        </div>

                        <Post/>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default Frontpage;