
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSeedOffOutline from "../../src/components/MdiSeedOffOutline.vue";

test("MdiSeedOffOutline snapshot", () => {
  const wrapper = mount(MdiSeedOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
