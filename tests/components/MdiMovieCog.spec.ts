
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovieCog from "../../src/components/MdiMovieCog.vue";

test("MdiMovieCog snapshot", () => {
  const wrapper = mount(MdiMovieCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
