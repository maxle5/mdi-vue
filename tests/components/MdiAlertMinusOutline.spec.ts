
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlertMinusOutline from "../../src/components/MdiAlertMinusOutline.vue";

test("MdiAlertMinusOutline snapshot", () => {
  const wrapper = mount(MdiAlertMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
