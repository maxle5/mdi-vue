
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerRight from "../../src/components/MdiMapMarkerRight.vue";

test("MdiMapMarkerRight snapshot", () => {
  const wrapper = mount(MdiMapMarkerRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
