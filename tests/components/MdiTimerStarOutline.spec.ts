
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerStarOutline from "../../src/components/MdiTimerStarOutline.vue";

test("MdiTimerStarOutline snapshot", () => {
  const wrapper = mount(MdiTimerStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
