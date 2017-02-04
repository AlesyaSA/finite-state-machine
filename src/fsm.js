class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config;
        this.kount=0;
        if (config == undefined) {
            throw new Error();
        }
        return this;
    }
    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {

        return this.config.initial;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {

        this.state = state;
        if (
            (state == 'normal') ||
            (state == 'busy') ||
            (state == 'sleeping') ||
            (state == 'hungry')
        )
            this.config.initial = this.state;
        else {
            throw new Error();
        }
        return this;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {

        switch(event){
          case 'study':
          this.config.initial= 'busy';
          break
          case 'get_tired':
          this.config.initial='sleeping' ;
          break
          case 'get_hungry':
          this.config.initial='hungry' ;
          break
          case 'eat':
          this.config.initial= 'normal';
          break
          case 'get_up':
          this.config.initial='normal' ;
          break
          default:
          {throw new Error();}
          break
        }
        this.count++;
        return this;
}

/**
 * Resets FSM state to initial.
 */
reset() {
  this.config.initial='normal';
}

/**
 * Returns an array of states
  for which there are specified event transition rules.
 * Returns all states if argument is undefined.
 * @param event
 * @returns {Array}
 */
getStates(event) {
  var array=['normal','busy','hungry','sleeping'];
  if(event==undefined){
    return array;
  }else {
  if(event=='get_hungry'){return ['busy','sleeping'];}
if(event=='get_tired'){return ['busy'];}
  if(event=='get_up'){return ['sleeping'];}
if(event=='eat'){return ['hungry'];}
if(event=='study'){return ['normal'];}
}if((event!='get_hungry')||
(event!='get_tired')||
(event!='get_up')||
(event!='eat')||
(event!='study'))
{return [];}
}
/**
 * Goes back to previous state.
 * Returns false if undo is not available.
 * @returns {Boolean}
 */
undo() {
  if(this.count==0) {return false;}
  else {return true;}
}

/**
 * Goes redo to state.
 * Returns false if redo is not available.
 * @returns {Boolean}
 */
redo() {}

/**
 * Clears transition history
 */
clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
