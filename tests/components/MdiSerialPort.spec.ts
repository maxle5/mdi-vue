
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSerialPort from "../../src/components/MdiSerialPort.vue";

test("MdiSerialPort snapshot", () => {
  const wrapper = mount(MdiSerialPort, {});
  expect(wrapper.html()).toMatchSnapshot();
});
