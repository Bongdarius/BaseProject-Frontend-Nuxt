// @ts-check
import antfu from '@antfu/eslint-config';

export default antfu({
  rules: {
    'style/semi': ['error', 'always'], // 세미콜론 강제
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }], // vue 파일 순서
  },
});
