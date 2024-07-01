
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaylistRemove from "../../src/components/MdiPlaylistRemove.vue";

test("MdiPlaylistRemove snapshot", () => {
  const wrapper = mount(MdiPlaylistRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
