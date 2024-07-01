
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileFind from "../../src/components/MdiFileFind.vue";

test("MdiFileFind snapshot", () => {
  const wrapper = mount(MdiFileFind, {});
  expect(wrapper.html()).toMatchSnapshot();
});
