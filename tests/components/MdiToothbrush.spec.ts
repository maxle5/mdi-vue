
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToothbrush from "../../src/components/MdiToothbrush.vue";

test("MdiToothbrush snapshot", () => {
  const wrapper = mount(MdiToothbrush, {});
  expect(wrapper.html()).toMatchSnapshot();
});
