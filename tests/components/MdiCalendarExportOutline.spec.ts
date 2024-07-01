
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarExportOutline from "../../src/components/MdiCalendarExportOutline.vue";

test("MdiCalendarExportOutline snapshot", () => {
  const wrapper = mount(MdiCalendarExportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
