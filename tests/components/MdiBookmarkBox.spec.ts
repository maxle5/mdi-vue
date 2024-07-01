
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkBox from "../../src/components/MdiBookmarkBox.vue";

test("MdiBookmarkBox snapshot", () => {
  const wrapper = mount(MdiBookmarkBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
