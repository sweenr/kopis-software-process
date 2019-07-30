import React from 'react';
import { Deck, Heading, Slide, Text, List, ListItem, Image, Appear, Notes } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Terminal from 'spectacle-terminal';

const theme = createTheme(
  {
    primary: '#84919B',
    secondary: 'white',
    tertiary: '#A4343A',
    quaternary: '#CECECE'
  },
  {
    primary: {
      name: 'Barlow',
      googleFont: true,
      styles: ['400', '700']
    },
    secondary: 'Helvetica'
  }
);

const images = {
  caveman: require('../assets/caveman-spongebob.gif'),
  git: require('../assets/git-icon.png'),
  gitFlow: require('../assets/git-flow.png'),
  silos: require('../assets/silos.jpg'),
  goodWork: require('../assets/good-work.gif'),
  scrum: require('../assets/scrum.svg'),
  sprintStart: require('../assets/sprint-18-6-start.png'),
  sprintEnd: require('../assets/sprint-18-6-end.jpg'),
  digitalScrum: require('../assets/digital-scrum.png'),
  burndown: require('../assets/burndown.png'),
  exploration: require('../assets/exploration.png'),
  indRev: require('../assets/industrial-revolution.jpg'),
  cicd: require('../assets/cicd.png')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading>Software Process at Kopis Mobile</Heading>
          <Text>How we make cool things fast!</Text>
          <Appear>
            <Text>Alt: Learn from our mistakes!</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size="3">KM Engineering as Historical Periods</Heading>
          <List>
            <ListItem>The Dark Ages</ListItem>
            <ListItem>The Rennaissance</ListItem>
            <ListItem>Industrial Revolution</ListItem>
            <ListItem>Information Age</ListItem>
          </List>
        </Slide>
        <Slide>
          <Appear>
            <div>
              <Heading>Caveman Times</Heading>
              <Image src={images.caveman} alt="Spongebob, Patrick, and Squidward celebrating the discovery of git" />
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Notes>
            <h3>The Dark Ages of Kopis Mobile Engineering (c. 2016)</h3>
            <ul>
              <li>For reference, KM was 6 software engineers and 1 hardware engineer.</li>
              <li>Software team fairly comfortable with Git, used a modified Git Flow branching scheme.</li>
              <li>That was about the extent of our organized software process at the time.</li>
              <li>Deploy keys for Android apps lived on one person's PC (backed up, probably).</li>
              <li>Every artifact shipped to a customer was built on a single person's machine.</li>
              <li>The six of us were very silo'd - one person per project for the most part.</li>
              <li>Deadline driven development - what should we work on? Whatever's got the closest deadline.</li>
              <li>Stressful, poor morale (even if we didn't recognize it at the time), bad bus factor.</li>
            </ul>
          </Notes>
          <Heading>The Dark Ages</Heading>
          <Appear><Image src={images.gitFlow} width={450} alt="Graphic explaining the git flow branching method" /></Appear>
        </Slide>
        <Slide>
          <Notes>
            <h3>The Dark Ages of Kopis Mobile Engineering (c. 2016), cont.</h3>
            <ul>
              <li>The six of us were very silo'd - one person per project for the most part.</li>
              <li>Deadline driven development - what should we work on? Whatever's got the closest deadline.</li>
              <li>Stressful, poor morale (even if we didn't recognize it at the time), bad bus factor.</li>
            </ul>
          </Notes>
          <Appear><Image src={images.silos} alt="Picture of grain silos representing how each team member felt separated"/></Appear>
        </Slide>
        <Slide>
          <Notes>
            <h3>The Rennaisance - Agile Software Practices and Scrum (c. mid 2017)</h3>
            <ul>
              <li>KM still had 6 software engineers but 2 hardware engineers.</li>
              <li>Several on-and-off attempts at starting scrum workflow before really commiting late 2017.</li>
              <li>Traditional agile/scrum "didn't work for us", at least that's what we told ourselves.</li>
              <li>Multiple challenges:</li>
              <ul>
                <li>Multiple products/contracts but one team</li>
                <li>Deliverables were usually contract driven not customer driven</li>
                <li>Limited customer interaction at best - hard to react to feedback</li>
              </ul>
              <li>These challenges almost kept us from realizing the power behind scrum.</li>
            </ul>
          </Notes>
          <Heading>The Rennaisance</Heading>
          <Appear><Image src={images.scrum} alt="Graphic explaining the scrum/agile methodology"/></Appear>
        </Slide>
        <Slide>
          <Notes>
            <h3>Kopis Mobile and Scrum</h3>
            <ul>
              <li>As mentioned in the last slide, we had a lot of challenges implmenting any type of agile or scrum methodology.</li>
              <li>Several on-and-off attempts at starting scrum workflow before really commiting late 2017.</li>
              <li>Traditional agile/scrum "didn't work for us", at least that's what we told ourselves.</li>
              <li>Tried using JIRA for a while as other parts of company were used to it - didn't work for us.</li>
              <li>Migrated to GitLab in 2017, tried to use project issues to track tickets - didn't work for us either.</li>
              <li>Common problem was difficulty in visililty into cross project/product teams (at least we couldn't figure it out).</li>
              <li>Solution: physical board and tracking. Let us prototype easily to figure out what we wanted out of a tool.</li>
            </ul>
          </Notes>
          <Image src={images.sprintStart} alt="Image of Kopis Mobile scrum board showing tasks at the start of a sprint" />
        </Slide>
        <Slide>
          <Notes>
            <h3>Kopis Mobile and Scrum, cont.</h3>
            <ul>
              <li>Paper solutions work great until you have a team member leaving for three months to work remote.</li>
              <li>By this time we were using OpenProject to track tasks across projects and had pretty much figured out our feature set.</li>
              <li>We build a custom scrum board and burndown tool that integrated with OpenProject for use during out daily standups.</li>
              <li>As with most things you'll see in this talk, it's still a work in progress!</li>
            </ul>
          </Notes>
          <Image src={images.digitalScrum} alt="Screenshot of Kopis Mobile digital scrum board showing tasks in a sprint" />
          <Image src={images.burndown} width="25%" alt="Screenshot of Kopis Mobile digital scrum board showing burndown chart for a sprint" />
        </Slide>
        <Slide>
          <Notes>
            <h3>Age of Exploration (c. late 2017)</h3>
            <ul>
              <li>Because of the whole team's involvement in sprint planning and retro, everyone had a better idea of what the team was working toward.</li>
              <li>Along with this came a consious desire to break down the silos and do significant cross training.</li>
              <li>Strongly encouraging people to work on thing outside of their current project forced us to learn each other's code and pass on some of the tribal knowledge inherent in any silo'd project.</li>
              <li>While we would never be fully interchangeable (and that wasn't the goal), everyone benefits from having someone else familiar with their pain and progress.</li>
              <li>So just like the early explorers, we were learning more about our world and the challenges and possiblities it offered.</li>
            </ul>
          </Notes>
          <Heading>The Age of Exploration</Heading>
          <Image src={images.exploration} alt="An image showing explorers" />
        </Slide>
        <Slide>
          <Notes>
            <h3>Industrial Revolution (c. late 2017-2018)</h3>
            <ul>
              <li>Along with learning more about other what other people were doing in the company, we were learning more about tools and processes to make us more productive.</li>
              <li>This kicked off what I like to call our Industrial Revolution.</li>
              <li>Just like the Industrial Revolution revolved around converting hand-made goods to machine-made ones, so too our Industrial Revolution involved automating a lot of the tedious tasks involved in software devlopment.</li>
              <li>As I mentioned before, we had transitioned to a self-hosted GitLab instance for all of our Git repositories.</li>
              <li>The first phase of our Industrial Revolution involved learning and implementing Gitlab's CI/CD pipelines in our projects.</li>
            </ul>
          </Notes>
          <Heading>The Industrial Revolution</Heading>
          <Image src={images.indRev} alt="An image showing explorers" />
        </Slide>
        <Slide>
          <Notes>
            <h3>A better way...</h3>
            <ul>
              <li>So typically, when you push your files to GitHub or GitLab, that's all that happens - your files are sent to a remote server to be shared with your fellow developers.</li>
              <li>But what if I told you there was a way for magical robot workers to take the code you commited, build your app, run tests, and even deploy it to the App Store or Google Play?</li>
            </ul>
          </Notes>
          <Terminal title="rsween@rsween-win10" output={[
            'git push',
            <div key="git-result-1">
              <div>Counting objects: 4, done.</div>
              <div>Delta compression using up to 8 threads.</div>
              <div>Compressing objects: 100% (3/3), done.</div>
              <div>Writing objects: 100% (4/4), 487 bytes | 243.00 KiB/s, done.</div>
              <div>Total 4 (delta 2), reused 0 (delta 0)</div>
            </div>,
            <div key="git-result-2">
              <div>To git.kopismobile.org:rsween/software-process-talk.git</div>
              <div>   5c845e3..dfa86c4  master -> master</div>
            </div>
          ]}
          />
        </Slide>
        <Slide>
          <Notes>
            <h3>What is CI/CD</h3>
            <ul>
              <li>CI stands for Continuous Integration - constantly taking git commits and making sure they work together, often paired with</li>
              <li>CD or Continuous Deployment - given code that is properly integrated and tested, automate the deployment of the product, whether it's a mobile app, web site, or other piece of software.</li>
            </ul>
          </Notes>
          <Appear><Text>Continuous</Text></Appear>
          <Appear><Text>Integration</Text></Appear>
          <Appear><Text>/</Text></Appear>
          <Appear><Text>Continuous</Text></Appear>
          <Appear><Text>Deployment</Text></Appear>
        </Slide>
        <Slide>
          <Notes>
            <h3>Gitlab CI/CD</h3>
            <ul>
              <li>GitLab offers a build in solution for handling CI/CD pipelines - even their free hosted plans offer access to shared runners that will build and test your code.</li>
              <li>Since we self-host GitLab internally, we also run our own fleet of runners to build all of our products from PIC firmware to mobile apps and web sites.</li>
              <li>As you can see in the image, this was a good pipeline! The app built and deployed successfully.</li>
            </ul>
          </Notes>
          <Image src={images.cicd} alt="Image showing the CI/CD pipeline for a Kopis Mobile project" />
        </Slide>
      </Deck>
    );
  }
}
