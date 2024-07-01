
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveRemoveOutline from "../../src/components/MdiArchiveRemoveOutline.vue";

test("MdiArchiveRemoveOutline snapshot", () => {
  const wrapper = mount(MdiArchiveRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
