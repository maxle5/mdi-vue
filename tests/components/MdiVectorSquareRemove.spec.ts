
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorSquareRemove from "../../src/components/MdiVectorSquareRemove.vue";

test("MdiVectorSquareRemove snapshot", () => {
  const wrapper = mount(MdiVectorSquareRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
