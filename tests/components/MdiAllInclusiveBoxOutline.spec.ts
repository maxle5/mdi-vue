
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAllInclusiveBoxOutline from "../../src/components/MdiAllInclusiveBoxOutline.vue";

test("MdiAllInclusiveBoxOutline snapshot", () => {
  const wrapper = mount(MdiAllInclusiveBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
