
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery50 from "../../src/components/MdiBattery50.vue";

test("MdiBattery50 snapshot", () => {
  const wrapper = mount(MdiBattery50, {});
  expect(wrapper.html()).toMatchSnapshot();
});
