
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMathSin from "../../src/components/MdiMathSin.vue";

test("MdiMathSin snapshot", () => {
  const wrapper = mount(MdiMathSin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
