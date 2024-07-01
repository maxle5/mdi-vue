
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerMinusOutline from "../../src/components/MdiMapMarkerMinusOutline.vue";

test("MdiMapMarkerMinusOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
