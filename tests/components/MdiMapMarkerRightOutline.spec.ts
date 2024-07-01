
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerRightOutline from "../../src/components/MdiMapMarkerRightOutline.vue";

test("MdiMapMarkerRightOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
