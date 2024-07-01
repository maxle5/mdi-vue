
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageBookmarkOutline from "../../src/components/MdiMessageBookmarkOutline.vue";

test("MdiMessageBookmarkOutline snapshot", () => {
  const wrapper = mount(MdiMessageBookmarkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
