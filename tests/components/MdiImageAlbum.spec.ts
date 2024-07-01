
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageAlbum from "../../src/components/MdiImageAlbum.vue";

test("MdiImageAlbum snapshot", () => {
  const wrapper = mount(MdiImageAlbum, {});
  expect(wrapper.html()).toMatchSnapshot();
});
