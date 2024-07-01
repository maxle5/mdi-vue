
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveSync from "../../src/components/MdiArchiveSync.vue";

test("MdiArchiveSync snapshot", () => {
  const wrapper = mount(MdiArchiveSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
