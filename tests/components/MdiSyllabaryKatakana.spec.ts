
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSyllabaryKatakana from "../../src/components/MdiSyllabaryKatakana.vue";

test("MdiSyllabaryKatakana snapshot", () => {
  const wrapper = mount(MdiSyllabaryKatakana, {});
  expect(wrapper.html()).toMatchSnapshot();
});
