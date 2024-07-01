
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery from "../../src/components/MdiBattery.vue";

test("MdiBattery snapshot", () => {
  const wrapper = mount(MdiBattery, {});
  expect(wrapper.html()).toMatchSnapshot();
});
