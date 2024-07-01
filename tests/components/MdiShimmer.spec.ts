
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShimmer from "../../src/components/MdiShimmer.vue";

test("MdiShimmer snapshot", () => {
  const wrapper = mount(MdiShimmer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
