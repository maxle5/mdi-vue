
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarText from "../../src/components/MdiCalendarText.vue";

test("MdiCalendarText snapshot", () => {
  const wrapper = mount(MdiCalendarText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
