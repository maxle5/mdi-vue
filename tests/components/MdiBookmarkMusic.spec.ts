
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkMusic from "../../src/components/MdiBookmarkMusic.vue";

test("MdiBookmarkMusic snapshot", () => {
  const wrapper = mount(MdiBookmarkMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
