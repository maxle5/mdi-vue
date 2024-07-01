
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerDown from "../../src/components/MdiMapMarkerDown.vue";

test("MdiMapMarkerDown snapshot", () => {
  const wrapper = mount(MdiMapMarkerDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
