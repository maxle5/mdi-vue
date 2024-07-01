
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTelevisionShimmer from "../../src/components/MdiTelevisionShimmer.vue";

test("MdiTelevisionShimmer snapshot", () => {
  const wrapper = mount(MdiTelevisionShimmer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
