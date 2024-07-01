
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery30 from "../../src/components/MdiBattery30.vue";

test("MdiBattery30 snapshot", () => {
  const wrapper = mount(MdiBattery30, {});
  expect(wrapper.html()).toMatchSnapshot();
});
