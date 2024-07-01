
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeBattery from "../../src/components/MdiHomeBattery.vue";

test("MdiHomeBattery snapshot", () => {
  const wrapper = mount(MdiHomeBattery, {});
  expect(wrapper.html()).toMatchSnapshot();
});
