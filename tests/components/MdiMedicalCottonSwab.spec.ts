
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMedicalCottonSwab from "../../src/components/MdiMedicalCottonSwab.vue";

test("MdiMedicalCottonSwab snapshot", () => {
  const wrapper = mount(MdiMedicalCottonSwab, {});
  expect(wrapper.html()).toMatchSnapshot();
});
