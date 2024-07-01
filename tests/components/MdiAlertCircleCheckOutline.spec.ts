
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertCircleCheckOutline from "../../src/components/MdiAlertCircleCheckOutline.vue";

test("MdiAlertCircleCheckOutline snapshot", () => {
  const wrapper = mount(MdiAlertCircleCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
