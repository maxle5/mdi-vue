
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceManShimmer from "../../src/components/MdiFaceManShimmer.vue";

test("MdiFaceManShimmer snapshot", () => {
  const wrapper = mount(MdiFaceManShimmer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
