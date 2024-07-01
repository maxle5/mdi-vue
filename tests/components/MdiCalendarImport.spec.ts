
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarImport from "../../src/components/MdiCalendarImport.vue";

test("MdiCalendarImport snapshot", () => {
  const wrapper = mount(MdiCalendarImport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
