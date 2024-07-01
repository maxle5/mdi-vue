
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieStar from "../../src/components/MdiMovieStar.vue";

test("MdiMovieStar snapshot", () => {
  const wrapper = mount(MdiMovieStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
