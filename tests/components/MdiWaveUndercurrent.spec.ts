
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaveUndercurrent from "../../src/components/MdiWaveUndercurrent.vue";

test("MdiWaveUndercurrent snapshot", () => {
  const wrapper = mount(MdiWaveUndercurrent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
