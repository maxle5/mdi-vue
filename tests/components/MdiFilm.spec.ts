
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilm from "../../src/components/MdiFilm.vue";

test("MdiFilm snapshot", () => {
  const wrapper = mount(MdiFilm, {});
  expect(wrapper.html()).toMatchSnapshot();
});
