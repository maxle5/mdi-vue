
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveRemove from "../../src/components/MdiArchiveRemove.vue";

test("MdiArchiveRemove snapshot", () => {
  const wrapper = mount(MdiArchiveRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
