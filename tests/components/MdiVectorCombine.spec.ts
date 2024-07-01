
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorCombine from "../../src/components/MdiVectorCombine.vue";

test("MdiVectorCombine snapshot", () => {
  const wrapper = mount(MdiVectorCombine, {});
  expect(wrapper.html()).toMatchSnapshot();
});
