
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerMultipleOutline from "../../src/components/MdiMapMarkerMultipleOutline.vue";

test("MdiMapMarkerMultipleOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
