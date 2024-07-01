
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarEdit from "../../src/components/MdiCalendarEdit.vue";

test("MdiCalendarEdit snapshot", () => {
  const wrapper = mount(MdiCalendarEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
