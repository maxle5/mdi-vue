
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShovelOff from "../../src/components/MdiShovelOff.vue";

test("MdiShovelOff snapshot", () => {
  const wrapper = mount(MdiShovelOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
