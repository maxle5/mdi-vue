
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabetPiqad from "../../src/components/MdiAlphabetPiqad.vue";

test("MdiAlphabetPiqad snapshot", () => {
  const wrapper = mount(MdiAlphabetPiqad, {});
  expect(wrapper.html()).toMatchSnapshot();
});
