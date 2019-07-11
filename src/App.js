import React from 'react';
import { Helmet } from "react-helmet";
import './App.scss';
class App extends React.Component {
	constructor(props, context) {
		super(props, context);
		const r = 4,
			c = 4;
		
		this.state = {
			insult: '',
			active: false,
			transitioning: false
		}
		this.sentences = ["GET A LOAD OF THIS", "i fail to understand how you've become such a", "get out of my way, you sorry excuse for a", "i cannot believe that you are such a", "you're a", "i'm getting really tired of this shit, you", "i can't believe you are even talking to me, you", "fuck you and everyone who looks like you, you"]
		this.adjectives = ["actual", "serious", "ultimate", "good", "adorable", "cute", "anxious", "average", "evil", "big", "brainless", "busted", "cheap", "cursed", "smelly", "creepy", "dead", "delicate", "delicious", "dirty", "dusty", "old", "fine", "fresh", "fragile", "furry", "gaping", "gigantic", "hideous", "hot", "hungry", "thirsty", "juicy", "lame", "little", "magical", "meaty", "moldy", "nasty", "nervous", "premium", "repulsive", "ripe", "rotten", "rude", "salty", "savory", "scrawny", "sloppy", "spooky", "stupid", "super", "supreme", "tasty", "teeny-tiny", "thick", "ugly", "wacky", "wild", "left-handed", "goofy", "wrinkly", "wide-toed", "gay", "autistic", "snivelling"]
		this.curseWords = ["fuckass", "ass", "as-heck", "bitch", "shitty", "dumbo", "anime-looking", "frog-looking", "small-eared", "small-faced", "looking", "fucking", "donkey-looking", "deadass", "little-nosed", "ol'", "li'l", "earwax-eating"]
		this.nouns = ["goon", "bean", "snack", "boy", "anime", "fuck", "weeb", "coward", "headass", "smegma", "donkey", "camel", "goat", "ganglion", "old person", "toe-sucker", "troglodyte", "cuck", "dweeb", "milk jug", "slug", "boi", "girl", "grill", "cunt", "furry", "nugget", "autist", "gay"]
		this.insult = this.insult.bind(this)
		this.rand = this.rand.bind(this)
		this.title = "Test App";
		
	}

	rand(a) {
		return a[Math.floor(Math.random() * a.length)];
	}

	insult(e) {
		var s = this.rand(this.sentences),
			a = this.rand(this.adjectives),
			n = this.rand(this.nouns),
			c = this.rand(this.curseWords),
			i = a+" "+c+" "+n,
			t = this;
		this.setState({
			active: true,
			transitioning: this.state.active?true:false,
			insult: this.state.active?this.state.insult:i
		})

		setTimeout(function(){
			t.setState({ 
				insult: i,
				transitioning: false 
			})
		}, 750)
	}


	render() {
		return (
			<div className="App">
				<Helmet>
					<meta name="robots" content="noindex,follow" />
					<title>Insulter</title>
					<meta name="description" content="Generate Random Insults" />
				</Helmet>
				
				<div id="insulter">
					<div className="container">
						<h1 className="metal"><span>iNsuLteR</span></h1>
						<div id="insult" className={this.state.active?'active':null}>
							<div className={this.state.transitioning?'transitioning':null}>{this.state.insult}</div>
						</div>
						<div className="btn" onClick={this.insult}>
							Insult Me
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
