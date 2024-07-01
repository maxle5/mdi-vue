
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeafMaple from "../../src/components/MdiLeafMaple.vue";

test("MdiLeafMaple snapshot", () => {
  const wrapper = mount(MdiLeafMaple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
