
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaylistStar from "../../src/components/MdiPlaylistStar.vue";

test("MdiPlaylistStar snapshot", () => {
  const wrapper = mount(MdiPlaylistStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
