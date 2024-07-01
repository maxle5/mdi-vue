
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowOscillatingOff from "../../src/components/MdiArrowOscillatingOff.vue";

test("MdiArrowOscillatingOff snapshot", () => {
  const wrapper = mount(MdiArrowOscillatingOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
