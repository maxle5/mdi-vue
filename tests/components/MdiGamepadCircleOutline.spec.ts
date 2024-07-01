
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadCircleOutline from "../../src/components/MdiGamepadCircleOutline.vue";

test("MdiGamepadCircleOutline snapshot", () => {
  const wrapper = mount(MdiGamepadCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
