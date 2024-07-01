
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceManShimmerOutline from "../../src/components/MdiFaceManShimmerOutline.vue";

test("MdiFaceManShimmerOutline snapshot", () => {
  const wrapper = mount(MdiFaceManShimmerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
