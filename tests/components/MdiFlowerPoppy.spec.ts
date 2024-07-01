
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlowerPoppy from "../../src/components/MdiFlowerPoppy.vue";

test("MdiFlowerPoppy snapshot", () => {
  const wrapper = mount(MdiFlowerPoppy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
