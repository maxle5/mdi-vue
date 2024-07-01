
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery40 from "../../src/components/MdiBattery40.vue";

test("MdiBattery40 snapshot", () => {
  const wrapper = mount(MdiBattery40, {});
  expect(wrapper.html()).toMatchSnapshot();
});
