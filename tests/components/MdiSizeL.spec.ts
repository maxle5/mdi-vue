
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSizeL from "../../src/components/MdiSizeL.vue";

test("MdiSizeL snapshot", () => {
  const wrapper = mount(MdiSizeL, {});
  expect(wrapper.html()).toMatchSnapshot();
});
