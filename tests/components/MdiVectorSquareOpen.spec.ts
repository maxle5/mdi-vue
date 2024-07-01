
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorSquareOpen from "../../src/components/MdiVectorSquareOpen.vue";

test("MdiVectorSquareOpen snapshot", () => {
  const wrapper = mount(MdiVectorSquareOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
