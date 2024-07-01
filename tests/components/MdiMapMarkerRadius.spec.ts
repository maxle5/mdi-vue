
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerRadius from "../../src/components/MdiMapMarkerRadius.vue";

test("MdiMapMarkerRadius snapshot", () => {
  const wrapper = mount(MdiMapMarkerRadius, {});
  expect(wrapper.html()).toMatchSnapshot();
});
