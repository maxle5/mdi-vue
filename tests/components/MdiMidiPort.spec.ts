
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMidiPort from "../../src/components/MdiMidiPort.vue";

test("MdiMidiPort snapshot", () => {
  const wrapper = mount(MdiMidiPort, {});
  expect(wrapper.html()).toMatchSnapshot();
});
