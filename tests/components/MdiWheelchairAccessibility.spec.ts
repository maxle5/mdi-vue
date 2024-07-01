
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWheelchairAccessibility from "../../src/components/MdiWheelchairAccessibility.vue";

test("MdiWheelchairAccessibility snapshot", () => {
  const wrapper = mount(MdiWheelchairAccessibility, {});
  expect(wrapper.html()).toMatchSnapshot();
});
