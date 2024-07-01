
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlbum from "../../src/components/MdiAlbum.vue";

test("MdiAlbum snapshot", () => {
  const wrapper = mount(MdiAlbum, {});
  expect(wrapper.html()).toMatchSnapshot();
});
