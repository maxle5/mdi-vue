
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceWomanShimmer from "../../src/components/MdiFaceWomanShimmer.vue";

test("MdiFaceWomanShimmer snapshot", () => {
  const wrapper = mount(MdiFaceWomanShimmer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
