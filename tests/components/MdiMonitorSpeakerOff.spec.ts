
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorSpeakerOff from "../../src/components/MdiMonitorSpeakerOff.vue";

test("MdiMonitorSpeakerOff snapshot", () => {
  const wrapper = mount(MdiMonitorSpeakerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
