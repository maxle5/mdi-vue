
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerOutline from "../../src/components/MdiMapMarkerOutline.vue";

test("MdiMapMarkerOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
