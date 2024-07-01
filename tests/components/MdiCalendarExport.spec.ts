
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarExport from "../../src/components/MdiCalendarExport.vue";

test("MdiCalendarExport snapshot", () => {
  const wrapper = mount(MdiCalendarExport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
