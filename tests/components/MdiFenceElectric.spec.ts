
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFenceElectric from "../../src/components/MdiFenceElectric.vue";

test("MdiFenceElectric snapshot", () => {
  const wrapper = mount(MdiFenceElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
