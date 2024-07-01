
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerRadiusOutline from "../../src/components/MdiMapMarkerRadiusOutline.vue";

test("MdiMapMarkerRadiusOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerRadiusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
