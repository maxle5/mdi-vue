
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSigma from "../../src/components/MdiSigma.vue";

test("MdiSigma snapshot", () => {
  const wrapper = mount(MdiSigma, {});
  expect(wrapper.html()).toMatchSnapshot();
});
