
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaylistPlay from "../../src/components/MdiPlaylistPlay.vue";

test("MdiPlaylistPlay snapshot", () => {
  const wrapper = mount(MdiPlaylistPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
