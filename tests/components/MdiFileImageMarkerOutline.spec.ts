
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImageMarkerOutline from "../../src/components/MdiFileImageMarkerOutline.vue";

test("MdiFileImageMarkerOutline snapshot", () => {
  const wrapper = mount(MdiFileImageMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
