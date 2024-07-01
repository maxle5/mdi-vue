
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotorbikeOff from "../../src/components/MdiMotorbikeOff.vue";

test("MdiMotorbikeOff snapshot", () => {
  const wrapper = mount(MdiMotorbikeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
