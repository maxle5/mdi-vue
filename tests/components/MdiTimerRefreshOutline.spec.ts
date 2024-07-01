
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerRefreshOutline from "../../src/components/MdiTimerRefreshOutline.vue";

test("MdiTimerRefreshOutline snapshot", () => {
  const wrapper = mount(MdiTimerRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
