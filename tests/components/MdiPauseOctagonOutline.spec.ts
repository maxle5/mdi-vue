
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPauseOctagonOutline from "../../src/components/MdiPauseOctagonOutline.vue";

test("MdiPauseOctagonOutline snapshot", () => {
  const wrapper = mount(MdiPauseOctagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
