
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSyllabaryHangul from "../../src/components/MdiSyllabaryHangul.vue";

test("MdiSyllabaryHangul snapshot", () => {
  const wrapper = mount(MdiSyllabaryHangul, {});
  expect(wrapper.html()).toMatchSnapshot();
});
