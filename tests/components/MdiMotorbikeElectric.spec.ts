
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotorbikeElectric from "../../src/components/MdiMotorbikeElectric.vue";

test("MdiMotorbikeElectric snapshot", () => {
  const wrapper = mount(MdiMotorbikeElectric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
