
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaylistMinus from "../../src/components/MdiPlaylistMinus.vue";

test("MdiPlaylistMinus snapshot", () => {
  const wrapper = mount(MdiPlaylistMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
