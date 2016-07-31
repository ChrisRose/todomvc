import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  validations: {
    'text': {
      presence: true,
      length: { minimum: 5 }
    }
  },
  actions: {
    submit() {
      this.validate().then(() => {
        const text = this.get('text');
        this.get('onAdd')(text);
        this.set('text', '');
        this.$('input').focus();
      }).catch(() => {
        this.set('showError', true);
      });
    },
    unFocused() {
      this.set('showError', false);
    }
  }
});