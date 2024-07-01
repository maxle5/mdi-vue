
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUsbFlashDriveOutline from "../../src/components/MdiUsbFlashDriveOutline.vue";

test("MdiUsbFlashDriveOutline snapshot", () => {
  const wrapper = mount(MdiUsbFlashDriveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
