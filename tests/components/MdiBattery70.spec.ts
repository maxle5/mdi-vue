
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery70 from "../../src/components/MdiBattery70.vue";

test("MdiBattery70 snapshot", () => {
  const wrapper = mount(MdiBattery70, {});
  expect(wrapper.html()).toMatchSnapshot();
});
