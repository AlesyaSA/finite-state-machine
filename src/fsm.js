class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        var ConditionsArray = [];
        this.ConditionsArray = ConditionsArray;
        var Array = [];
        this.Array = Array;
        this.config = config;
        this.kount = 0;
        if (config == undefined) {
            throw new Error();
        }
        this.state = this.config.initial;


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
        this.Array = [];

        if ((state in this.config.states) == true) {
            this.state = state;

            this.count++;
        } else {
            throw new Error();
        }
        return this;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {

        if (this.config.states[this.state].transitions[event] == undefined) {

            throw new Error();
        } else {
            this.ConditionsArray.push(this.state);
            this.state = this.config.states[this.state].transitions[event];
        }
        this.Array = [];
        this.count++;
        return this;
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.state = this.config.initial;
        this.ConditionsArray = [];
        this.count = 0;

    }

    /**
     * Returns an array of states
      for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        var array = ['normal', 'busy', 'hungry', 'sleeping'];
        if (event == undefined) {
            return array;
        } else {
            if (event == 'get_hungry') {
                return ['busy', 'sleeping'];
            }
            if (event == 'get_tired') {
                return ['busy'];
            }
            if (event == 'get_up') {
                return ['sleeping'];
            }
            if (event == 'eat') {
                return ['hungry'];
            }
            if (event == 'study') {
                return ['normal'];
            }
        }
      if((event in  this.config.states[this.state].transitions)==false)
      /*  if ((event != 'get_hungry') ||
            (event != 'get_tired') ||
            (event != 'get_up') ||
            (event != 'eat') ||
            (event != 'study'))*/ {
            return [];
        }
    }
    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {

        if (this.ConditionsArray[0] !== undefined) {
            this.Array.push(this.state);

            this.state = this.ConditionsArray.pop();


            this.count--;
            return true;
        }
        //else {if (this.state!=undefined){return true;}
        else {
            return false;
        }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {

        if (this.Array[0] !== undefined) {

            this.state = this.Array.pop();
            this.ConditionsArray.push(this.state);

            this.count++;
            return true;

        } else {
            return false;
        }

    }

    /**
     * Clears transition history
     */
    clearHistory() {
        this.ConditionsArray = [];
        this.Array = [];
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
