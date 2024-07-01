
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerOff from "../../src/components/MdiMapMarkerOff.vue";

test("MdiMapMarkerOff snapshot", () => {
  const wrapper = mount(MdiMapMarkerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
