
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMathNorm from "../../src/components/MdiMathNorm.vue";

test("MdiMathNorm snapshot", () => {
  const wrapper = mount(MdiMathNorm, {});
  expect(wrapper.html()).toMatchSnapshot();
});
