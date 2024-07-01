
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerStarOutline from "../../src/components/MdiMapMarkerStarOutline.vue";

test("MdiMapMarkerStarOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
