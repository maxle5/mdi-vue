
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMarkerOutline from "../../src/components/MdiBookMarkerOutline.vue";

test("MdiBookMarkerOutline snapshot", () => {
  const wrapper = mount(MdiBookMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
