
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaveform from "../../src/components/MdiWaveform.vue";

test("MdiWaveform snapshot", () => {
  const wrapper = mount(MdiWaveform, {});
  expect(wrapper.html()).toMatchSnapshot();
});
