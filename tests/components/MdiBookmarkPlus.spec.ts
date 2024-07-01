
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkPlus from "../../src/components/MdiBookmarkPlus.vue";

test("MdiBookmarkPlus snapshot", () => {
  const wrapper = mount(MdiBookmarkPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
