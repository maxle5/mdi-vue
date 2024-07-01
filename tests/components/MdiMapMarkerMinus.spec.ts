
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerMinus from "../../src/components/MdiMapMarkerMinus.vue";

test("MdiMapMarkerMinus snapshot", () => {
  const wrapper = mount(MdiMapMarkerMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
