
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClockAlertOutline from "../../src/components/MdiClockAlertOutline.vue";

test("MdiClockAlertOutline snapshot", () => {
  const wrapper = mount(MdiClockAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
