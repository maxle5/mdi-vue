
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerLeftOutline from "../../src/components/MdiMapMarkerLeftOutline.vue";

test("MdiMapMarkerLeftOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
