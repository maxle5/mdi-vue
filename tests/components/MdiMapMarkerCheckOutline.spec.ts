
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerCheckOutline from "../../src/components/MdiMapMarkerCheckOutline.vue";

test("MdiMapMarkerCheckOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
