
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadSync from "../../src/components/MdiHeadSync.vue";

test("MdiHeadSync snapshot", () => {
  const wrapper = mount(MdiHeadSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
