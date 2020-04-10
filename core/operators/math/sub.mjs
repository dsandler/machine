import Operator from '../../operator.mjs';

export default class Sub extends Operator {
  static type = 'SUB';
  static letter = '-';
  
  init() {
    this.addInput('a', -1, 0);
    this.addInput('b', +1, 0);
    this.addOutput('c', 0, +1);
  }

  process() {
    var a = Number(this.inputs['a'].value);
    var b = Number(this.inputs['b'].value);
    this.outputs['c'].setNextValue(a - b);
  }
}

Operator.registerOperator(Sub);