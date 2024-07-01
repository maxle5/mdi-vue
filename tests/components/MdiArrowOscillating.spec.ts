
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowOscillating from "../../src/components/MdiArrowOscillating.vue";

test("MdiArrowOscillating snapshot", () => {
  const wrapper = mount(MdiArrowOscillating, {});
  expect(wrapper.html()).toMatchSnapshot();
});
