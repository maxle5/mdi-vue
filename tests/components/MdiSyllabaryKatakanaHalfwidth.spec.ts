
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSyllabaryKatakanaHalfwidth from "../../src/components/MdiSyllabaryKatakanaHalfwidth.vue";

test("MdiSyllabaryKatakanaHalfwidth snapshot", () => {
  const wrapper = mount(MdiSyllabaryKatakanaHalfwidth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
