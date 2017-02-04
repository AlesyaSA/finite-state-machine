class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
       var ConditionsArray=[];
       this.ConditionsArray=ConditionsArray
        this.config = config;
        this.kount=0;
        if (config == undefined) {
            throw new Error();
        }
      this.state='normal'; this.ConditionsArray.push(this.state);
        return this;
    }
    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {

        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {


        if (
            (state == 'normal') ||
            (state == 'busy') ||
            (state == 'sleeping') ||
            (state == 'hungry')
        )
          {this.state = state ;
            this.ConditionsArray.push(this.state);
            this.count++;
          }
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

if( this.config.states[this.state].transitions[event]==undefined){

  throw new Error();}
    else  {this.state=this.config.states[this.state].transitions[event];
      this.ConditionsArray.push(this.state);
    }
        this.count++;
        return this;
}

/**
 * Resets FSM state to initial.
 */
reset() {
this.state=this.config.initial;
 this.ConditionsArray=[];this.count=0;
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


this.count--;
this.ConditionsArray.pop();

this.state=this.ConditionsArray[1];
if(this.count==0) {return true;}
else {return false;}

}

/**
 * Goes redo to state.
 * Returns false if redo is not available.
 * @returns {Boolean}
 */
redo() {

}

/**
 * Clears transition history
 */
clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
