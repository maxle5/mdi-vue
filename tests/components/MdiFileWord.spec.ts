
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileWord from "../../src/components/MdiFileWord.vue";

test("MdiFileWord snapshot", () => {
  const wrapper = mount(MdiFileWord, {});
  expect(wrapper.html()).toMatchSnapshot();
});
