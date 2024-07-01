
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardAlertOutline from "../../src/components/MdiClipboardAlertOutline.vue";

test("MdiClipboardAlertOutline snapshot", () => {
  const wrapper = mount(MdiClipboardAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
