
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerPauseOutline from "../../src/components/MdiTimerPauseOutline.vue";

test("MdiTimerPauseOutline snapshot", () => {
  const wrapper = mount(MdiTimerPauseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
