
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery80 from "../../src/components/MdiBattery80.vue";

test("MdiBattery80 snapshot", () => {
  const wrapper = mount(MdiBattery80, {});
  expect(wrapper.html()).toMatchSnapshot();
});
