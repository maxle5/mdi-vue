
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUsbFlashDrive from "../../src/components/MdiUsbFlashDrive.vue";

test("MdiUsbFlashDrive snapshot", () => {
  const wrapper = mount(MdiUsbFlashDrive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
