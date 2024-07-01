
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewspaperRemove from "../../src/components/MdiNewspaperRemove.vue";

test("MdiNewspaperRemove snapshot", () => {
  const wrapper = mount(MdiNewspaperRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
