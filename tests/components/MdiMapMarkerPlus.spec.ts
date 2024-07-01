
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerPlus from "../../src/components/MdiMapMarkerPlus.vue";

test("MdiMapMarkerPlus snapshot", () => {
  const wrapper = mount(MdiMapMarkerPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
