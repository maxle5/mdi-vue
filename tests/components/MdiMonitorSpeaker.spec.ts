
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorSpeaker from "../../src/components/MdiMonitorSpeaker.vue";

test("MdiMonitorSpeaker snapshot", () => {
  const wrapper = mount(MdiMonitorSpeaker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
