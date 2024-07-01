
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagRemove from "../../src/components/MdiTagRemove.vue";

test("MdiTagRemove snapshot", () => {
  const wrapper = mount(MdiTagRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
