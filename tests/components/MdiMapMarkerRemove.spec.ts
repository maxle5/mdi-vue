
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerRemove from "../../src/components/MdiMapMarkerRemove.vue";

test("MdiMapMarkerRemove snapshot", () => {
  const wrapper = mount(MdiMapMarkerRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
