
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSigmaLower from "../../src/components/MdiSigmaLower.vue";

test("MdiSigmaLower snapshot", () => {
  const wrapper = mount(MdiSigmaLower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
