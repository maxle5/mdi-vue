
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerPath from "../../src/components/MdiMapMarkerPath.vue";

test("MdiMapMarkerPath snapshot", () => {
  const wrapper = mount(MdiMapMarkerPath, {});
  expect(wrapper.html()).toMatchSnapshot();
});
