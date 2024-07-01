
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorSquareClose from "../../src/components/MdiVectorSquareClose.vue";

test("MdiVectorSquareClose snapshot", () => {
  const wrapper = mount(MdiVectorSquareClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
