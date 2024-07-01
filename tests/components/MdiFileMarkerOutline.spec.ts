
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMarkerOutline from "../../src/components/MdiFileMarkerOutline.vue";

test("MdiFileMarkerOutline snapshot", () => {
  const wrapper = mount(MdiFileMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
