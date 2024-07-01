
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMathTan from "../../src/components/MdiMathTan.vue";

test("MdiMathTan snapshot", () => {
  const wrapper = mount(MdiMathTan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
