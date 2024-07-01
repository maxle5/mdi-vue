
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMathNormBox from "../../src/components/MdiMathNormBox.vue";

test("MdiMathNormBox snapshot", () => {
  const wrapper = mount(MdiMathNormBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
