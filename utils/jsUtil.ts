/**
 * 간단한 유틸리티 기능을 지원하는 클래스입니다.
 */
export class JsUtil {
  /**
   * 두 인자를 전달받아, 합을 반환하는 메서드입니다.
   */
  public static sum = (a: number, b: number): number => a + b;
  private static power = (a: number, b: number): number => a * b;
};
