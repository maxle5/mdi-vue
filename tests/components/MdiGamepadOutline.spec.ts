
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadOutline from "../../src/components/MdiGamepadOutline.vue";

test("MdiGamepadOutline snapshot", () => {
  const wrapper = mount(MdiGamepadOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
