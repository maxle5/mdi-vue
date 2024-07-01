
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewArray from "../../src/components/MdiViewArray.vue";

test("MdiViewArray snapshot", () => {
  const wrapper = mount(MdiViewArray, {});
  expect(wrapper.html()).toMatchSnapshot();
});
