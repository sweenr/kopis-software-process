import React from 'react';
import { Deck, Heading, Slide, Text, List, ListItem, Image, Appear, Notes } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Terminal from 'spectacle-terminal';
import CodeSlide from 'spectacle-code-slide';

const theme = createTheme(
  {
    primary: '#E2E4E6',
    secondary: 'black',
    tertiary: '#A4343A',
    quaternary: '#A4343A'
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
  kopis: require('../assets/kopis.png'),
  caveman: require('../assets/caveman-spongebob.gif'),
  git: require('../assets/git-icon.png'),
  gitFlow: require('../assets/git-flow.png'),
  silos: require('../assets/silos.jpg'),
  goodWork: require('../assets/good-work.gif'),
  scrum: require('../assets/scrum.png'),
  sprintStart: require('../assets/sprint-18-6-start.png'),
  sprintEnd: require('../assets/sprint-18-6-end.jpg'),
  digitalScrum: require('../assets/digital-scrum.png'),
  burndown: require('../assets/burndown.png'),
  exploration: require('../assets/exploration.png'),
  indRev: require('../assets/industrial-revolution.jpg'),
  cicd: require('../assets/cicd.png'),
  mergeReview: require('../assets/mergereview.png'),
  future: require('../assets/future.jpg')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} showFullscreenControl={false}>
        <Slide>
          <Notes>
            <ul>
              <li>My name is Richard Sween, Software Engineer at Kopis Mobile</li>
              <li>Today I'm here to talk about software process, which is exactly what it sounds like.</li>
              <li>But instead of just talking about software processes, I'm going to take you on a journey.</li>
            </ul>
          </Notes>
          <Image src={images.kopis} height={250} alt="Kopis Mobile logo" />
          <Heading textColor="secondary">Software Process</Heading>
        </Slide>
        <Slide>
          <Notes>
            <ul>
              <li>A journey through the history of Kopis Mobile's software process</li>
            </ul>
          </Notes>
          <Heading size="3">Software Process Journey</Heading>
          <List>
            <Appear><ListItem>The Dark Ages</ListItem></Appear>
            <Appear><ListItem>The Rennaissance</ListItem></Appear>
            <Appear><ListItem>Industrial Revolution</ListItem></Appear>
            <Appear><ListItem>The Future</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Notes>
            <ul>
              <li>Now I know I said we started in the dark ages, but it was more like cavemen post fire discovery.</li>
              <li>We were comfortable with Git</li>
            </ul>
          </Notes>
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
              <li>We used a modified Git Flow branching scheme, and...</li>
              <li>That was about the extent of our organized software process at the time.</li>
              <li>Deploy keys for Android apps lived on one person's PC (backed up, probably).</li>
              <li>Every artifact shipped to a customer was built on a single person's machine.</li>
            </ul>
          </Notes>
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
              <li>Mostly revolved around fitting our process to tools, not the other way.</li>
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
        <Slide textSize={'24px'}>
          <Notes>
            <h3>What is CI/CD</h3>
            <ul>
              <li>CI stands for Continuous Integration - constantly taking git commits and making sure they work together, often paired with</li>
              <li>CD or Continuous Deployment - given code that is properly integrated and tested, automate the deployment of the product, whether it's a mobile app, web site, or other piece of software.</li>
            </ul>
          </Notes>
          <Appear><Text textSize={'5rem'}>Continuous</Text></Appear>
          <Appear><Text textSize={'5rem'}>Integration</Text></Appear>
          <Appear><Text textSize={'5rem'}>/</Text></Appear>
          <Appear><Text textSize={'5rem'}>Continuous</Text></Appear>
          <Appear><Text textSize={'5rem'}>Deployment</Text></Appear>
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
        <CodeSlide
          lang="js"
          code={require('../assets/gitlab-ci.txt')}
          ranges={[
            { loc: [0, 27],
              title: '.gitlab-ci.yml' },
            { loc: [9, 13] },
            { loc: [14, 27] },
            { loc: [6, 8] },
            { loc: [0, 5] }
          ]}
        >
          <Notes>
            <h3>Example .gitlab-ci.yml File</h3>
            <ul>
              <li>GitLab uses a YAML file to configure your CI/CD jobs.</li>
              <li>Here's an example GitLab CI file, the one used to build this presentation to be exact!</li>
              <li>You can see we have defined two jobs, "test" and "pages".</li>
              <li>The "test" job simply runs the eslinter against the React code in this presentation.</li>
              <li>The "pages" job builds the presentation, packages it up in a "public" directory, and then tell GitLab to upload that directory and host it using GitLab Pages, an internal hosting tool (GitHub has something similar).</li>
              <li>Both jobs use the "before_script" to run npm install first before executing the rest of their tasks.</li>
            </ul>
          </Notes>
        </CodeSlide>
        <Slide>
          <Notes>
            <h3>Improvements to Process</h3>
            <ul>
              <li>As part of our scrum process, we started enforcing merge reviews .</li>
            </ul>
          </Notes>
          <Image src={images.mergeReview} alt="Image showing GitLab Merge Review screen" />
        </Slide>
        <Slide>
          <Notes>
            <h3>The Future</h3>
            <ul>
              <li>We're always looking for ways to improve our software process.</li>
              <li>Two big areas we know we want to focus on:</li>
              <ol>
                <li>Adding more automated code quality tools</li>
                <li>Ways to deal with maintenance, like improvement/maintenance sprints or (un-)hackathons</li>
              </ol>
            </ul>
          </Notes>
          <Heading>The Future</Heading>
          <Image src={images.future} alt="Image of a robot touching a human's figure signifying the future" />
        </Slide>
        <Slide>
          <Heading>Key Takeaways</Heading>
          <List ordered>
            <Appear><ListItem>No "one size fits all" solutions</ListItem></Appear>
            <Appear><ListItem>Break down silos</ListItem></Appear>
            <Appear><ListItem>Invest in automated tooling</ListItem></Appear>
            <Appear><ListItem>Take time to develop, document, and refine your software process</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading>Thank you!</Heading>
          <Image src={images.kopis} height={'200px'} alt="Kopis Mobile Logo" />
          <Text>Richard Sween</Text>
          <Text>rsween@kopismobile.com</Text>
          <Text>@_richardsween</Text>
        </Slide>
      </Deck>
    );
  }
}
