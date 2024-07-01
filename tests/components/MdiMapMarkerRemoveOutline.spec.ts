
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerRemoveOutline from "../../src/components/MdiMapMarkerRemoveOutline.vue";

test("MdiMapMarkerRemoveOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
