
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaylistMusic from "../../src/components/MdiPlaylistMusic.vue";

test("MdiPlaylistMusic snapshot", () => {
  const wrapper = mount(MdiPlaylistMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
