
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMovie from "../../src/components/MdiMovie.vue";

test("MdiMovie snapshot", () => {
  const wrapper = mount(MdiMovie, {});
  expect(wrapper.html()).toMatchSnapshot();
});
