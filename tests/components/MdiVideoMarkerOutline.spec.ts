
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoMarkerOutline from "../../src/components/MdiVideoMarkerOutline.vue";

test("MdiVideoMarkerOutline snapshot", () => {
  const wrapper = mount(MdiVideoMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
