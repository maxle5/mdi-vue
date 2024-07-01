
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerMultiple from "../../src/components/MdiMapMarkerMultiple.vue";

test("MdiMapMarkerMultiple snapshot", () => {
  const wrapper = mount(MdiMapMarkerMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
