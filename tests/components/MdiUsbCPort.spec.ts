
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUsbCPort from "../../src/components/MdiUsbCPort.vue";

test("MdiUsbCPort snapshot", () => {
  const wrapper = mount(MdiUsbCPort, {});
  expect(wrapper.html()).toMatchSnapshot();
});
