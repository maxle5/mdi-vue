
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTruckAlertOutline from "../../src/components/MdiTruckAlertOutline.vue";

test("MdiTruckAlertOutline snapshot", () => {
  const wrapper = mount(MdiTruckAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
