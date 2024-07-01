
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadLeft from "../../src/components/MdiGamepadLeft.vue";

test("MdiGamepadLeft snapshot", () => {
  const wrapper = mount(MdiGamepadLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
