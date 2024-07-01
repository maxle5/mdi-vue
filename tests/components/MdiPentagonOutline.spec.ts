
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPentagonOutline from "../../src/components/MdiPentagonOutline.vue";

test("MdiPentagonOutline snapshot", () => {
  const wrapper = mount(MdiPentagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
