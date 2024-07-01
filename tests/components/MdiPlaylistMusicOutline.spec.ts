
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaylistMusicOutline from "../../src/components/MdiPlaylistMusicOutline.vue";

test("MdiPlaylistMusicOutline snapshot", () => {
  const wrapper = mount(MdiPlaylistMusicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
