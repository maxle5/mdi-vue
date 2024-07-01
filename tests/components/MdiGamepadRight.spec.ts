
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadRight from "../../src/components/MdiGamepadRight.vue";

test("MdiGamepadRight snapshot", () => {
  const wrapper = mount(MdiGamepadRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
