
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerPlusOutline from "../../src/components/MdiMapMarkerPlusOutline.vue";

test("MdiMapMarkerPlusOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
