
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerRefresh from "../../src/components/MdiTimerRefresh.vue";

test("MdiTimerRefresh snapshot", () => {
  const wrapper = mount(MdiTimerRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
