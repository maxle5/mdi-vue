
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarImportOutline from "../../src/components/MdiCalendarImportOutline.vue";

test("MdiCalendarImportOutline snapshot", () => {
  const wrapper = mount(MdiCalendarImportOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
