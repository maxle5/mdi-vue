
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaylistEdit from "../../src/components/MdiPlaylistEdit.vue";

test("MdiPlaylistEdit snapshot", () => {
  const wrapper = mount(MdiPlaylistEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
