
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaylistCheck from "../../src/components/MdiPlaylistCheck.vue";

test("MdiPlaylistCheck snapshot", () => {
  const wrapper = mount(MdiPlaylistCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
