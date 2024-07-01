
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatColorMarkerCancel from "../../src/components/MdiFormatColorMarkerCancel.vue";

test("MdiFormatColorMarkerCancel snapshot", () => {
  const wrapper = mount(MdiFormatColorMarkerCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
