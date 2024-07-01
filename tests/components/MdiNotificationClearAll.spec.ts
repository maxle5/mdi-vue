
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotificationClearAll from "../../src/components/MdiNotificationClearAll.vue";

test("MdiNotificationClearAll snapshot", () => {
  const wrapper = mount(MdiNotificationClearAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
