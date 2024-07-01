
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerCancelOutline from "../../src/components/MdiTimerCancelOutline.vue";

test("MdiTimerCancelOutline snapshot", () => {
  const wrapper = mount(MdiTimerCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
