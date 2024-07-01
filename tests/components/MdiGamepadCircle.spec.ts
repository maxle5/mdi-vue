
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGamepadCircle from "../../src/components/MdiGamepadCircle.vue";

test("MdiGamepadCircle snapshot", () => {
  const wrapper = mount(MdiGamepadCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
