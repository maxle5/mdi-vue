
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSvg from "../../src/components/MdiSvg.vue";

test("MdiSvg snapshot", () => {
  const wrapper = mount(MdiSvg, {});
  expect(wrapper.html()).toMatchSnapshot();
});
