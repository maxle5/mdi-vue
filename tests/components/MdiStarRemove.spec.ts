
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarRemove from "../../src/components/MdiStarRemove.vue";

test("MdiStarRemove snapshot", () => {
  const wrapper = mount(MdiStarRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
