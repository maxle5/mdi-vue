
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarSyncOutline from "../../src/components/MdiCalendarSyncOutline.vue";

test("MdiCalendarSyncOutline snapshot", () => {
  const wrapper = mount(MdiCalendarSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
