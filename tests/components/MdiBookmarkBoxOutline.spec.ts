
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkBoxOutline from "../../src/components/MdiBookmarkBoxOutline.vue";

test("MdiBookmarkBoxOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
