
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHdmiPort from "../../src/components/MdiHdmiPort.vue";

test("MdiHdmiPort snapshot", () => {
  const wrapper = mount(MdiHdmiPort, {});
  expect(wrapper.html()).toMatchSnapshot();
});
