
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarCollapseHorizontal from "../../src/components/MdiCalendarCollapseHorizontal.vue";

test("MdiCalendarCollapseHorizontal snapshot", () => {
  const wrapper = mount(MdiCalendarCollapseHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
