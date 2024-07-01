
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilmstripBoxMultiple from "../../src/components/MdiFilmstripBoxMultiple.vue";

test("MdiFilmstripBoxMultiple snapshot", () => {
  const wrapper = mount(MdiFilmstripBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
