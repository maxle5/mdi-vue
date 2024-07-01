
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieRoll from "../../src/components/MdiMovieRoll.vue";

test("MdiMovieRoll snapshot", () => {
  const wrapper = mount(MdiMovieRoll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
