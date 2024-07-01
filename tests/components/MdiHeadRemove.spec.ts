
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadRemove from "../../src/components/MdiHeadRemove.vue";

test("MdiHeadRemove snapshot", () => {
  const wrapper = mount(MdiHeadRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
