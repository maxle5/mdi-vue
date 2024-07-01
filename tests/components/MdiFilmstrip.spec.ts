
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilmstrip from "../../src/components/MdiFilmstrip.vue";

test("MdiFilmstrip snapshot", () => {
  const wrapper = mount(MdiFilmstrip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
