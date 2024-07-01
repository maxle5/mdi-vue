
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStairsBox from "../../src/components/MdiStairsBox.vue";

test("MdiStairsBox snapshot", () => {
  const wrapper = mount(MdiStairsBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
