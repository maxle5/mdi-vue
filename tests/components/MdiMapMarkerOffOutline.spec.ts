
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerOffOutline from "../../src/components/MdiMapMarkerOffOutline.vue";

test("MdiMapMarkerOffOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
