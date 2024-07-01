
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMarkerCancel from "../../src/components/MdiMarkerCancel.vue";

test("MdiMarkerCancel snapshot", () => {
  const wrapper = mount(MdiMarkerCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
