
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookshelf from "../../src/components/MdiBookshelf.vue";

test("MdiBookshelf snapshot", () => {
  const wrapper = mount(MdiBookshelf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
