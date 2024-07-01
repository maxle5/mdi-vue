
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashAlertOutline from "../../src/components/MdiFlashAlertOutline.vue";

test("MdiFlashAlertOutline snapshot", () => {
  const wrapper = mount(MdiFlashAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
