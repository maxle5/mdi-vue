
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeBatteryOutline from "../../src/components/MdiHomeBatteryOutline.vue";

test("MdiHomeBatteryOutline snapshot", () => {
  const wrapper = mount(MdiHomeBatteryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
