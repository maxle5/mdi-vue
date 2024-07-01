
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageMarkerOutline from "../../src/components/MdiImageMarkerOutline.vue";

test("MdiImageMarkerOutline snapshot", () => {
  const wrapper = mount(MdiImageMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
