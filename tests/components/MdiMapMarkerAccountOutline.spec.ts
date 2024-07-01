
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerAccountOutline from "../../src/components/MdiMapMarkerAccountOutline.vue";

test("MdiMapMarkerAccountOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
