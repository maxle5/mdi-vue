
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerSyncOutline from "../../src/components/MdiTimerSyncOutline.vue";

test("MdiTimerSyncOutline snapshot", () => {
  const wrapper = mount(MdiTimerSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
