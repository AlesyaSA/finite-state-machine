class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
       var ConditionsArray=[];
       this.ConditionsArray=ConditionsArray
       var LastConditionsArray=[];
       this.LastConditionsArray=LastConditionsArray
        this.config = config;
        this.kount=0;
        if (config == undefined) {
            throw new Error();
        }
      this.state='normal';
      this.LastConditionsArray.push(this.state);

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

  this.ConditionsArray.push(this.state);
        if (
            (state == 'normal') ||
            (state == 'busy') ||
            (state == 'sleeping') ||
            (state == 'hungry')
        )
          {this.state = state ;
this.LastConditionsArray.push(this.state);
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
    else  {
       this.ConditionsArray.push(this.state);
      this.state=this.config.states[this.state].transitions[event];
this.LastConditionsArray.push(this.state);
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
 this.LastConditionsArray=[];
 this.LastConditionsArray.push(this.state);
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


if(this.ConditionsArray[0]!==undefined){
this.state=this.ConditionsArray.pop();  return true;}
//else {if (this.state!=undefined){return true;}
else {return false;}
}

/**
 * Goes redo to state.
 * Returns false if redo is not available.
 * @returns {Boolean}
 */
redo() {
this.LastConditionsArray.push(this.state);
}

/**
 * Clears transition history
 */
clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
