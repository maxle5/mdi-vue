
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStairsUp from "../../src/components/MdiStairsUp.vue";

test("MdiStairsUp snapshot", () => {
  const wrapper = mount(MdiStairsUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
