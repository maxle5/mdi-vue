
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageBookmark from "../../src/components/MdiMessageBookmark.vue";

test("MdiMessageBookmark snapshot", () => {
  const wrapper = mount(MdiMessageBookmark, {});
  expect(wrapper.html()).toMatchSnapshot();
});
