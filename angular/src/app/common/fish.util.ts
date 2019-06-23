export class FishUtil {

  private constructor() {}

  /**
   * 判断字符串是否为空
   * @param str
   */
  static isEmptyOrNull(str: string): boolean {
    return !str || str === '';
  }
}
