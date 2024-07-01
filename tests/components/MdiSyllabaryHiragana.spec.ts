
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSyllabaryHiragana from "../../src/components/MdiSyllabaryHiragana.vue";

test("MdiSyllabaryHiragana snapshot", () => {
  const wrapper = mount(MdiSyllabaryHiragana, {});
  expect(wrapper.html()).toMatchSnapshot();
});
