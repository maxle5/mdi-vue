
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerDistance from "../../src/components/MdiMapMarkerDistance.vue";

test("MdiMapMarkerDistance snapshot", () => {
  const wrapper = mount(MdiMapMarkerDistance, {});
  expect(wrapper.html()).toMatchSnapshot();
});
