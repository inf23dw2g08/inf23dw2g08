'use strict';

const e = React.createElement;

class Recipe extends React.Component {

  render() {
    return e('section', { id: this.props.id },
      e(Summary, {
          nome: this.props.nome, 
          ingredientNumber: this.props.ingredients.length,
          instructionsNumber: this.props.instructions.length
        }),
      e(IngredientsList, { ingredients: this.props.ingredients }),
      e(Instructions, { instructions: this.props.instructions }),
      e(StarRating)
    );
  }
}

class StarRating extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      starsSelected: props.starsSelected || 0,
      currentTime: new Date().toLocaleDateString()
    }
    this.change = this.change.bind(this);
  }
  static propTypes = {
    totalStars: PropTypes.number,
    starsSelect: PropTypes.number
  }

  static defaultProps = {
    totalStars: 5
  }

  change(starsSelected) {
    this.setState({
      starsSelected,
      currentTime: new Date().toLocaleDateString()});
  }

  render() {
    const {totalStars} = this.props;
    const {starsSelected} = this.state;
    return e('div', null,
    [...Array(totalStars)].map((n,i) => e(Star, {key: i, selected: i<starsSelected, onClick: () => this.change(i+1)}))
    )
  }
}

const Star = ({selected = false, onClick = f => f}) => e('span',
      {className: selected ? 'star selected' : 'star', onClick: onClick}      
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

const Summary = (props) =>
  e('div', {className: 'summary'}, 
    e('h1', { id: 'recipe-0', 'data-type': 'title' }, props.nome),
    e('p', null,
      e('span', null, props.ingredientNumber + ' Ingredients'),
      e('span', null, ' | '),
      e('span', null, props.instructionsNumber + ' Steps')
    )
  );

const IngredientsList = (props) => e('ul', { className: 'ingredients' },
  props.ingredients.map((ingredient, i) => e('li', { key: i }, ingredient))
);

class Instructions extends React.Component {
  renderInstructionParagraph(text, i) {
    return e('p', { key: i }, text);
  }

  render() {
    return e('section', { className: 'instructions' },
      e('h2', null, 'Cooking Instructions'),
      this.props.instructions.map(this.renderInstructionParagraph)
    )
  }
}

const _nome = 'Baked Salmon';
const _id = 'baked-salmon';
const _items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic"];
const _instructions = [
  'Preheat the oven to 350 degrees.',
  'Spread the olive oil around a glass baking dish.',
  'Add the salmon, garlic, and pine...',
  'Bake for 15 minutes.',
  'Add the yellow squash and put...',
  'Remove from oven and let cool for 15 ....'];

ReactDOM.render(e(Recipe,
  { id: _id, nome: _nome, ingredients: _items, instructions: _instructions }),
  document.getElementById('react-container'));