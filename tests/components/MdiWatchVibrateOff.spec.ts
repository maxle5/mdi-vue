
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWatchVibrateOff from "../../src/components/MdiWatchVibrateOff.vue";

test("MdiWatchVibrateOff snapshot", () => {
  const wrapper = mount(MdiWatchVibrateOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
