
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBattery from "../../src/components/MdiCarBattery.vue";

test("MdiCarBattery snapshot", () => {
  const wrapper = mount(MdiCarBattery, {});
  expect(wrapper.html()).toMatchSnapshot();
});
