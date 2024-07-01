
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmark from "../../src/components/MdiBookmark.vue";

test("MdiBookmark snapshot", () => {
  const wrapper = mount(MdiBookmark, {});
  expect(wrapper.html()).toMatchSnapshot();
});
