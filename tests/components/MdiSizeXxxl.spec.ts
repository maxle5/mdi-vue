
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSizeXxxl from "../../src/components/MdiSizeXxxl.vue";

test("MdiSizeXxxl snapshot", () => {
  const wrapper = mount(MdiSizeXxxl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
