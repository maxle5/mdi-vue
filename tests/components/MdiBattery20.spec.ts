
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery20 from "../../src/components/MdiBattery20.vue";

test("MdiBattery20 snapshot", () => {
  const wrapper = mount(MdiBattery20, {});
  expect(wrapper.html()).toMatchSnapshot();
});
