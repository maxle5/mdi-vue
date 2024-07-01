
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceWomanShimmerOutline from "../../src/components/MdiFaceWomanShimmerOutline.vue";

test("MdiFaceWomanShimmerOutline snapshot", () => {
  const wrapper = mount(MdiFaceWomanShimmerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
