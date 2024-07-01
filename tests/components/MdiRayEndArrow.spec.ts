
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRayEndArrow from "../../src/components/MdiRayEndArrow.vue";

test("MdiRayEndArrow snapshot", () => {
  const wrapper = mount(MdiRayEndArrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
