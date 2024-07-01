
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPyramid from "../../src/components/MdiPyramid.vue";

test("MdiPyramid snapshot", () => {
  const wrapper = mount(MdiPyramid, {});
  expect(wrapper.html()).toMatchSnapshot();
});
