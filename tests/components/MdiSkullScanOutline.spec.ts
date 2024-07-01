
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkullScanOutline from "../../src/components/MdiSkullScanOutline.vue";

test("MdiSkullScanOutline snapshot", () => {
  const wrapper = mount(MdiSkullScanOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
