
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandWaveOutline from "../../src/components/MdiHandWaveOutline.vue";

test("MdiHandWaveOutline snapshot", () => {
  const wrapper = mount(MdiHandWaveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
