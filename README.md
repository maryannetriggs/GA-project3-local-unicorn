![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# GA Project 3 - Local Unicorn

Design based on the British newspaper 'The Times' this project is a website that requests the top UK News stories from News API and then passes the headline through Words API to create an alternative headline from word associations. this was the second project I completed during the General Assembly Software Engineering Immersive (bootcamp) course.

## Resources

* The Times [Newspaper](https://www.thetimes.co.uk/)
* The Times - [Wikipedia](https://en.wikipedia.org/wiki/The_Times)
* [News API](https://newsapi.org/)
* [Words API](https://www.wordsapi.com/)

## Built With

* HTML5
* SCSS
* Javascript
* React
* Axios
* NewsAPI and WordsAPI
* Git / GitHub

## Timeframe

2 day team project with [Paul Cooke](https://github.com/paulcooke)

## Deployment

This website is deployed on [Heroku](https://alternativenews.herokuapp.com/)

![readme-one](images/readme/screenshot.png)

---

## Getting Started

Use the clone button to download the source code. In your terminal enter the following commands:

### To install all the packages listed in the package.json:
$ npm i

### Run the app on your localhost:
$ npm run serve

## To Use

To get your alternative news headline (hopefully with hilarious outcomes)

- Click on *Step 1 - Shuffle News* at least once to get a news story to affect
- Click on *Step 2 - Randomise* to prepare your selected news story for the final step
- Click on either of the *Step 3 - Alternative News* buttons to get your alternative news story headline (each button will provide a slightly different perspective)
- Enjoy your alternative news story
- Repeat as required

---

## Architecture

```js
getStory() {
    const newsKey = process.env.NEWSAPI_ACCESS_KEY
    axios.get(`https://newsapi.org//v2/top-headlines?country=gb&apiKey=${newsKey}`)
      .then(res => this.setState({ articles: res.data.articles, originalHeadline: res.data.articles[0].title.toLowerCase().split(/[. ,:;\-_']+/) })) // has [0] to match the shuffle index start
      .catch(err => this.setState({ error: err.message }))
  }
```

---

## Future Improvements

This project was fast paced due to the 48 hour time restriction but also lots of fun. I enjoyed working with my partner, Paul, as we communicated well together. We had many more ideas for implementation than we had time to implement but were both really impressed with what we created. I created a much more advanced project that I would have done working solo, much was learnt from the pair-programming experience.

Advancements that could be made in the future to improve this website include:

- Ability to Switch between News genres (e.g. Entertainment, Sport, Science & Technology)
- Ability to share new headlines on social media accounts with friends
- Improved RegEx to ensure maximum headline translation
- Reduce number of buttons required to get to your alterntive headline.
- Additional styling to look even more like The Times newspaper

## Author - Mary-Anne Triggs

Please visit my personal [portfolio](www.maryannetriggs.com)