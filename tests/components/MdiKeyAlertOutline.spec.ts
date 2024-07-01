
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyAlertOutline from "../../src/components/MdiKeyAlertOutline.vue";

test("MdiKeyAlertOutline snapshot", () => {
  const wrapper = mount(MdiKeyAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
