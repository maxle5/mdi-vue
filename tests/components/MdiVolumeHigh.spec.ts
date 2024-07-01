
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeHigh from "../../src/components/MdiVolumeHigh.vue";

test("MdiVolumeHigh snapshot", () => {
  const wrapper = mount(MdiVolumeHigh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
