
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSprout from "../../src/components/MdiSprout.vue";

test("MdiSprout snapshot", () => {
  const wrapper = mount(MdiSprout, {});
  expect(wrapper.html()).toMatchSnapshot();
});
