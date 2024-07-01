
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusElectric from "../../src/components/MdiBusElectric.vue";

test("MdiBusElectric snapshot", () => {
  const wrapper = mount(MdiBusElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
