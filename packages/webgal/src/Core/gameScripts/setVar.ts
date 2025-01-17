import { ISentence } from '@/Core/controller/scene/sceneInterface';
import { IPerform } from '@/Core/Modules/perform/performInterface';
import { webgalStore } from '@/store/store';
import { setStageVar } from '@/store/stageReducer';
import { logger } from '@/Core/util/logger';
import { compile } from 'angular-expressions';
import { setGlobalVar } from '@/store/userDataReducer';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ISetGameVar } from '@/store/stageInterface';
import { syncStorageFast } from '@/Core/controller/storage/storageController';

/**
 * 设置变量
 * @param sentence
 */
export const setVar = (sentence: ISentence): IPerform => {
  let setGlobal = false;
  sentence.args.forEach((e) => {
    if (e.key === 'global') {
      setGlobal = true;
    }
  });
  let targetReducerFunction: ActionCreatorWithPayload<ISetGameVar, string>;
  if (setGlobal) {
    targetReducerFunction = setGlobalVar;
  } else {
    targetReducerFunction = setStageVar;
  }
  // 先把表达式拆分为变量名和赋值语句
  if (sentence.content.match(/=/)) {
    const key = sentence.content.split(/=/)[0];
    const valExp = sentence.content.split(/=/)[1];
    if (valExp === 'random()') {
      webgalStore.dispatch(targetReducerFunction({ key, value: Math.random() }));
    } else if (valExp.match(/[+\-*\/()]/)) {
      // 如果包含加减乘除号，则运算
      // 先取出运算表达式中的变量
      const valExpArr = valExp.split(/([+\-*\/()])/g);
      // 将变量替换为变量的值，然后合成表达式字符串
      const valExp2 = valExpArr
        .map((e) => {
          if (e.match(/[a-zA-Z]/)) {
            return getValueFromState(e).toString();
          } else return e;
        })
        .reduce((pre, curr) => pre + curr, '');
      const exp = compile(valExp2);
      const result = exp();
      webgalStore.dispatch(targetReducerFunction({ key, value: result }));
    } else if (valExp.match(/true|false/)) {
      if (valExp.match(/true/)) {
        webgalStore.dispatch(targetReducerFunction({ key, value: true }));
      }
      if (valExp.match(/false/)) {
        webgalStore.dispatch(targetReducerFunction({ key, value: false }));
      }
    } else {
      if (!isNaN(Number(valExp))) {
        webgalStore.dispatch(targetReducerFunction({ key, value: Number(valExp) }));
      } else webgalStore.dispatch(targetReducerFunction({ key, value: valExp }));
    }
    if (setGlobal) {
      logger.debug('设置全局变量：', { key, value: webgalStore.getState().userData.globalGameVar[key] });
      syncStorageFast();
    } else {
      logger.debug('设置变量：', { key, value: webgalStore.getState().stage.GameVar[key] });
    }
  }
  return {
    performName: 'none',
    duration: 0,
    isHoldOn: false,
    stopFunction: () => {},
    blockingNext: () => false,
    blockingAuto: () => true,
    stopTimeout: undefined, // 暂时不用，后面会交给自动清除
  };
};

export function getValueFromState(key: string) {
  let ret: number | string | boolean = 0;
  if (webgalStore.getState().stage.GameVar.hasOwnProperty(key)) {
    ret = webgalStore.getState().stage.GameVar[key];
  } else if (webgalStore.getState().userData.globalGameVar.hasOwnProperty(key)) {
    ret = webgalStore.getState().userData.globalGameVar[key];
  }
  return ret;
}
