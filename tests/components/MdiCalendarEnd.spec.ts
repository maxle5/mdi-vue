
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarEnd from "../../src/components/MdiCalendarEnd.vue";

test("MdiCalendarEnd snapshot", () => {
  const wrapper = mount(MdiCalendarEnd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
