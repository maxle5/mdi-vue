
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReminder from "../../src/components/MdiReminder.vue";

test("MdiReminder snapshot", () => {
  const wrapper = mount(MdiReminder, {});
  expect(wrapper.html()).toMatchSnapshot();
});
