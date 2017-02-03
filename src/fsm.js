class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config;
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
          case 'get-tired':
          this.config.initial='sleeping' ;
          break
          case 'get_hungry':
          this.config.initial='hungry' ;
          break
          case 'eat':
          this.config.initial= 'normal';
          break
          case 'get-up':
          this.config.initial='normal' ;
          break
        }
}

/**
 * Resets FSM state to initial.
 */
reset() {}

/**
 * Returns an array of states for which there are specified event transition rules.
 * Returns all states if argument is undefined.
 * @param event
 * @returns {Array}
 */
getStates(event) {}

/**
 * Goes back to previous state.
 * Returns false if undo is not available.
 * @returns {Boolean}
 */
undo() {}

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
