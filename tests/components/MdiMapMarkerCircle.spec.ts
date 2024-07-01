
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerCircle from "../../src/components/MdiMapMarkerCircle.vue";

test("MdiMapMarkerCircle snapshot", () => {
  const wrapper = mount(MdiMapMarkerCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
