
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUsbPort from "../../src/components/MdiUsbPort.vue";

test("MdiUsbPort snapshot", () => {
  const wrapper = mount(MdiUsbPort, {});
  expect(wrapper.html()).toMatchSnapshot();
});
