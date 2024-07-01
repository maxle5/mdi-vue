
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorSquare from "../../src/components/MdiVectorSquare.vue";

test("MdiVectorSquare snapshot", () => {
  const wrapper = mount(MdiVectorSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
