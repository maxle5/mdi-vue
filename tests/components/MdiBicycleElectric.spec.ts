
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBicycleElectric from "../../src/components/MdiBicycleElectric.vue";

test("MdiBicycleElectric snapshot", () => {
  const wrapper = mount(MdiBicycleElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
