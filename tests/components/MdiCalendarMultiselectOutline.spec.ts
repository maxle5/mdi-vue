
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarMultiselectOutline from "../../src/components/MdiCalendarMultiselectOutline.vue";

test("MdiCalendarMultiselectOutline snapshot", () => {
  const wrapper = mount(MdiCalendarMultiselectOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
